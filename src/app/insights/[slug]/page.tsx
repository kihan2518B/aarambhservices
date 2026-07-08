import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights, company } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "Article not found" };
  return { title: article.title, description: article.excerpt };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const others = insights.filter((i) => i.slug !== article.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Organization", name: company.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        crumb={{ label: "All insights", href: "/insights" }}
        eyebrow={`${article.tag} · ${article.date} · ${article.read} read`}
        title={article.title}
      />

      <section className="section pt-2">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <article className="card p-8 sm:p-12">
              {article.body.map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-ink-soft ${i > 0 ? "mt-5" : ""} ${
                    i === 0 ? "text-xl font-medium text-ink" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </article>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="dark-panel rounded-3xl p-8">
                <h2 className="font-display text-lg font-semibold tracking-tight text-paper">
                  Have this exact question?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  Thirty minutes, free, with someone who has filed this a hundred times. We will
                  tell you what applies to your case.
                </p>
                <Link href="/contact" className="btn btn-gold mt-5 w-full">
                  Book a free call <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="card p-7">
                <p className="eyebrow">More insights</p>
                <ul className="mt-4 space-y-4">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/insights/${o.slug}`} className="group block">
                        <span className="font-display text-sm font-semibold leading-snug tracking-tight text-ink group-hover:underline">
                          {o.title}
                        </span>
                        <span className="mt-1 block text-xs text-muted">
                          {o.tag} · {o.read} read
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
