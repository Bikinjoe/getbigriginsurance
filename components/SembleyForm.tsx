"use client";

import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://app.sembley.com/widgets/embedded-intake.js";
const ASSIGN_TO_USER = "2918";

// Generous fallback height per spec, used until/unless the Sembley iframe
// posts back its real content height.
const FALLBACK_HEIGHT = "1200px";

type Props = {
  formId: string;
  token: string;
  showLogo?: boolean;
  onSubmitted?: () => void;
};

export default function SembleyForm({
  formId,
  token,
  showLogo = false,
  onSubmitted,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Inject the widget script after the target div is in the DOM.
  useEffect(() => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
    return () => {
      try {
        document.body.removeChild(s);
      } catch {}
    };
  }, [formId]);

  // Listen for postMessages from the Sembley iframe:
  //   - Resize the iframe to its actual content height (kills scroll-in-scroll)
  //   - Detect submission and call onSubmitted (page redirects from there)
  // If Sembley never posts a height, the iframe stays at FALLBACK_HEIGHT.
  useEffect(() => {
    function applyHeight(h: number) {
      const iframe = wrapRef.current?.querySelector("iframe");
      if (!iframe || !(h > 100)) return;
      iframe.style.height = `${h}px`;
      iframe.style.minHeight = `${h}px`;
      iframe.setAttribute("scrolling", "no");
    }

    function extractHeight(payload: unknown): number | null {
      if (!payload) return null;
      let obj: any = payload;
      if (typeof payload === "string") {
        try {
          obj = JSON.parse(payload);
        } catch {
          return null;
        }
      }
      if (typeof obj !== "object" || obj === null) return null;
      const candidate =
        obj.height ?? obj.frameHeight ?? obj.iframeHeight ?? obj.contentHeight;
      if (typeof candidate === "number") return candidate;
      if (typeof candidate === "string" && /^\d+/.test(candidate)) {
        return parseInt(candidate, 10);
      }
      return null;
    }

    function looksLikeSubmission(payload: unknown): boolean {
      const text =
        typeof payload === "string"
          ? payload.toLowerCase()
          : JSON.stringify(payload).toLowerCase();
      const submitted =
        text.includes("submit") ||
        text.includes("complete") ||
        text.includes("success") ||
        text.includes("thank");
      const fromSembley =
        text.includes("sembley") ||
        text.includes("intake") ||
        text.includes("form");
      return submitted && fromSembley;
    }

    function onMsg(e: MessageEvent) {
      if (!e.data) return;
      const h = extractHeight(e.data);
      if (h !== null) applyHeight(h);
      if (onSubmitted && looksLikeSubmission(e.data)) onSubmitted();
    }

    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [onSubmitted]);

  return (
    <div ref={wrapRef} className="overflow-hidden rounded-lg border border-border bg-surface-2">
      <div
        id="sembley-intake-form"
        data-form-id={formId}
        data-secure-token={token}
        data-height={FALLBACK_HEIGHT}
        data-show-logo={String(showLogo)}
        data-assign-to-user={ASSIGN_TO_USER}
      />
    </div>
  );
}
