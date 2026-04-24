import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  heading?: string;
  sub?: string;
};

export default function CTASection({
  heading = "Ready to get covered?",
  sub = "Get a quote in 5 minutes. Same-day coverage available.",
}: Props) {
  return (
    <section className="bg-ink text-white">
      <div className="container-narrow py-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-mist sm:text-lg">{sub}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/get-a-quote" className="btn-primary w-full sm:w-auto">
            Get My Quote
          </Link>
          <a href={site.phoneHref} className="btn-secondary w-full bg-white sm:w-auto">
            {site.phoneCTA}
          </a>
        </div>
      </div>
    </section>
  );
}
