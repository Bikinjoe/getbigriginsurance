import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";

export const metadata = {
  title: "Trucking Insurance FAQ, Every Question Answered",
  description:
    "Answers to 25 common trucking insurance questions for new authorities and owner operators. Coverage, cost, FMCSA requirements, claims, and more.",
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer.replace(/\s+/g, " ").trim(),
            },
          })),
        }}
      />

      <PageHero
        eyebrow="25 questions, real answers"
        title="Trucking Insurance FAQ, Every Question Answered."
        sub="If you've Googled trucking insurance lately, you've already seen the surface-level answers. This page gives you the full ones."
      />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <section className="container-narrow py-10">
        <div className="rounded-lg border border-border bg-surface p-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Jump to a question
          </p>
          <ol className="mt-3 grid list-decimal gap-2 pl-5 text-sm text-muted sm:grid-cols-2">
            {faqs.map((f) => (
              <li key={f.slug}>
                <Link href={`#${f.slug}`} className="hover:text-flame">
                  {f.question}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-narrow space-y-10 pb-12">
        {faqs.map((f) => (
          <article
            key={f.slug}
            id={f.slug}
            className="scroll-mt-24 border-b border-border pb-8 last:border-none"
          >
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              {f.question}
            </h2>
            <div className="prose-trucking mt-3">
              {f.answer.split(/\n\n+/).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/get-a-quote" className="font-semibold text-flame hover:underline">
                Get a quote →
              </Link>
              <Link
                href="/how-much-does-trucking-insurance-cost"
                className="text-muted hover:text-flame"
              >
                See cost breakdown
              </Link>
              <Link
                href="/what-insurance-do-i-need-new-trucking-authority"
                className="text-muted hover:text-flame"
              >
                Coverage guide
              </Link>
            </div>
          </article>
        ))}
      </section>

      <CTASection
        heading="Still have questions?"
        sub="Call us or start a quote. We answer the phone, no menus, no AI."
      />
    </>
  );
}
