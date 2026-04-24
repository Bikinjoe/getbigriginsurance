import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          dateModified: post.date,
          description: post.excerpt,
          author: { "@type": "Organization", name: site.legalName },
          publisher: {
            "@type": "Organization",
            name: site.legalName,
            url: site.url,
          },
        }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <article className="container-narrow pt-6 pb-2">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-mist px-2 py-1 text-xs font-semibold uppercase tracking-wider text-ink"
            >
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        {post.date && (
          <p className="mt-3 text-sm text-slate">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        )}
      </article>

      <div className="container-narrow prose-trucking pb-10">
        {renderMarkdown(post.content)}
      </div>

      <section className="container-narrow pb-12">
        <Link href="/blog" className="text-sm font-semibold text-flame hover:underline">
          ← Back to all posts
        </Link>
      </section>

      <CTASection />
    </>
  );
}
