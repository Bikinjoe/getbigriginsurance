import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import LazyVideo from "@/components/LazyVideo";

export const metadata = {
  title: "What Insurance Do You Need for a New Trucking Authority?",
  description:
    "FMCSA requires $750K liability. Most brokers require $1M plus cargo. Here's the full list of what's required and what's smart for a new authority.",
};

export default function WhatInsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="What's required vs. what's smart"
        title="What Insurance Do You Need for a New Trucking Authority?"
        sub="At a minimum, you need primary liability, cargo, and physical damage. Here's what each one does, what FMCSA requires, what brokers require, and what we recommend."
      />
      <Breadcrumbs items={[{ label: "Coverage Required" }]} />

      <article className="container-narrow prose-trucking pb-4 pt-8">
        <p>
          FMCSA requires primary liability insurance (minimum $750,000 for
          general freight). Most brokers require $1,000,000 before they'll
          give you loads. Beyond that, you need cargo coverage and physical
          damage on your truck. Those three pieces, liability, cargo,
          physical damage, are the foundation of a new authority insurance
          program.
        </p>
        <p>
          Here's the full breakdown, coverage by coverage.
        </p>

        <h2>Primary liability insurance</h2>
        <p>
          Primary liability covers bodily injury and property damage you cause
          to others while operating your truck. It's the single most important
          policy you buy. It's also required by federal law before you can
          activate your authority.
        </p>
        <ul>
          <li><strong>FMCSA minimum:</strong> $750,000 for general freight</li>
          <li><strong>Broker minimum:</strong> $1,000,000 (universal)</li>
          <li><strong>Hazmat:</strong> $1,000,000 to $5,000,000 depending on class</li>
          <li><strong>Filed with FMCSA as:</strong> BMC-91 or BMC-91X</li>
        </ul>
        <p>
          Do not save money by carrying the $750K minimum. The jump from $750K
          to $1M is usually under $50/month and opens up every broker in the
          country.
        </p>

        <h2>Motor truck cargo insurance</h2>
        <p>
          Cargo coverage pays if freight you're hauling is damaged, lost, or
          stolen. It's not technically required by FMCSA for general freight,
          but every broker requires it. $100,000 limit is standard.
        </p>
        <ul>
          <li><strong>Standard limit:</strong> $100,000</li>
          <li><strong>Auto transport:</strong> $250,000+ often required</li>
          <li><strong>High-value freight:</strong> may need $250,000 or more</li>
          <li><strong>Typical deductible:</strong> $1,000 to $2,500</li>
          <li><strong>Reefer loads:</strong> add reefer breakdown endorsement</li>
        </ul>
        <p>
          Read the exclusions before you haul anything unusual. Standard cargo
          policies often exclude high-value freight, live animals, hazmat,
          household goods, and refrigerated items without specific
          endorsements.
        </p>

        <h2>Physical damage insurance</h2>
        <p>
          Protects your truck itself. If you wreck it, it's stolen, it catches
          fire, or a tree falls on it, physical damage pays to repair or
          replace. Required by any lender financing your truck.
        </p>
        <ul>
          <li><strong>Written at:</strong> stated value or actual cash value</li>
          <li><strong>Typical deductible:</strong> $1,000 to $2,500</li>
          <li><strong>Includes:</strong> collision + comprehensive (theft, fire, vandalism, weather)</li>
          <li><strong>Optional add-ons:</strong> downtime coverage, towing, rental</li>
        </ul>

        <LazyVideo
          id="Nm2ZR1RskxA"
          label="What truckers need to know about their policy"
        />

        <h2>Trailer interchange / non-owned trailer</h2>
        <p>
          If you drop-and-hook someone else's trailer, you need coverage for
          damage to that trailer. Either through trailer interchange (when
          you operate under an interchange agreement) or non-owned trailer
          coverage (when you're just pulling a borrowed trailer).
        </p>
        <ul>
          <li><strong>Typical limit:</strong> $25,000 to $75,000</li>
          <li><strong>Required by:</strong> most larger brokers (Amazon, CHRW, XPO)</li>
        </ul>

        <h2>Non-trucking liability (bobtail)</h2>
        <p>
          Covers you when you're operating the truck without dispatch ,
          driving it home, running a personal errand. Inexpensive coverage,
          required if you're leased onto a motor carrier.
        </p>

        <h2>Occupational accident or workers' comp</h2>
        <p>
          If you're an owner-op leased onto a carrier, you generally need
          occupational accident coverage. If you run your own authority and
          employ drivers, you generally need workers' comp. Rules vary by
          state, some states let you exempt yourself as an owner, others
          don't.
        </p>

        <h2>General liability</h2>
        <p>
          Covers premises liability (someone slips on your property) and
          completed operations. Usually bundled with your trucking package at
          low cost. Some shippers require it.
        </p>

        <h2>What's required vs. what's smart</h2>
        <p>
          Required to legally operate and find loads:
        </p>
        <ol>
          <li>Primary liability, $1M</li>
          <li>Cargo, $100K</li>
          <li>Physical damage, your truck's value (if financed, your lender requires it)</li>
        </ol>
        <p>
          Strongly recommended for a complete program:
        </p>
        <ol>
          <li>Trailer interchange / non-owned trailer</li>
          <li>Non-trucking liability (if leased on)</li>
          <li>Occupational accident or workers' comp</li>
          <li>General liability</li>
        </ol>
        <p>
          Specialty coverages depending on what you haul:
        </p>
        <ol>
          <li>Reefer breakdown</li>
          <li>Higher cargo limits for auto transport, high-value freight</li>
          <li>Hazmat endorsements</li>
          <li>Pollution liability (for tankers, waste haulers)</li>
        </ol>

        <h2>Related questions</h2>
        <h3>Is $750K liability enough?</h3>
        <p>
          Technically yes, legally. Practically no. Most brokers won't
          dispatch you below $1M, so you're limiting your freight pool for
          the sake of saving a few dollars a month.{" "}
          <Link href="/faq">More on this in the FAQ.</Link>
        </p>

        <h3>Do I really need cargo coverage?</h3>
        <p>
          If you want to haul loads, yes. Every broker and most shippers
          require it. It's also what pays when freight damage happens, and
          it happens more than you'd think.
        </p>

        <h3>Can I skip physical damage on a paid-off truck?</h3>
        <p>
          You can. Some owner-ops do when the truck is fully paid off and
          they can afford to self-insure a total loss. For most owner-ops
          running one truck that's their livelihood, that's a bad bet.
        </p>
      </article>

      <CTASection
        heading="Build the right program."
        sub="We'll walk you through each coverage and build it around your actual operation."
      />

      <RelatedLinks
        items={[
          {
            href: "/how-much-does-trucking-insurance-cost",
            title: "How much does it cost?",
            desc: "Real ranges for new authorities and owner-ops.",
          },
          {
            href: "/new-authority",
            title: "New authority guide",
            desc: "Timeline, requirements, and how to get covered fast.",
          },
          {
            href: "/owner-operator",
            title: "Owner operator coverage",
            desc: "Coverage structured for a single-truck operation.",
          },
        ]}
      />
    </>
  );
}
