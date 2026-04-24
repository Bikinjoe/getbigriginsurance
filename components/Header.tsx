"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-narrow flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-flame text-white">
            <span className="text-lg font-black leading-none">BR</span>
          </span>
          <span className="text-base sm:text-lg">
            Get<span className="text-flame">Big</span>RigInsurance
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="btn-ghost">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-ink hover:text-flame"
            aria-label={`Call ${site.phone}`}
          >
            {site.phone}
          </a>
          <Link href="/get-a-quote" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        <button
          className="rounded-md border border-ink/20 px-3 py-2 text-sm font-semibold lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <div className="container-narrow flex flex-col gap-1 py-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-base font-medium text-ink hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="rounded-md px-3 py-2 text-base font-semibold text-ink hover:bg-mist"
            >
              Call {site.phone}
            </a>
            <Link
              href="/get-a-quote"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
