import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact — Talk to a Trucking Insurance Specialist",
  description:
    "Call 541-681-8793 or email richard@vantagepointrisk.com. Real people answering trucking insurance questions for owner operators and new authorities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to a real person"
        title="Talk to a Trucking Insurance Specialist."
        sub="Call, email, or send a message. We answer phones during business hours and reply to emails same-day."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="container-narrow py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={site.phoneHref}
            className="group rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:border-flame hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Phone
            </p>
            <p className="mt-2 text-3xl font-bold text-ink group-hover:text-flame">
              {site.phone}
            </p>
            <p className="mt-2 text-sm text-steel">
              Click to call. Mon–Fri, 8am–6pm Pacific. After hours messages
              returned next business day.
            </p>
          </a>
          <a
            href={site.emailHref}
            className="group rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:border-flame hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-flame">
              Email
            </p>
            <p className="mt-2 break-all text-2xl font-bold text-ink group-hover:text-flame">
              {site.email}
            </p>
            <p className="mt-2 text-sm text-steel">
              Best for non-urgent quote requests, document submissions, and
              renewal questions.
            </p>
          </a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Send a message
            </h2>
            <p className="mt-3 text-base text-steel">
              Quick contact form. Goes straight to our inbox.
            </p>

            <form
              action={site.emailHref}
              method="post"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-semibold text-ink" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-ink/20 px-3 py-2 text-base focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-md border border-ink/20 px-3 py-2 text-base focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-ink/20 px-3 py-2 text-base focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink" htmlFor="dot">
                  DOT or MC number (optional)
                </label>
                <input
                  id="dot"
                  name="dot"
                  type="text"
                  className="mt-1 w-full rounded-md border border-ink/20 px-3 py-2 text-base focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-md border border-ink/20 px-3 py-2 text-base focus:border-flame focus:outline-none focus:ring-1 focus:ring-flame"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>
              <p className="text-xs text-steel">
                This form opens your email client with the message pre-filled.
                For faster response, just call {site.phone}.
              </p>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              About us
            </h2>
            <div className="mt-3 space-y-3 text-base text-steel">
              <p>
                <strong className="text-ink">{site.legalName}</strong>
                <br />
                Independent trucking insurance agency
                <br />
                {site.city}, {site.state}
              </p>
              <p>
                We specialize in commercial trucking insurance for new
                authorities and owner operators. We work with 23+ carriers and
                quote across the country.
              </p>
              <p>
                Sister sites:{" "}
                <a href="https://truckpolicy.com" className="font-semibold text-flame hover:underline">
                  truckpolicy.com
                </a>{" "}
                ·{" "}
                <a href="https://vantagepointrisk.com" className="font-semibold text-flame hover:underline">
                  vantagepointrisk.com
                </a>
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-ink/10 bg-mist p-5">
              <h3 className="text-lg font-bold text-ink">Office hours</h3>
              <ul className="mt-2 space-y-1 text-base text-steel">
                <li>Monday – Friday: 8am – 6pm Pacific</li>
                <li>Saturday: by appointment</li>
                <li>Sunday: closed</li>
                <li>Emergencies: leave a voicemail and we'll call back</li>
              </ul>
            </div>

            <div className="mt-6 rounded-lg border border-ink/10 bg-ink p-5 text-mist">
              <h3 className="text-lg font-bold text-white">Need a quote?</h3>
              <p className="mt-2 text-sm">
                Skip the form. Get straight to a quote.
              </p>
              <Link href="/get-a-quote" className="btn-primary mt-4 inline-flex">
                Start my quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          { href: "/about", title: "About us", desc: "Who we are." },
          { href: "/faq", title: "FAQ", desc: "Common questions answered." },
          { href: "/get-a-quote", title: "Get a quote", desc: "Start in 5 minutes." },
        ]}
      />
    </>
  );
}
