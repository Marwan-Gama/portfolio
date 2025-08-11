/**
 * Custom Hook for Contact Form Management
 *
 * This hook provides:
 * - Form state management
 * - Validation logic
 * - Submission handling
 * - Error state management
 */

import { useState, useCallback } from "react";
import { ContactFormData } from "../types";
import { validateContactForm } from "../utils";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants";

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: Partial<ContactFormData>;
  isLoading: boolean;
  isSubmitted: boolean;
  message: string;
  handleInputChange: (field: keyof ContactFormData, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

/**
 * Custom hook for managing contact form state and validation
 * @returns UseContactFormReturn - Form management functions and state
 */
export const useContactForm = (): UseContactFormReturn => {
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  // Loading and submission state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  /**
   * Handle input field changes
   * @param field - The form field to update
   * @param value - The new value for the field
   */
  const handleInputChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Clear error for this field when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    },
    [errors]
  );

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setMessage("");
  }, []);

  /**
   * Handle form submission
   * @param e - Form submission event
   */
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate form data
      const validation = validateContactForm(formData);

      if (!validation.isValid) {
        setErrors(validation.errors);
        setMessage(ERROR_MESSAGES.validationError);
        return;
      }

      setIsLoading(true);
      setMessage("");

      try {
        // Here you would typically make an API call
        // For now, we'll simulate a successful submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitted(true);
        setMessage(SUCCESS_MESSAGES.contactSent);
        resetForm();
      } catch (error) {
        console.error("Contact form submission error:", error);
        setMessage(ERROR_MESSAGES.serverError);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, resetForm]
  );

  return {
    formData,
    errors,
    isLoading,
    isSubmitted,
    message,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
