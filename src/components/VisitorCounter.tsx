/**
 * VisitorCounter – displays total site visits, counts once per session.
 * POSTs on first load (per session), uses sessionStorage to avoid double count.
 * Fetches count from /api/visits; handles loading/error and aborts on unmount.
 */

import { useEffect, useState, useRef } from "react";
import type { VisitsApiResponse } from "../types";

const VISITS_API = "/api/visits";
const SESSION_KEY = "portfolio:visitorCounted";

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return n.toLocaleString();
}

export default function VisitorCounter(): JSX.Element {
  const [count, setCount] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const aborted = useRef(false);

  useEffect(() => {
    aborted.current = false;
    const controller = new AbortController();

    async function run(): Promise<void> {
      setStatus("loading");
      const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";

      try {
        const url = VISITS_API;
        const options: RequestInit = {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        };

        if (alreadyCounted) {
          const res = await fetch(url, { ...options, method: "GET" });
          if (aborted.current) return;
          if (!res.ok) throw new Error("Failed to fetch count");
          const data = (await res.json()) as VisitsApiResponse;
          setCount(data.count);
        } else {
          const res = await fetch(url, { ...options, method: "POST" });
          if (aborted.current) return;
          if (!res.ok) throw new Error("Failed to increment count");
          const data = (await res.json()) as VisitsApiResponse;
          sessionStorage.setItem(SESSION_KEY, "1");
          setCount(data.count);
        }
        setStatus("idle");
      } catch (err) {
        if (aborted.current) return;
        const message = err instanceof Error ? err.message : "Request failed";
        if (message !== "The user aborted a request.") {
          setStatus("error");
          setCount(null);
        }
      }
    }

    run();
    return () => {
      aborted.current = true;
      controller.abort();
    };
  }, []);

  return (
    <span className="visitor-counter" title="Total site visits">
      {status === "error" && <span className="visitor-counter--error">Visitor count unavailable</span>}
      {(status === "loading" || (count === null && status !== "error")) && <span className="visitor-counter--loading">Loading…</span>}
      {status === "idle" && count !== null && <span>{formatCount(count)} visitors</span>}
    </span>
  );
}
