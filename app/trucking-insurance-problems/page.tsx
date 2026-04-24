import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Problems With Trucking Insurance (And How We Fix Them)",
  description:
    "The top complaints truckers have with insurance agents, agents who don't know trucking, rate spikes, slow COIs, unexpected cancellations, new authority declines, and claim ghosting. Here's how we handle each one.",
};

type Problem = {
  title: string;
  what: string;
  why: string;
  how: string;
};

const problems: Problem[] = [
  {
    title: "Agents who don't understand trucking",
    what:
      "You call for a quote and the agent can't answer basic questions. They don't know what a BMC-91 is, they don't know the difference between primary liability and non-trucking liability, they don't know why your broker wants trailer interchange coverage. You end up educating them instead of getting a quote.",
    why:
      "Most insurance agents are generalists. They write home, auto, small business, and dabble in commercial trucking. Trucking is less than 10% of their book, so they don't build real expertise. They submit your account to two or three carriers they happen to have relationships with and bring back whatever sticks.",
    how:
      "We only write trucking. It's the entire business, not a side department. We work with 23+ carriers that specifically underwrite commercial trucking, dry van, flatbed, reefer, hot shot, auto transport, hazmat, box truck. We know the filings. We know what brokers require. We know which carriers will decline your profile before we waste your time.",
  },
  {
    title: "Rates that spike at renewal with no explanation",
    what:
      "Your policy auto-renewed and your premium jumped 18%. No claims. No tickets. No changes to your operation. The agent can't tell you why. You pay the new rate because you don't have time to reshop.",
    why:
      "Insurance carriers file rate changes with state insurance departments. When market-wide losses push a carrier's book into unprofitable territory, they push rates up across the board at renewal. A generalist agent doesn't re-market you, they just let the policy auto-renew and hope you don't notice. It's easier for them.",
    how:
      "We re-market every account at every renewal. Automatic. Before your renewal date, we pull your profile into our quoting system, submit to carriers that fit your profile, and compare the new numbers against your current policy. If your current carrier is still the best option, we tell you. If there's a better option, we move you. Either way, you get a clear explanation.",
  },
  {
    title: "Certificates of insurance that take days",
    what:
      "A broker needs a COI with their name listed as a certificate holder. You need it in the next 30 minutes or you lose the load. You email your agent. You hear nothing. Three hours later you call and leave a voicemail. By the end of the day the load is gone.",
    why:
      "COIs take less than 10 minutes to generate for anyone actually at the desk. The bottleneck is always the agency's process, COIs queue behind whatever else is in the inbox, and a non-specialist agency doesn't prioritize transportation clients the same way a trucking-focused shop does.",
    how:
      "We answer the phone and we turn COIs around the same hour during business hours. If a broker needs a certificate for a load, we'd rather drop what we're doing and cut the cert than let you lose the freight. That's the expectation we set with every client. If you can't reach us during business hours, something's wrong, and we'd want to know about it.",
  },
  {
    title: "Carriers that cancel policies unexpectedly",
    what:
      "You get a certified letter saying your policy is cancelled effective in 10 days. There was one late payment four months ago. Maybe a claim that was smaller than the deductible. Maybe the underwriter reviewed your CSA score and decided to non-renew you. Whatever it is, now you're scrambling.",
    why:
      "Some carriers are twitchy. They'll cancel or non-renew for things other carriers would overlook, one late payment, a small claim, a safety rating change, or even a commodity audit that comes back slightly different than what was on the application. A generalist agent may not know which carriers are cancellation-happy, so they put new clients into those carriers and let the cycle repeat.",
    how:
      "We know which carriers are stable and which ones are trigger-happy. When we place new business, we weigh carrier stability heavily, a slightly cheaper rate isn't worth it if the carrier is going to non-renew you in 9 months. If a cancellation notice does arrive, we see it before you do (we're on the notification list) and we start re-marketing immediately, so there's no lapse.",
  },
  {
    title: "Being turned down as a new authority",
    what:
      "You got your MC number. You call four agents. Two never call back. One tells you to come back after 12 months. The fourth quotes you $30,000 a year with bad coverage. You start wondering if you can actually afford to run your own authority.",
    why:
      "New authority accounts are hard. Some carriers won't write them at all. Others will but price them punitively. Small-fleet and single-truck accounts have higher per-unit premiums, and the commission is low, so many agencies don't want to bother with them.",
    how:
      "New authorities are our specialty. It's the account type we built the agency around. We know exactly which of our 23+ carriers actively write new MC numbers and at what price tiers. We can usually get a new authority bound the same day with $1M primary liability, cargo, and physical damage in the $8,000 to $18,000 range, not $30,000. We are not going to turn you away because you're new.",
  },
  {
    title: "Poor communication when there's a claim",
    what:
      "You had an accident. You reported the claim to the carrier. Now three weeks have passed and nobody has called. The adjuster doesn't return messages. Your truck is sitting at a body shop waiting for an estimate approval. You're losing revenue every day the truck isn't moving.",
    why:
      "Claims adjusters carry heavy caseloads. The ones who handle trucking claims often manage 150+ files at a time. Your claim isn't a priority unless someone is pushing on it. A captive agent or direct carrier rep has no incentive to push, they work for the carrier. A generalist agent may not have the trucking expertise to push effectively.",
    how:
      "We advocate. When a claim is stuck, we call the adjuster, their supervisor, and the branch manager if needed. We know what a reasonable timeline looks like for every claim type and we push when carriers miss it. We're not going to make a claim go away that shouldn't, but we will absolutely make sure it moves and gets paid per the policy.",
  },
];

