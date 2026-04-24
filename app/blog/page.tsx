import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Trucking Insurance Resources, Guides, Tips, and Industry Updates",
  description:
    "Trucking insurance blog for new authorities and owner operators. Coverage explainers, FMCSA updates, owner-op business tips. New posts Mon/Wed/Fri.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Trucking Insurance Resources, Guides, Tips, and Industry Updates."
        sub="Plain-English content for new authorities and owner operators. New posts every Monday, Wednesday, and Friday."
        showCTAs={false}
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="container-narrow py-10">
        {posts.length === 0 ? (
          <p className="text-base text-muted">
            No posts yet. The first ones will land soon, check back Monday.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-lg border border-border bg-surface-2 p-6 transition hover:border-flame hover:shadow-md"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface px-2 py-1 text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-xl font-bold text-foreground group-hover:text-flame sm:text-2xl">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-3 text-base text-muted">{post.excerpt}</p>
                )}
                <div className="mt-4 text-sm text-muted">
                  {post.date && (
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </div>
                <span className="mt-4 inline-block text-sm font-semibold text-flame">
                  Read post →
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
