import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import { site } from "@/lib/site";

export const metadata = {
  title: "Get Your Trucking Insurance Quote — Takes 5 Minutes",
  description:
    "Start your trucking insurance quote. We shop 23+ carriers and call you with real options the same day. Or call 541-681-8793.",
};

const checklist = [
  "DOT number and MC number (if issued)",
  "Truck year, make, model, VIN, and value",
  "Driver's license, DOB, and CDL years",
  "What commodities you plan to haul",
  "Operating radius (local, regional, all 48)",
  "Any tickets or accidents in last 3 years",
  "Business name and mailing address",
  "Prior insurance carrier (if any)",
];

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to get a trucking insurance quote",
          step: [
            { "@type": "HowToStep", name: "Gather your info", text: "DOT, MC, VIN, driver info, and operation details." },
            { "@type": "HowToStep", name: "Submit", text: "Use the online form or call 541-681-8793." },
            { "@type": "HowToStep", name: "We shop carriers", text: "We submit to relevant carriers from our 23+ panel." },
            { "@type": "HowToStep", name: "Review and bind", text: "Review options by phone, pick one, and we bind same day." },
          ],
        }}
      />
      <PageHero
        eyebrow="5 minutes, real numbers"
        title="Get Your Trucking Insurance Quote — Takes 5 Minutes."
        sub="Start your quote online or call 541-681-8793. Most new authorities get real numbers back the same day."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Get a Quote" }]} />

      <section className="container-narrow py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Two ways to start
            </h2>
            <p className="mt-3 text-base text-steel sm:text-lg">
              Pick whichever is faster for you. Both go to the same person.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-flame">
                  Option 1 — Fastest
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">Call us</h3>
                <p className="mt-2 text-base text-steel">
                  Talk to a real person. We can usually start a quote on the
                  first call. Have your DOT number and truck info ready.
                </p>
                <a href={site.phoneHref} className="btn-primary mt-4">
                  Call {site.phone}
                </a>
              </div>

              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-flame">
                  Option 2 — Online
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">Start online</h3>
                <p className="mt-2 text-base text-steel">
                  Submit your info through our quote intake on truckpolicy.com.
                  We get the request immediately and call you back same day.
                </p>
                <a href={site.quoteUrl} className="btn-primary mt-4" target="_blank" rel="noopener noreferrer">
                  Start My Quote →
                </a>
              </div>

              <div className="rounded-lg border border-ink/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-flame">
                  Email
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">Send the basics</h3>
                <p className="mt-2 text-base text-steel">
                  Email <a href={site.emailHref} className="font-semibold text-flame hover:underline">{site.email}</a> with your DOT, truck info, and what you haul. We'll come back with questions and quotes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              What to have ready
            </h2>
            <p className="mt-3 text-base text-steel sm:text-lg">
              You don't need all of this to start, but the more you have, the
              faster we can quote.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-ink/10 bg-white p-4"
                >
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-flame text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="text-base text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-ink/10 bg-mist p-5">
              <h3 className="text-lg font-bold text-ink">What happens next</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-base text-steel">
                <li>We confirm your info — usually a 10-minute call.</li>
                <li>We shop your account across our 23+ carrier panel.</li>
                <li>We send you the best options with coverage and price side by side.</li>
                <li>You pick. We bind. COI emailed immediately.</li>
                <li>FMCSA filing happens automatically — authority active in 24-48 hours.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-narrow py-12 text-center">
          <h2 className="text-3xl font-bold">Need same-day coverage?</h2>
          <p className="mx-auto mt-3 max-w-xl text-mist">
            Call before noon Pacific and we'll usually have you bound by end
            of business. {site.phone}.
          </p>
          <a href={site.phoneHref} className="btn-primary mt-6 inline-flex">
            Call {site.phone}
          </a>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            href: "/new-authority",
            title: "New authority guide",
            desc: "What to know before your quote.",
          },
          {
            href: "/how-much-does-trucking-insurance-cost",
            title: "Cost expectations",
            desc: "What to expect to pay.",
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
