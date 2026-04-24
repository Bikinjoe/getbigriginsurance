import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import { site } from "@/lib/site";

export const metadata = {
  title: "About | We Specialize in Trucking Insurance",
  description:
    "Vantage Point Risk Partners is an independent insurance agency that specializes in trucking. Serving AZ, CA, CO, ID, MT, NM, NV, OR, TX, UT, WA & WY. 23+ carriers, real people, real phone number.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We Specialize in Trucking Insurance. That's It."
        sub="No home, no auto, no life, no commercial dabbling. We write trucking — for new authorities, owner operators, and small fleets. That's the whole business."
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="container-narrow pt-8">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Who You're Working With
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
          <div className="rounded-lg border border-border bg-surface-2 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team/richard-sweet.jpg"
              alt="Richard Sweet, Trucking Insurance Specialist"
              width={400}
              height={500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-md bg-surface object-cover"
            />
            <p className="mt-3 text-center text-xs uppercase tracking-wider text-muted">
              Photo placeholder
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Owner · Vantage Point Risk Partners
            </p>
            <h3 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
              Richard Sweet
            </h3>
            <p className="mt-1 text-sm text-muted">
              Eugene, Oregon · Licensed in OR, WA, CA and across the western US
            </p>

            <div className="mt-5 space-y-3 text-base text-muted sm:text-lg">
              <p>
                Independent insurance agent specializing in trucking and
                commercial lines. Works directly with 23+ carriers that write
                commercial transportation — dry van, flatbed, reefer, hot
                shot, auto transport, hazmat, and box truck operations.
              </p>
              <p>
                Focused on getting new authority truckers covered fast at fair
                rates. Most quotes turn around the same business day. No
                broker fees, no menus, no hand-offs to a back office — you
                work with the same person from first call through renewal.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="btn-primary"
                aria-label={site.phoneCTA}
              >
                {site.phoneCTA}
              </a>
              <a href={site.emailHref} className="btn-secondary">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow pt-12">
        <div className="rounded-lg border border-border bg-surface-2 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What Happens When Something Goes Wrong
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Things go sideways in trucking. Here's how we handle the three
            things that matter most.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                Claims
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                We help you file and we push
              </h3>
              <p className="mt-2 text-sm text-muted">
                Call us first. We walk you through what the carrier needs,
                report the claim, and then follow up with the adjuster. If a
                claim stalls, we escalate. We're not going to make a claim go
                away that shouldn't — we're going to make sure the carrier
                pays what the policy says they owe.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                Billing disputes
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                We go to bat for you
              </h3>
              <p className="mt-2 text-sm text-muted">
                Premium changed mid-term? Finance company math is wrong?
                Auto-pay failed and the carrier is threatening cancellation?
                Forward it to us. We figure out what actually happened, talk
                to the billing rep, and fix it — usually the same day.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-flame">
                Policy questions
              </p>
              <h3 className="mt-2 text-lg font-bold text-foreground">
                Call or text. We answer.
              </h3>
              <p className="mt-2 text-sm text-muted">
                Broker wants a weird endorsement you've never heard of?
                Shipper needs a higher cargo limit for one load? Not sure if a
                load is covered under your current policy? Call or text. We
                answer the phone and we give you a straight answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="container-narrow prose-trucking pb-4 pt-8">
        <h2>Who we are</h2>
        <p>
          Vantage Point Risk Partners LLC is an independent insurance agency.{" "}
          <strong>{site.serviceArea}.</strong> We specialize in commercial
          trucking insurance — primary liability, motor truck cargo, physical
          damage, trailer interchange, occupational accident, and the rest of
          the policies that keep an owner-op on the road.
        </p>
        <p>
          We work with 23+ insurance carriers that write trucking. When you
          ask us for a quote, we shop your account across the markets that
          fit your profile. You see the best options, you pick one, we bind
          it the same day.
        </p>

        <h2>Why trucking</h2>
        <p>
          Trucking is its own world. The freight, the brokers, the FMCSA
          filings, the BMC-91, the COIs, the CSA scores, the lease-on
          decision, the seasoning of an authority — generalist agents don't
          know any of it. We do, because it's all we do.
        </p>
        <p>
          New authorities and single-truck owner operators are who we focus
          on. They're the hardest accounts to place — most agencies don't
          want them because the premium is small and the underwriting is hard.
          We built the agency around exactly those accounts.
        </p>

        <h2>How we work</h2>
        <ul>
          <li><strong>Independent.</strong> We're not captive to any single carrier. We pick the right carrier for you.</li>
          <li><strong>23+ carriers.</strong> Real markets, not 3 or 4 with relationships.</li>
          <li><strong>Same-day quotes.</strong> Most quotes turn around in under 24 hours.</li>
          <li><strong>Same-day binding.</strong> If we have your info, we can bind today.</li>
          <li><strong>We answer the phone.</strong> Real humans, not menus or AI.</li>
          <li><strong>We re-shop at renewal.</strong> Every year. Automatically.</li>
          <li><strong>We tell you the truth.</strong> If leasing on is a better path than running your own authority right now, we'll say so.</li>
        </ul>

        <h2>What we don't do</h2>
        <p>
          We don't write home insurance, auto insurance (passenger), life
          insurance, or general business insurance. We don't refer trucking
          questions to a back office. We don't outsource quoting to a third
          party. We don't take a broker fee on top of the premium.
        </p>

        <h2>Where we are</h2>
        <p>
          <strong>{site.serviceArea}.</strong> Phone:{" "}
          <a href={site.phoneHref}>Call or text {site.phone}</a>. Email:{" "}
          <a href={site.emailHref}>{site.email}</a>.
        </p>
        <p>
          We write trucking insurance across the western and mountain states
          and Texas. Most of our truckers run regional and OTR — we set up
          carriers in every state we cover.
        </p>

        <h2>Sister sites</h2>
        <p>
          We also operate <a href="https://truckpolicy.com">truckpolicy.com</a>{" "}
          (our quote intake and policy management hub) and{" "}
          <a href="https://vantagepointrisk.com">vantagepointrisk.com</a>{" "}
          (our parent agency site). If you've found us through any of those,
          you're in the same shop.
        </p>

        <h2>What you should expect</h2>
        <p>
          You call. A real person answers. We get your info, talk through
          your operation, and shop your account. We come back with options
          the same day or the next day. We explain everything in plain
          English. We bind. We send your COI. We file with FMCSA. We're there
          when you need a certificate, a change, or a claim.
        </p>
        <p>
          Then we leave you alone to run your business. Until renewal — when
          we re-shop again. That's the agency.
        </p>
      </article>

      <CTASection
        heading="Try the difference."
        sub="Get a quote from a specialist. Same day."
      />

      <RelatedLinks
        items={[
          {
            href: "/contact",
            title: "Contact",
            desc: "Phone, email, hours.",
          },
          {
            href: "/trucking-insurance-reviews",
            title: "Reviews",
            desc: "What truckers say.",
          },
          {
            href: "/get-a-quote",
            title: "Get a quote",
            desc: "Start your quote in 5 minutes.",
          },
        ]}
      />
    </>
  );
}
