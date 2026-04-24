import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import LazyVideo from "@/components/LazyVideo";

export const metadata = {
  title: "Trucking Insurance for Owner Operators — Shop 23 Carriers",
  description:
    "Owner operator trucking insurance quoted across 23+ carriers. Coverage for dry van, flatbed, reefer, hot shot, and box truck. Same-day binding.",
};

export default function OwnerOperatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Owner operators"
        title="Trucking Insurance for Owner Operators — Shop 23 Carriers, Get the Best Rate."
        sub="One truck. Your authority. Your business. We build your insurance program the same way — around your freight, your routes, and your margins."
      />
      <Breadcrumbs items={[{ label: "Owner Operator" }]} />

      <article className="container-narrow prose-trucking pb-4 pt-8">
        <p>
          Owner operators have different needs than fleets and different needs
          than company drivers. You own the truck. You own the authority. You
          own the upside and the downside. Your insurance program should be
          built for that, not copied from a 50-truck fleet.
        </p>
        <p>
          We specialize in single-truck and small-fleet owner-ops. Below is
          how we build your program, what it typically costs, what affects
          your rate, and how to save money over time.
        </p>

        <h2>Coverage breakdown for owner operators</h2>

        <h3>Primary liability</h3>
        <p>
          Protects against damage or injury you cause to others. Most brokers
          require $1M combined single limit. FMCSA minimum is $750K for general
          freight. Carry the $1M — it's the difference between getting loads
          and not getting loads.
        </p>

        <h3>Physical damage</h3>
        <p>
          Protects your truck. If you wreck it, roll it, or someone steals it,
          physical damage pays to repair or replace it. Written at either
          stated value or actual cash value. For financed trucks, your lender
          will require physical damage.
        </p>

        <h3>Motor truck cargo</h3>
        <p>
          Pays if the freight you're hauling gets damaged, lost, or stolen.
          $100,000 limit is standard. Reefer loads often need a reefer
          breakdown endorsement. High-value freight may need higher limits.
        </p>

        <h3>Trailer interchange / non-owned trailer</h3>
        <p>
          Covers damage to a trailer you don't own but are hauling under
          interchange agreement. Limits from $20,000 to $75,000. Required by
          most larger brokers if you drop-and-hook.
        </p>

        <h3>Non-trucking liability (bobtail)</h3>
        <p>
          Covers you when you're driving the truck without dispatch — running
          personal errands, heading home. Low-cost coverage, usually under
          $50/month.
        </p>

        <h3>Occupational accident or workers' comp</h3>
        <p>
          If you're leased onto a motor carrier as an owner-op, you'll
          typically need an occupational accident policy. If you run your own
          authority and employ drivers, you'll likely need workers' comp.
          Rules vary by state.
        </p>

        <LazyVideo
          id="Nm2ZR1RskxA"
          label="What truckers need to know about their policy"
        />

        <h2>Cost ranges for owner operators</h2>
        <p>
          Realistic ranges for a single-truck owner-op with a clean record:
        </p>
        <ul>
          <li><strong>New authority (first 12 months):</strong> $8,000 – $18,000/year</li>
          <li><strong>Seasoned authority (2+ years, no claims):</strong> $5,000 – $12,000/year</li>
          <li><strong>Hot shot operation (Class 3-5 truck, gooseneck):</strong> $6,000 – $14,000/year</li>
          <li><strong>Box truck / courier (26 ft non-CDL):</strong> $4,500 – $9,000/year</li>
          <li><strong>Hazmat / specialty:</strong> significantly higher, quote-dependent</li>
        </ul>
        <p>
          These are real numbers.{" "}
          <Link href="/how-much-does-trucking-insurance-cost">
            See how we break down cost.
          </Link>
        </p>

        <h2>What affects your rate</h2>
        <p>
          Five factors drive your owner-op premium more than anything else:
        </p>
        <ol>
          <li><strong>Commodity:</strong> What you haul. Dry van is cheapest. Auto transport, hazmat, and household goods cost more.</li>
          <li><strong>Radius:</strong> How far you run. Local is cheaper than regional is cheaper than all 48.</li>
          <li><strong>Truck value:</strong> Higher-value truck = higher physical damage premium.</li>
          <li><strong>Driver profile:</strong> Years of CDL experience, MVR (tickets, accidents), and age.</li>
          <li><strong>Loss history:</strong> Prior claims and losses on your DOT number (if you have one).</li>
        </ol>
        <p>
          Things that don't affect your rate as much as people think: your
          personal credit (some carriers use it, most don't on commercial),
          your state of domicile (it matters, but less than commodity and
          radius), and your truck's age alone (what matters is value, not
          age).
        </p>

        <h2>How to save money over time</h2>
        <p>
          Your first year is your most expensive. Here's how you bring the
          number down year two and beyond:
        </p>
        <ul>
          <li><strong>Keep a clean MVR.</strong> Every ticket, every preventable accident costs you at renewal.</li>
          <li><strong>Get your authority seasoned.</strong> 12-18 months as an active authority with no claims unlocks better carriers.</li>
          <li><strong>Maintain proper log compliance.</strong> HOS violations and out-of-service events hurt you.</li>
          <li><strong>Re-shop at renewal every year.</strong> We do this automatically. Loyalty to one carrier rarely pays.</li>
          <li><strong>Ask about higher deductibles.</strong> Taking $2,500 or $5,000 on physical damage can save real money if you can self-insure smaller losses.</li>
          <li><strong>Bundle coverages with one carrier</strong> when it makes sense. Sometimes it saves, sometimes splitting is better. We'll tell you which.</li>
        </ul>

        <h2>Commodity-specific notes</h2>
        <h3>Dry van</h3>
        <p>
          Cheapest commodity to insure. Most carriers will write it. Your rate
          is mostly driven by radius and driver.
        </p>

        <h3>Flatbed / step deck</h3>
        <p>
          Slightly higher cargo rate because of load securement exposure. Make
          sure your cargo policy covers tie-down/securement claims — some
          don't.
        </p>

        <h3>Reefer</h3>
        <p>
          Add reefer breakdown coverage. Without it, a compressor failure that
          spoils a load is not covered by standard motor truck cargo.
        </p>

        <h3>Hot shot</h3>
        <p>
          Class 3-5 truck with a gooseneck. We write this every week. Rates
          are lower than a Class 8 tractor but the cargo exposure depends on
          what you haul (auto, equipment, expedited freight).
        </p>

        <h3>Box truck</h3>
        <p>
          26 ft and under often doesn't require a CDL. Insurance is usually
          cheaper than a Class 8 operation. Good option for a first-year
          owner-op who wants to build history before upgrading.
        </p>

        <h3>Auto transport</h3>
        <p>
          Higher cargo limits required (typically $250K+), and not every
          carrier writes it. The right market matters a lot here.
        </p>

        <h3>Hazmat</h3>
        <p>
          $1M to $5M liability required depending on class. Hazmat endorsement
          and proper placarding are required for compliance. Quote-dependent.
        </p>
      </article>

      <CTASection
        heading="Shop 23 carriers in one call."
        sub="Tell us about your operation. We'll bring back real options in the same day."
      />

      <RelatedLinks
        items={[
          {
            href: "/new-authority",
            title: "New authority coverage",
            desc: "Just got your MC number? Start here.",
          },
          {
            href: "/best-trucking-insurance-for-owner-operators",
            title: "Best trucking insurance for owner-ops",
            desc: "How to actually define 'best' for your operation.",
          },
          {
            href: "/trucking-insurance-companies-compared",
            title: "Independent agent vs direct carrier",
            desc: "Why a specialist with 23+ markets beats going direct.",
          },
        ]}
      />
    </>
  );
}
