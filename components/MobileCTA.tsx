import Link from "next/link";
import { site } from "@/lib/site";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-white/95 px-3 py-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-2">
        <a
          href={site.phoneHref}
          className="btn-secondary flex-1 px-3 py-2 text-sm"
          aria-label={`Call ${site.phone}`}
        >
          📞 {site.phone}
        </a>
        <Link href="/get-a-quote" className="btn-primary flex-1 px-3 py-2 text-sm">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
