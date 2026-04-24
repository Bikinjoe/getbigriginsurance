"use client";

import { useEffect, useState } from "react";

const SCRIPT_SRC = "https://app.sembley.com/widgets/embedded-intake.js";

const FORM_BASIC = {
  formId: "18431",
  token: "xqtmt8JvRg8",
  showLogo: false,
};

const FORM_FULL = {
  formId: "17537",
  token: "KjbWhZYCdLA",
  showLogo: true,
};

const ASSIGN_TO_USER = "2918";

function injectScript() {
  const s = document.createElement("script");
  s.src = SCRIPT_SRC;
  s.async = true;
  document.body.appendChild(s);
  return s;
}

export default function SembleyTwoStep() {
  const [step, setStep] = useState<1 | 2>(1);

  // Re-inject the widget script every time the visible form changes so
  // the new <div id="sembley-intake-form"> gets initialized.
  useEffect(() => {
    const s = injectScript();
    return () => {
      try {
        document.body.removeChild(s);
      } catch {}
    };
  }, [step]);

  // Best-effort listener for a Sembley submission postMessage. If the
  // widget signals a submit, advance automatically. Visitors also have
  // the manual "I've submitted" button as a fallback.
  useEffect(() => {
    function onMsg(e: MessageEvent) {
      if (!e.data) return;
      const text =
        typeof e.data === "string"
          ? e.data.toLowerCase()
          : JSON.stringify(e.data).toLowerCase();
      if (
        step === 1 &&
        (text.includes("sembley") || text.includes("intake")) &&
        (text.includes("submit") || text.includes("complete") || text.includes("success"))
      ) {
        setStep(2);
      }
    }
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [step]);

  const form = step === 1 ? FORM_BASIC : FORM_FULL;

  return (
    <div>
      {step === 1 ? (
        <>
          <p className="text-base text-steel sm:text-lg">
            Start with the basics — takes 60 seconds. We'll follow up with a
            full quote.
          </p>
          <ol className="mt-4 flex items-center gap-3 text-sm font-semibold text-ink">
            <li className="rounded-full bg-flame px-3 py-1 text-white">1. Quick start</li>
            <li className="text-slate">→</li>
            <li className="rounded-full border border-ink/20 px-3 py-1 text-slate">
              2. Full quote
            </li>
          </ol>
        </>
      ) : (
        <>
          <p className="text-base text-steel sm:text-lg">
            Last step — give us the rest of your operation details and we'll
            put real numbers in front of you.
          </p>
          <ol className="mt-4 flex items-center gap-3 text-sm font-semibold text-ink">
            <li className="rounded-full bg-mist px-3 py-1 text-ink">1. Done ✓</li>
            <li className="text-slate">→</li>
            <li className="rounded-full bg-flame px-3 py-1 text-white">
              2. Full quote
            </li>
          </ol>
        </>
      )}

      <div className="mt-6 overflow-hidden rounded-lg border border-ink/10 bg-white">
        <div
          key={`sembley-${form.formId}`}
          id="sembley-intake-form"
          data-form-id={form.formId}
          data-secure-token={form.token}
          data-height="800px"
          data-show-logo={String(form.showLogo)}
          data-assign-to-user={ASSIGN_TO_USER}
        />
      </div>

      {step === 1 && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">
            Already submitted the quick form? Continue to the full quote.
          </p>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="btn-primary"
          >
            Continue to full quote →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-sm font-semibold text-slate hover:text-flame"
          >
            ← Back to quick form
          </button>
        </div>
      )}
    </div>
  );
}
