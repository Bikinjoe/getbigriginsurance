import Link from "next/link";
import SembleyForm from "@/components/SembleyForm";

export const metadata = {
  title: "Thank You, We Got Your Info",
  description:
    "Thanks for submitting your trucking insurance quote request. Save time by completing the full intake below, we can get started right away.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-bg to-surface text-white">
        <div className="container-narrow py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-flame">
            Got it
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            We got your info.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-foreground sm:text-lg">
            We'll be in touch shortly. If you want to save some time, complete
            the full intake form below and we can get started right away.
          </p>
        </div>
      </section>

      <section className="container-narrow py-10">
        <div className="mx-auto max-w-3xl">
          <SembleyForm formId="17537" token="KjbWhZYCdLA" showLogo={false} />
        </div>
      </section>

      <section className="container-narrow pb-12">
        <Link
          href="/"
          className="text-sm font-semibold text-muted hover:text-flame"
        >
          ← Back to GetBigRigInsurance.com
        </Link>
      </section>
    </>
  );
}
