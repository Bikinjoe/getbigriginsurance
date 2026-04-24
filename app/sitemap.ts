import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/new-authority",
    "/owner-operator",
    "/how-much-does-trucking-insurance-cost",
    "/what-insurance-do-i-need-new-trucking-authority",
    "/trucking-insurance-companies-compared",
    "/best-trucking-insurance-for-owner-operators",
    "/trucking-insurance-reviews",
    "/trucking-insurance-problems",
    "/trucking-insurance-calculator",
    "/faq",
    "/about",
    "/get-a-quote",
    "/blog",
    "/contact",
  ];
  const blogRoutes = getAllSlugs().map((slug) => `/blog/${slug}`);
  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
