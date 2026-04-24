import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-narrow py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-flame">
        404
      </p>
      <h1 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-prose text-base text-steel sm:text-lg">
        That page doesn't exist (or it moved). Try one of these instead.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/get-a-quote" className="btn-secondary">
          Get a quote
        </Link>
      </div>
    </section>
  );
}
