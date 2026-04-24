"use client";

import { useState } from "react";

type Props = {
  id: string;
  label: string;
};

// Lazy-loaded YouTube embed.
// On first paint we render a static thumbnail with a play overlay, no
// YouTube JS, no iframe, no third-party requests. The iframe (and all of
// YouTube's tracking + JS) only loads after the visitor clicks play.
// Wrapped in next/dynamic at the page boundary so the component code
// itself is also code-split.
export default function YouTubeLite({ id, label }: Props) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-bg text-white">
      {active ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={label}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${label}`}
          className="group relative block w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={label}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover"
          />
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-flame text-3xl text-white shadow-lg transition group-hover:scale-110">
              ▶
            </span>
          </span>
        </button>
      )}
      <figcaption className="px-4 py-3 text-sm font-medium text-foreground">
        Watch: {label}
      </figcaption>
    </figure>
  );
}
