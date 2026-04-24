import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-bg text-foreground">
      <div className="container-narrow py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-white">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-flame text-white">
                <span className="text-lg font-black leading-none">BR</span>
              </span>
              <span>GetBigRigInsurance</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              {site.legalName}. Independent trucking insurance agency
              specializing in new authority and owner operator coverage.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Coverage
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/new-authority" className="hover:text-flame">New Authority</Link></li>
              <li><Link href="/owner-operator" className="hover:text-flame">Owner Operator</Link></li>
              <li><Link href="/what-insurance-do-i-need-new-trucking-authority" className="hover:text-flame">Coverage Required</Link></li>
              <li><Link href="/best-trucking-insurance-for-owner-operators" className="hover:text-flame">Best Coverage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/how-much-does-trucking-insurance-cost" className="hover:text-flame">Cost</Link></li>
              <li><Link href="/trucking-insurance-companies-compared" className="hover:text-flame">Independent vs Direct</Link></li>
              <li><Link href="/trucking-insurance-reviews" className="hover:text-flame">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-flame">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-flame">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Talk to us
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="font-semibold text-white hover:text-flame">
                  {site.phoneCTA}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-flame">
                  {site.email}
                </a>
              </li>
              <li>{site.serviceArea}</li>
              <li><Link href="/contact" className="hover:text-flame">Contact</Link></li>
              <li><Link href="/get-a-quote" className="hover:text-flame">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Licensed independent
            insurance agency. Not affiliated with any single carrier. Quotes are
            estimates and subject to underwriting approval.
          </p>
          <p className="mt-2">
            Sister sites:{" "}
            <a href="https://vantagepointrisk.com" className="hover:text-flame">vantagepointrisk.com</a>{" "}·{" "}
            <a href="https://truckpolicy.com" className="hover:text-flame">truckpolicy.com</a>
          </p>
          <p className="mt-3 text-foreground">
            <a
              href={site.parentSiteUrl}
              className="font-semibold text-flame hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Vantage Point Risk Partners
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
