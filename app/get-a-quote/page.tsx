import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/RelatedLinks";
import SembleyTwoStep from "@/components/SembleyTwoStep";
import { site } from "@/lib/site";

export const metadata = {
  title: "Get Your Trucking Insurance Quote — Takes 5 Minutes",
  description:
    "Start your trucking insurance quote. We shop 23+ carriers and call you with real options the same day. Or Call or text 541-681-8793.",
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
            { "@type": "HowToStep", name: "Quick intake", text: "Fill out the 60-second quick form with your basics." },
            { "@type": "HowToStep", name: "Full quote form", text: "Continue to the full intake form with your operation details." },
            { "@type": "HowToStep", name: "We shop carriers", text: "We submit to relevant carriers from our 23+ panel." },
            { "@type": "HowToStep", name: "Review and bind", text: "Review options by phone, pick one, and we bind same day." },
          ],
        }}
      />
      <PageHero
        eyebrow="5 minutes, real numbers"
        title="Get Your Trucking Insurance Quote — Takes 5 Minutes."
        sub="Start your quote online or Call or text 541-681-8793. Most new authorities get real numbers back the same day."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Get a Quote" }]} />

      <section className="container-narrow py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Quick-start quote
            </h2>
            <div className="mt-6">
              <SembleyTwoStep />
            </div>

            <div className="mt-10 rounded-lg border border-ink/10 bg-mist p-5">
              <h3 className="text-lg font-bold text-ink">Prefer to talk?</h3>
              <p className="mt-2 text-base text-steel">
                Skip the form and get straight to a real person.
              </p>
              <a href={site.phoneHref} className="btn-primary mt-4 inline-flex">
                Call or text {site.phone}
              </a>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-ink/10 bg-white p-5">
              <h3 className="text-lg font-bold text-ink">What to have ready</h3>
              <p className="mt-2 text-sm text-steel">
                You don't need all of this to start — but the more you have,
                the faster we can quote.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-flame text-[10px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-ink/10 bg-ink p-5 text-mist">
              <h3 className="text-lg font-bold text-white">What happens next</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Finish the quick-start form (60 seconds).</li>
                <li>Continue to the full quote intake.</li>
                <li>We shop your account across 23+ carriers.</li>
                <li>We send you the best options side by side.</li>
                <li>You pick. We bind. COI emailed immediately.</li>
              </ol>
            </div>

            <div className="rounded-lg border border-flame/30 bg-flameSoft p-5 text-ink">
              <h3 className="text-lg font-bold">Need same-day coverage?</h3>
              <p className="mt-2 text-sm">
                Call before noon Pacific and we'll usually have you bound by
                end of business.
              </p>
              <a href={site.phoneHref} className="btn-primary mt-4 inline-flex">
                Call or text {site.phone}
              </a>
            </div>
          </aside>
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