export default function ProblemsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: problems.map((p) => ({
            "@type": "Question",
            name: p.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${p.what} ${p.why} ${p.how}`,
            },
          })),
        }}
      />
      <PageHero
        eyebrow="The honest list"
        title="Problems With Trucking Insurance (And How We Fix Them)."
        sub="Here are the six complaints we hear most often from truckers about their previous agents, what's actually going wrong, why it happens, and how we handle each one differently."
      />
      <Breadcrumbs items={[{ label: "Problems We Fix" }]} />

      <article className="container-narrow prose-trucking pb-4 pt-8">
        <p>
          This is the honest version of what's broken about trucking
          insurance. Every complaint below comes from truckers we've talked
          to, not hypothetical scenarios. If you recognize yourself in any
          of these, you already know we're writing about the right problems.
        </p>
        <p>
          We can't promise perfect, nobody can. We can promise we know the
          problems are real, we've built the agency to handle them better
          than the last agent, and we answer the phone when you need us.
        </p>

        {problems.map((p, i) => (
          <section key={i} className="mt-10 rounded-lg border border-border bg-surface-2 p-6">
            <h2 className="!mt-0 text-2xl font-bold text-foreground sm:text-3xl">
              <span className="mr-2 font-mono text-flame">{String(i + 1).padStart(2, "0")}</span>
              {p.title}
            </h2>

            <h3 className="!mt-5 text-base font-bold uppercase tracking-wider text-flame">
              What the problem is
            </h3>
            <p>{p.what}</p>

            <h3 className="!mt-5 text-base font-bold uppercase tracking-wider text-flame">
              Why it happens
            </h3>
            <p>{p.why}</p>

            <h3 className="!mt-5 text-base font-bold uppercase tracking-wider text-flame">
              How we handle it differently
            </h3>
            <p>{p.how}</p>
          </section>
        ))}

        <h2>What you should expect from any agent</h2>
        <p>
          The bar isn't exotic. An insurance agent who specializes in
          trucking should answer the phone, know the coverage, shop your
          account across real markets, turn around certificates fast,
          advocate in claims, and re-market you at renewal. That's the job.
        </p>
        <p>
          If your current agent is hitting all of that, stay with them ,
          they're doing right by you. If they're not, it's probably time to
          look at other options. You don't have to move your policy to get a
          quote and a second opinion from us, we'll tell you the truth
          about where you stand.
        </p>

        <h2>Start the conversation</h2>
        <p>
          Call or text us, or start a quote online. We'll tell you what we'd
          do differently with your account and you can decide from there.{" "}
          <Link href="/get-a-quote">Start a quote</Link> or{" "}
          <Link href="/faq">read our FAQ</Link> if you want more answers
          first.
        </p>
      </article>

      <CTASection
        heading="Tired of the last agent?"
        sub="We'll shop your account across 23+ carriers and tell you the truth about your options."
      />

      <RelatedLinks
        items={[
          {
            href: "/faq",
            title: "Full FAQ",
            desc: "25 answered questions on coverage, cost, and claims.",
          },
          {
            href: "/best-trucking-insurance-for-owner-operators",
            title: "What 'best' actually means",
            desc: "How to evaluate an agent and a policy.",
          },
          {
            href: "/trucking-insurance-companies-compared",
            title: "Independent vs. direct",
            desc: "Why the shop-around model usually wins.",
          },
        ]}
      />
    </>
  );
}
