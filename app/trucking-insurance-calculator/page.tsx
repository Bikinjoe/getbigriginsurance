import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import QuoteCalculator from "@/components/QuoteCalculator";

export const metadata = {
  title: "Trucking Insurance Cost Calculator, Estimate Your Annual Premium",
  description:
    "Use our interactive trucking insurance calculator to estimate annual premium for owner operators. Select truck type, radius, commodity, driving record, and more.",
};

export default function CalculatorPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to estimate your trucking insurance cost",
          description:
            "Select your truck type, authority age, radius, commodity, truck value, and driver record to estimate annual trucking insurance cost for primary liability and physical damage.",
          step: [
            { "@type": "HowToStep", name: "Pick your truck type", text: "Box truck, dry van, flatbed, reefer, hot shot, auto transport, or tanker." },
            { "@type": "HowToStep", name: "Set authority age", text: "New authority (under 1 year), 1–2 years, or 2+ years." },
            { "@type": "HowToStep", name: "Choose radius", text: "Local under 100 miles, regional 100–500 miles, or long haul 500+ miles." },
            { "@type": "HowToStep", name: "Pick commodity and truck value", text: "Select what you haul and the market value of your truck." },
            { "@type": "HowToStep", name: "Enter driver record", text: "Clean, minor violations, or a major violation in the last 3 years." },
            { "@type": "HowToStep", name: "Review your range", text: "See your estimated annual premium range, what's driving it, and what could bring it down." },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How accurate is the trucking insurance calculator?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The calculator gives a realistic range based on truck type, authority age, radius, commodity, truck value, and driver record. Your actual rate depends on full underwriting review including MVR, PSP, and carrier-specific appetite. For a real number, request a quote.",
              },
            },
            {
              "@type": "Question",
              name: "Why is my new authority rate so much higher than a seasoned carrier?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "New authorities pay roughly 40% more than seasoned carriers because insurers have no loss history to underwrite against. After 12–18 months of clean operation, most carriers will rerate the account and the new authority premium drops off.",
              },
            },
            {
              "@type": "Question",
              name: "What brings my trucking insurance rate down the most?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A clean MVR over 3 years, seasoned authority (2+ years, no claims), tighter radius, lower truck value or higher physical damage deductible, and re-marketing the account each renewal across multiple carriers.",
              },
            },
          ],
        }}
      />
      <PageHero
        eyebrow="Interactive estimator"
        title="Trucking Insurance Cost Calculator."
        sub="Pick your truck type, authority age, radius, commodity, truck value, and driver record. We'll give you a realistic annual range for primary liability and physical damage."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Calculator" }]} />

      <section className="container-narrow py-10">
        <QuoteCalculator />
      </section>

      <article className="container-narrow prose-trucking">
        <h2>How the calculator works</h2>
        <p>
          The calculator is built on real pricing ranges we see across our
          carrier panel. It takes a base rate for your truck type, then
          applies multipliers for authority age, radius, commodity, truck
          value, and driver record.
        </p>
        <p>
          This is an estimate, not a binding quote. Underwriters pull your
          MVR and PSP when they quote, and they weight things the calculator
          can't, prior at-fault claims, specific states of domicile,
          carrier appetite that changes by month. For a real number, call
          or text us.
        </p>

        <h2>What moves your number the most</h2>
        <ul>
          <li><strong>Authority age:</strong> new authority adds roughly 40% over a seasoned profile. This rolls off after 12–18 months.</li>
          <li><strong>Driver record:</strong> a major violation adds ~30%. A clean record over 3 years takes a few percent off.</li>
          <li><strong>Commodity:</strong> hazmat adds ~35%. Household goods adds ~15%. Dry van is the baseline.</li>
          <li><strong>Radius:</strong> long haul adds ~20%. Local is ~10% cheaper.</li>
          <li><strong>Truck value:</strong> over $150K adds a flat premium for the physical damage exposure.</li>
        </ul>

        <h2>After the calculator, get the real number</h2>
        <p>
          The fastest way to get an actual quote is to tell us about your
          operation and let us shop it across our 23+ carriers. Most new
          authority quotes come back the same day. Call or text{" "}
          <a href="tel:+15416818793">Call or text 541-681-8793</a> or use
          our online form.
        </p>
      </article>

      <CTASection
        heading="Want the real number?"
        sub="We'll turn an actual quote around, usually the same business day."
      />

      <RelatedLinks
        items={[
          {
            href: "/how-much-does-trucking-insurance-cost",
            title: "Cost breakdown",
            desc: "Real ranges with line-item detail.",
          },
          {
            href: "/new-authority",
            title: "New authority guide",
            desc: "What to know before your first quote.",
          },
          {
            href: "/faq",
            title: "FAQ",
            desc: "Answers to 25 common questions.",
          },
        ]}
      />
    </>
  );
}
