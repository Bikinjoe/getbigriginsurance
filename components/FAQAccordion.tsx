"use client";

import { useState } from "react";

export type FAQ = { q: string; a: React.ReactNode };

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-ink sm:text-lg">{item.q}</span>
              <span
                aria-hidden
                className={`mt-1 grid h-6 w-6 flex-none place-items-center rounded-full border border-ink/20 text-sm transition ${
                  isOpen ? "bg-flame text-white" : "text-ink"
                }`}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="prose-trucking px-5 pb-5 text-base text-steel">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
