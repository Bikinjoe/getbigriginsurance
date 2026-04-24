import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title: string;
  sub?: string;
  showCTAs?: boolean;
};

export default function PageHero({ eyebrow, title, sub, showCTAs = true }: Props) {
  return (
    <section className="bg-gradient-to-b from-ink to-steel text-white">
      <div className="container-narrow py-14 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-flame">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-4 max-w-3xl text-base text-mist sm:text-lg">{sub}</p>
        )}
        {showCTAs && (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
              Get My Quote
            </Link>
            <a href={site.phoneHref} className="btn-secondary w-full bg-white sm:w-auto">
              Call {site.phone}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
