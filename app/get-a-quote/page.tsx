import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import SembleyQuickForm from "@/components/SembleyQuickForm";

export const metadata = {
  title: "Get Your Quote — Takes 60 Seconds",
  description:
    "Tell us the basics. We'll get back to you fast. Trucking insurance quotes for new authorities and owner operators.",
};

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to get a trucking insurance quote",
          step: [
            { "@type": "HowToStep", name: "Quick start", text: "Fill out the 60-second basics form." },
            { "@type": "HowToStep", name: "We follow up", text: "We get back to you fast with next steps." },
            { "@type": "HowToStep", name: "Full intake", text: "Complete the longer intake form so we can shop your account." },
            { "@type": "HowToStep", name: "Bind coverage", text: "Pick the best option and we bind it — usually same day." },
          ],
        }}
      />
      <PageHero
        eyebrow="60-second start"
        title="Get Your Quote — Takes 60 Seconds."
        sub="Tell us the basics. We'll get back to you fast."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Get a Quote" }]} />

      <section className="container-narrow py-10">
        <div className="mx-auto max-w-3xl">
          <SembleyQuickForm />
        </div>
      </section>
    </>
  );
}
