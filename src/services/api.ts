/**
 * API Service Layer
 *
 * Centralized service for handling all HTTP requests to the backend API.
 * Includes error handling, request/response interceptors, and retry logic.
 */

import { ContactFormData, ApiResponse } from "../types";
import { API_CONFIG, API_ENDPOINTS, HTTP_STATUS } from "../config/api";
import { ERROR_MESSAGES } from "../constants";

/**
 * Custom error class for API errors
 */
class ApiError extends Error {
  public status: number;
  public data?: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

/**
 * Make HTTP request with timeout and retry logic
 * @param url - The API endpoint URL
 * @param options - Fetch options
 * @returns Promise with response data
 */
const makeRequest = async (
  url: string,
  options: RequestInit = {}
): Promise<any> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...API_CONFIG.getDefaultHeaders(),
        ...options.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof Error && error.name === "AbortError") {
      throw new ApiError("Request timeout", 408);
    }

    throw new ApiError(ERROR_MESSAGES.networkError, 0);
  }
};

/**
 * Retry function with exponential backoff
 * @param fn - Function to retry
 * @param maxRetries - Maximum number of retry attempts
 * @returns Promise with function result
 */
const retry = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = API_CONFIG.MAX_RETRIES
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (attempt === maxRetries) {
        break;
      }

      // Don't retry on client errors (4xx)
      if (
        error instanceof ApiError &&
        error.status >= 400 &&
        error.status < 500
      ) {
        throw error;
      }

      // Wait before retrying (exponential backoff)
      const delay = API_CONFIG.RETRY_DELAY * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
};

/**
 * API service class with methods for different endpoints
 */
export class ApiService {
  /**
   * Send contact form data
   * @param data - Contact form data
   * @returns Promise with API response
   */
  static async sendContactForm(data: ContactFormData): Promise<ApiResponse> {
    const url = API_CONFIG.getEndpointUrl(API_ENDPOINTS.CONTACT);

    return retry(() =>
      makeRequest(url, {
        method: "POST",
        body: JSON.stringify(data),
      })
    );
  }

  /**
   * Check API health status
   * @returns Promise with health check response
   */
  static async checkHealth(): Promise<ApiResponse> {
    const url = API_CONFIG.getEndpointUrl(API_ENDPOINTS.HEALTH);

    return retry(() =>
      makeRequest(url, {
        method: "GET",
      })
    );
  }

  /**
   * Generic GET request
   * @param endpoint - API endpoint
   * @returns Promise with response data
   */
  static async get<T = any>(endpoint: string): Promise<T> {
    const url = API_CONFIG.getEndpointUrl(endpoint);

    return retry(() =>
      makeRequest(url, {
        method: "GET",
      })
    );
  }

  /**
   * Generic POST request
   * @param endpoint - API endpoint
   * @param data - Request body data
   * @returns Promise with response data
   */
  static async post<T = any>(endpoint: string, data: any): Promise<T> {
    const url = API_CONFIG.getEndpointUrl(endpoint);

    return retry(() =>
      makeRequest(url, {
        method: "POST",
        body: JSON.stringify(data),
      })
    );
  }

  /**
   * Generic PUT request
   * @param endpoint - API endpoint
   * @param data - Request body data
   * @returns Promise with response data
   */
  static async put<T = any>(endpoint: string, data: any): Promise<T> {
    const url = API_CONFIG.getEndpointUrl(endpoint);

    return retry(() =>
      makeRequest(url, {
        method: "PUT",
        body: JSON.stringify(data),
      })
    );
  }

  /**
   * Generic DELETE request
   * @param endpoint - API endpoint
   * @returns Promise with response data
   */
  static async delete<T = any>(endpoint: string): Promise<T> {
    const url = API_CONFIG.getEndpointUrl(endpoint);

    return retry(() =>
      makeRequest(url, {
        method: "DELETE",
      })
    );
  }
}

export default ApiService;
