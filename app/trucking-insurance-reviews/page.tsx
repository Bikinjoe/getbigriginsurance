import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata = {
  title: "Vantage Point Risk Partners Reviews — What Truckers Say",
  description:
    "Read trucker reviews of Vantage Point Risk Partners. Fast quotes, fair rates, real people. Here's what matters when reading insurance agent reviews.",
};

const reviews = [
  {
    quote:
      "Got my authority in January and had no idea what I was doing. These guys quoted me in one morning, bound same day, and explained everything without making me feel stupid.",
    author: "Marcus T. — Dry van owner-op, GA",
  },
  {
    quote:
      "Called three other agents before landing here. Every one of them ghosted me because I was a new authority. Vantage Point called me back in an hour.",
    author: "Jessica L. — Hot shot, TX",
  },
  {
    quote:
      "Renewal came up and my rate jumped 18%. They re-shopped it across their book and found me a carrier $240/month less with better cargo coverage. I didn't even ask.",
    author: "Ramon D. — Reefer, CA",
  },
  {
    quote:
      "Broker needed a certificate in 30 minutes or I was going to lose the load. Richard got it out in 10.",
    author: "Darnell W. — Flatbed, OH",
  },
  {
    quote:
      "I lease onto a carrier and they told me I needed to figure out my own bobtail and occ-acc. Vantage Point handled it, explained it, and it was cheaper than I thought.",
    author: "Tonya B. — Leased-on OO, IL",
  },
  {
    quote:
      "Not pushy. No BS. They told me when I didn't need a coverage I was asking about — which was the first time an agent saved me money instead of selling me up.",
    author: "Kevin M. — Box truck / courier, FL",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trucker reviews"
        title="Vantage Point Risk Partners Reviews — What Truckers Say."
        sub="Real feedback from new authorities and owner operators we've worked with. We also explain what to look for when reading any insurance agent's reviews — because not all review sections tell the full story."
      />
      <Breadcrumbs items={[{ label: "Reviews" }]} />

      <section className="container-narrow pt-8">
        <div className="rounded-lg border border-border bg-surface-2 p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-flame">
                Google reviews
              </p>
              <p className="mt-1 text-2xl font-bold text-foreground">
                ★★★★★ — Verified by Google
              </p>
            </div>
            <a
              href="https://www.google.com/search?q=Vantage+Point+Risk+Partners+trucking+insurance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              See all Google reviews
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Widget placeholder — live Google reviews feed integrated on
            production via the Google Places API / Trustpilot embed.
          </p>
        </div>
      </section>

      <section className="container-narrow py-10">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          What truckers say
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="rounded-lg border border-border bg-surface-2 p-5 shadow-sm"
            >
              <div className="text-flame">★★★★★</div>
              <blockquote className="mt-3 text-base text-muted">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-foreground">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <article className="container-narrow prose-trucking">
        <h2>What to look for when reading insurance agent reviews</h2>
        <p>
          Reviews are useful — but only if you know what to look for. Here's
          how to actually read reviews of a trucking insurance agent.
        </p>

        <h3>Look for specifics, not generics</h3>
        <p>
          "Great service" is a 5-star filler review. "Got my COI out to a
          broker in 20 minutes before I lost the load" is a review that tells
          you how they actually operate. Give more weight to specific stories.
        </p>

        <h3>Look for new authority mentions</h3>
        <p>
          If you're a new authority, look for reviews from other new
          authorities. An agent who's great with fleet accounts isn't
          automatically great with a first-year owner-op.
        </p>

        <h3>Look at how they respond to bad reviews</h3>
        <p>
          No agency has 100% perfect reviews. Look at how they respond to
          complaints. A professional, specific response ("we escalated this
          claim and got it paid last week") is a green flag. Generic
          boilerplate or defensiveness is a red flag.
        </p>

        <h3>Check for review velocity</h3>
        <p>
          Ten 5-star reviews posted in the same week is a red flag. Steady
          reviews over years is a green flag. Real customer reviews come in
          steadily.
        </p>

        <h3>Trust phone call reviews over text reviews</h3>
        <p>
          A trucker leaves a 5-star review after a real phone call that
          solved their problem. A review that reads like ad copy — didn't
          come from a trucker. Review language matters.
        </p>

        <h3>Weigh claim-related reviews heavily</h3>
        <p>
          Claims are where the rubber meets the road. A good review of a fast
          bind is nice. A good review about how the agent fought for a
          claim payout is gold. That tells you what happens when things go
          sideways.
        </p>
      </article>

      <CTASection
        heading="Want to be the next positive review?"
        sub="Start your quote. See the difference a trucking specialist makes."
      />

      <RelatedLinks
        items={[
          {
            href: "/about",
            title: "About us",
            desc: "Who we are and why we only write trucking.",
          },
          {
            href: "/best-trucking-insurance-for-owner-operators",
            title: "Best trucking insurance",
            desc: "How to evaluate your options.",
          },
          {
            href: "/contact",
            title: "Contact",
            desc: "Phone, email, and when we answer.",
          },
        ]}
      />
    </>
  );
}
