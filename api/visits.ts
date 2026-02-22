/**
 * Vercel Serverless API: Visitor count
 * GET  → return current count
 * POST → increment count and return new count
 * Uses Upstash Redis when env vars are set; otherwise in-memory fallback.
 */
/// <reference types="node" />

const VISITS_KEY = "portfolio:visits";

/** In-memory fallback when Redis is not configured (resets on cold start). */
let memoryCount = 0;

interface VisitsResponse {
  count: number;
}

function jsonResponse(data: VisitsResponse, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

async function getCountFromRedis(): Promise<number | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const res = await fetch(`${url}/get/${VISITS_KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { result: string | null };
  const value = data.result;
  if (value === null) return 0;
  const n = parseInt(value, 10);
  return Number.isNaN(n) ? 0 : n;
}

async function incrInRedis(): Promise<number> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    memoryCount += 1;
    return memoryCount;
  }

  const res = await fetch(`${url}/incr/${VISITS_KEY}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    memoryCount += 1;
    return memoryCount;
  }
  const data = (await res.json()) as { result: number };
  return typeof data.result === "number" ? data.result : memoryCount;
}

export default {
  async fetch(request: Request): Promise<Response> {
    const method = request.method;

    if (method === "GET") {
      const count = await getCountFromRedis();
      const value = count !== null ? count : memoryCount;
      return jsonResponse({ count: value });
    }

    if (method === "POST") {
      const count = await incrInRedis();
      return jsonResponse({ count });
    }

    return new Response("Method Not Allowed", { status: 405 });
  },
};
