import Link from "next/link";

type Item = { href: string; title: string; desc?: string };

export default function RelatedLinks({
  heading = "Keep reading",
  items,
}: {
  heading?: string;
  items: Item[];
}) {
  return (
    <section className="container-narrow py-12">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{heading}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="group rounded-lg border border-border bg-surface-2 p-5 transition hover:border-flame hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-foreground group-hover:text-flame">
              {it.title}
            </h3>
            {it.desc && <p className="mt-2 text-sm text-muted">{it.desc}</p>}
            <span className="mt-3 inline-block text-sm font-semibold text-flame">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
