import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-narrow pt-6 text-sm text-slate">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-flame">Home</Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden>/</span>
            {c.href ? (
              <Link href={c.href} className="hover:text-flame">{c.label}</Link>
            ) : (
              <span className="text-ink">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
