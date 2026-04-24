import { site } from "@/lib/site";

const items = [
  "23+ Carrier Markets",
  "Same-Day Coverage",
  "New Authority Welcome",
  "Independent Agency",
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-mist">
      <div className="container-narrow flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 text-center text-sm font-semibold text-ink">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span className="text-flame">✓</span> {item}
          </span>
        ))}
        <a href={site.phoneHref} className="text-flame hover:underline">
          {site.phone}
        </a>
      </div>
    </div>
  );
}
