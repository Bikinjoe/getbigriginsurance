import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata = {
  title: "New Trucking Authority? Here's Exactly What Insurance You Need",
  description:
    "What FMCSA requires, what brokers require, what we recommend. Get covered the same day. Call 541-681-8793.",
};

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Insure a New Trucking Authority",
  step: [
    { "@type": "HowToStep", name: "Gather your information", text: "DOT number, MC number, truck VIN, driver info, and operating radius." },
    { "@type": "HowToStep", name: "Request a quote", text: "Call 541-681-8793 or use our online form to give us your details." },
    { "@type": "HowToStep", name: "Review options", text: "We shop 23+ carriers and bring back the best price and coverage combination." },
    { "@type": "HowToStep", name: "Bind and get your COI", text: "We bind your policy the same day and send your certificate of insurance to brokers." },
  ],
};

export default function NewAuthorityPage() {
  return (
    <>
      <JsonLd data={howTo} />
      <PageHero
        eyebrow="New MC/DOT holders"
        title="New Trucking Authority? Here's Exactly What Insurance You Need."
        sub="You got the authority. Now you need coverage that satisfies FMCSA, brokers, and your lender — at a rate you can actually pay. Here's the plain-English version."
      />
      <Breadcrumbs items={[{ label: "New Authority" }]} />

      <article className="container-narrow prose-trucking pb-4 pt-8">
        <p>
          If you just activated your authority, you need three policies to
          haul legally and to pick up loads: primary liability, cargo, and
          physical damage on your truck. We'll walk through each one, what
          FMCSA actually requires, what brokers actually require, and what we
          recommend as your specialist agency.
        </p>

        <h2>What FMCSA requires</h2>
        <p>
          FMCSA sets the minimum primary liability requirement based on what
          you haul. For most general freight, the minimum is $750,000. For
          hazmat, it's up to $5,000,000. FMCSA also requires a BMC-91 or
          BMC-91X filing showing you have that coverage in place.
        </p>
        <p>
          Cargo coverage is <strong>not</strong> required by FMCSA for most
          general freight. That said, the filing for cargo (BMC-34) is still
          something most owner-ops end up doing because brokers require it.
          More on that below.
        </p>
        <ul>
          <li>General freight: $750,000 primary liability minimum</li>
          <li>Hazardous materials: $1,000,000 to $5,000,000 depending on class</li>
          <li>Household goods movers: cargo filing (BMC-34) is required</li>
          <li>Proof filed with FMCSA as BMC-91 (primary liability)</li>
        </ul>

        <h2>What brokers require</h2>
        <p>
          Here's the thing FMCSA doesn't tell you: the minimums don't matter
          if no broker will give you a load. Most freight brokers require
          higher limits than the FMCSA minimum before they'll set you up in
          their system. Plan on these numbers:
        </p>
        <ul>
          <li><strong>$1,000,000 in primary liability</strong> — this is the universal broker minimum</li>
          <li><strong>$100,000 in cargo coverage</strong> — standard for dry van, flatbed, reefer</li>
          <li>Some shippers (auto transport, high-value freight) require $250,000+ cargo</li>
          <li>Some brokers require a trailer interchange or non-owned trailer endorsement</li>
          <li>A broker wants to be named as a certificate holder</li>
        </ul>
        <p>
          If you only carry the FMCSA minimum, you'll struggle to find loads.
          Bumping to $1M liability is almost always worth it.
        </p>

        <h2>What we recommend</h2>
        <p>
          For a new authority running a typical single-truck operation, the
          coverage we recommend out of the gate looks like this:
        </p>
        <ul>
          <li><strong>Primary liability:</strong> $1,000,000 combined single limit</li>
          <li><strong>Cargo:</strong> $100,000 with a $1,000 deductible</li>
          <li><strong>Physical damage:</strong> your truck's actual value, typically $1,000 deductible</li>
          <li><strong>Trailer interchange:</strong> $40,000 to $75,000 depending on what you pull</li>
          <li><strong>Non-trucking liability (bobtail):</strong> if you lease onto a motor carrier while getting started</li>
        </ul>
        <p>
          If you're going to haul reefer loads, add reefer breakdown coverage.
          If you're going to haul high-value freight, increase cargo limits.
          If you're running cross-country, expect a higher rate than
          someone running a 300-mile radius.
        </p>

        <VideoPlaceholder label="New authority insurance requirements in 60 seconds" />

        <h2>Timeline: how to get covered fast</h2>
        <p>
          Most new authorities can be bound the same day if they come to us
          prepared. Here's a realistic timeline:
        </p>
        <ol>
          <li><strong>Morning:</strong> Call us or fill out the online form with your DOT, MC, VIN, driver info, and what you plan to haul.</li>
          <li><strong>Same day:</strong> We shop your account across our 23+ carriers.</li>
          <li><strong>Afternoon:</strong> You review quotes on the phone and choose one.</li>
          <li><strong>Bound that day:</strong> We issue your certificate of insurance and file with FMCSA.</li>
          <li><strong>Next day:</strong> FMCSA updates your authority to "active" — you can legally dispatch.</li>
        </ol>

        <h2>What to have ready before you call</h2>
        <p>
          The more of this you have ready, the faster we can quote you:
        </p>
        <ul>
          <li>DOT number and MC number</li>
          <li>Truck year, make, model, VIN, and current value</li>
          <li>Driver's license, date of birth, CDL state, and years of experience</li>
          <li>What commodities you plan to haul</li>
          <li>Operating radius (local, regional, all 48)</li>
          <li>Business name and mailing address</li>
          <li>Any accidents, tickets, or out-of-service events in the last 3 years</li>
        </ul>

        <h2>Why specialists quote new authorities better</h2>
        <p>
          Not every insurance carrier writes new authorities. Some won't touch
          them. Others will — but only if their underwriter knows the
          trucking book inside and out. We know which of our 23+ carriers
          write new MC numbers, at what rates, and what each one values
          (clean MVR, verifiable driving history, specific commodities).
        </p>
        <p>
          A generalist agent will submit you to 2 or 3 markets and bring back
          whatever sticks. We know the right 5 to 7 markets for your profile
          on the first pass. That's the difference.
        </p>

        <h2>New authority cost expectations</h2>
        <p>
          Real ranges for a new authority owner-op running one truck:
        </p>
        <ul>
          <li>Primary liability ($1M): $500 to $900 per month</li>
          <li>Physical damage: $150 to $400 per month depending on truck value</li>
          <li>Cargo ($100K): $75 to $200 per month</li>
          <li>Total annual: $8,000 to $18,000 for most new authorities</li>
        </ul>
        <p>
          Your commodity, radius, truck value, and driving record move you
          within that range.{" "}
          <Link href="/how-much-does-trucking-insurance-cost">
            See the full cost breakdown.
          </Link>
        </p>

        <h2>Common new authority questions</h2>
        <h3>Do I need coverage before my MC number is active?</h3>
        <p>
          Yes. FMCSA won't activate your authority until your insurance
          filings are on record. You buy the coverage, we file the BMC-91,
          FMCSA activates you. That's the sequence.
        </p>

        <h3>Can I use personal auto insurance for a commercial truck?</h3>
        <p>
          No. Commercial trucking insurance is a separate product with
          separate filings. A personal policy won't pay a claim if you were
          operating commercially, and it won't satisfy FMCSA.
        </p>

        <h3>How long am I considered a "new authority"?</h3>
        <p>
          Most carriers consider you new authority for 12 to 18 months. After
          that, assuming no claims, your rate typically drops meaningfully.
          Some carriers will rerate you at 6 months if you've been clean.
        </p>

        <h3>Should I lease onto an existing carrier first?</h3>
        <p>
          It's a legitimate path. Leasing on means you run under their
          authority and their insurance. You give up a percentage of the
          load but you skip the new authority insurance premium. Most
          owner-ops lease on for 6 to 12 months, then activate their own
          authority once they've got reserves and freight relationships.{" "}
          <Link href="/faq">
            We break down lease-on vs. own authority in the FAQ.
          </Link>
        </p>
      </article>

      <CTASection
        heading="Ready to activate your authority?"
        sub="Call us or start your quote online. Same-day coverage available."
      />

      <RelatedLinks
        items={[
          {
            href: "/how-much-does-trucking-insurance-cost",
            title: "How much does trucking insurance cost?",
            desc: "Real numbers for new authorities and owner-ops.",
          },
          {
            href: "/what-insurance-do-i-need-new-trucking-authority",
            title: "What insurance do I need?",
            desc: "Primary liability, cargo, physical damage, and more.",
          },
          {
            href: "/owner-operator",
            title: "Owner operator coverage",
            desc: "Shop 23 carriers for one truck, one authority.",
          },
        ]}
      />
    </>
  );
}
