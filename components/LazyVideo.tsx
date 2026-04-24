"use client";

import dynamic from "next/dynamic";

// Code-split + lazy-load the YouTube embed component itself.
// Renders an aspect-ratio-locked skeleton during hydration so the page
// doesn't shift when the component arrives.
const YouTubeLite = dynamic(() => import("./YouTubeLite"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="mt-8 aspect-video w-full animate-pulse overflow-hidden rounded-lg border border-border bg-surface"
    />
  ),
});

export default function LazyVideo({ id, label }: { id: string; label: string }) {
  return <YouTubeLite id={id} label={label} />;
}
