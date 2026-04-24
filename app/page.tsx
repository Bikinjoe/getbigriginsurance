import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata = {
  title: "Trucking Insurance for New Authority & Owner Operators",
  description:
    "Get covered today. We shop 23+ carriers to find the best rate. Same-day coverage. New authority welcome. Call 541-681-8793.",
};

const homeFAQs = [
  {
    q: "How fast can I get covered?",
    a: (
      <p>
        Same day. If we have your DOT number, truck info, and driver info, we
        can usually bind a policy and send a certificate of insurance within a
        few hours during business hours.
      </p>
    ),
  },
  {
    q: "How much does it cost for a new authority?",
    a: (
      <p>
        Most new authority owner operators pay between $8,000 and $18,000 a
        year for primary liability and physical damage combined. Your
        commodity, radius, truck value, and driving record set where you land
        in that range.{" "}
        <Link href="/how-much-does-trucking-insurance-cost">See the full breakdown.</Link>
      </p>
    ),
  },
  {
    q: "What insurance do I actually need?",
    a: (
      <p>
        FMCSA requires $750K of primary liability, but most brokers won't
        dispatch you without $1M. Cargo is required by most brokers
        ($100K minimum), and physical damage protects your truck.{" "}
        <Link href="/what-insurance-do-i-need-new-trucking-authority">Read the breakdown.</Link>
      </p>
    ),
  },
  {
    q: "Will you cover me if my authority is brand new?",
    a: (
      <p>
        Yes. We specialize in new authorities. We know which of our 23+
        carriers write new MC numbers at fair rates and which ones won't even
        look at you. That's the whole point of using a specialist.
      </p>
    ),
  },
  {
    q: "Are you an independent agency?",
    a: (
      <p>
        Yes. We are not a captive agent. We work for you. We shop your account
        across 23+ carriers and bring you the best mix of price and coverage.{" "}
        <Link href="/trucking-insurance-companies-compared">Why that matters.</Link>
      </p>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFAQs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : "" },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ink via-steel to-slate text-white">
        <div className="container-narrow py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-flame">
            Trucking insurance specialists · Eugene, OR
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            New Authority?
            <br />
            <span className="text-flame">Get Covered Today.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mist sm:text-xl">
            We shop 23+ carriers to find you the best rate. Same-day coverage
            available. No runaround.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-a-quote" className="btn-primary w-full text-lg sm:w-auto">
              Get My Quote
            </Link>
            <a href={site.phoneHref} className="btn-secondary w-full bg-white text-lg sm:w-auto">
              Call {site.phone}
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-mist sm:grid-cols-2 md:grid-cols-4">
            {["23+ carrier markets", "Same-day coverage", "New authority welcome", "Independent agency"].map(
              (b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-flame text-xs font-bold text-white">
                    ✓
                  </span>
                  {b}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Above-the-fold links to dedicated pages */}
      <section className="container-narrow py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/new-authority"
            className="group rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:border-flame hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Just got your MC/DOT?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-ink group-hover:text-flame">
              New Authority Insurance →
            </h2>
            <p className="mt-2 text-base text-steel">
              What FMCSA requires, what brokers require, and how to get covered
              in 24 hours.
            </p>
          </Link>
          <Link
            href="/owner-operator"
            className="group rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:border-flame hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Running your own authority?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-ink group-hover:text-flame">
              Owner Operator Coverage →
            </h2>
            <p className="mt-2 text-base text-steel">
              Shop 23 carriers in one shot. Coverage that fits the freight
              you actually haul.
            </p>
          </Link>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-mist">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Getting your authority was the hard part.
            <br />
            <span className="text-flame">Finding the right insurance shouldn't be.</span>
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-lg text-steel">
            <p>
              You just got your MC/DOT number. Now everyone wants proof of
              insurance before they'll give you a load.
            </p>
            <p>
              Most agents don't understand new authorities. They quote you
              high, or they can't get you covered at all.
            </p>
            <p className="font-semibold text-ink">That's not how we work.</p>
          </div>
        </div>
      </section>

      {/* Guide section */}
      <section className="container-narrow py-16">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          We know trucking insurance.
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-steel">
          <p>
            Vantage Point Risk Partners is an independent insurance agency that
            specializes in trucking. We work with 23+ carriers. We know which
            ones write new authorities at fair rates.
          </p>
          <p>
            We've helped hundreds of owner-ops get covered and get hauling.
          </p>
          <p className="font-semibold text-ink">
            We work for you. Not the insurance company.
          </p>
        </div>
      </section>

      {/* 3 step plan */}
      <section className="bg-ink text-white">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get covered in 3 steps.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Tell us about your operation.",
                body: "Your truck, your authority, what you haul, where you run. Takes 5 minutes.",
              },
              {
                n: "2",
                title: "We shop 23+ carriers.",
                body: "We find the coverage you need at the best available rate. We explain every option in plain English.",
              },
              {
                n: "3",
                title: "You get covered.",
                body: "Same-day coverage available. Certificate of insurance sent immediately.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-lg border border-mist/10 bg-steel/40 p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-flame text-xl font-black">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-base text-mist">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/get-a-quote" className="btn-primary text-lg">
              Start My Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="container-narrow py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-ink/10 p-6 text-center">
            <div className="text-4xl font-extrabold text-flame">23+</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink">
              Carrier markets
            </p>
            <p className="mt-2 text-sm text-steel">
              We shop your account across more than two dozen trucking
              carriers in a single quote.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 p-6 text-center">
            <div className="text-4xl font-extrabold text-flame">100s</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink">
              Owner-ops covered
            </p>
            <p className="mt-2 text-sm text-steel">
              From box trucks and hot shots to flatbed, reefer, and dry van
              owner operators.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 p-6 text-center">
            <div className="text-4xl font-extrabold text-flame">★★★★★</div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink">
              Google reviews
            </p>
            <p className="mt-2 text-sm text-steel">
              Truckers say what matters: fast quotes, fair rates, real people on
              the phone.{" "}
              <Link href="/trucking-insurance-reviews" className="font-semibold text-flame hover:underline">
                Read reviews →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-dashed border-ink/20 bg-mist/40 p-6 text-center text-sm text-steel">
          Carrier logo strip · 23+ markets including national and specialty
          trucking insurers
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-mist">
        <div className="container-narrow py-16">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Common questions.
          </h2>
          <p className="mt-2 text-lg text-steel">
            Quick answers to what new authority truckers ask us most.
          </p>
          <div className="mt-8">
            <FAQAccordion items={homeFAQs} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="btn-secondary">
              See all 25 questions
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
