import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Straight answers to the questions Indian founders actually ask: entity structure, GST registration, DPIIT recognition and collateral-free funding, written without jargon.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Straight answers,"
        accent="written down."
        intro="No jargon, no upsell. The same honest explanations we give on the phone, for the questions founders ask most."
      />
      <section className="section pt-4">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {insights.map((a) => (
              <StaggerItem key={a.slug}>
                <Link href={`/insights/${a.slug}`} className="card group flex h-full flex-col p-7">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="rounded-full bg-brand-tint px-3 py-1 font-semibold uppercase tracking-[0.1em] text-brand">
                      {a.tag}
                    </span>
                    <span>{a.read} read</span>
                  </div>
                  <h2 className="font-display mt-5 flex-1 text-xl font-semibold leading-snug tracking-tight text-ink">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                    <span>{a.date}</span>
                    <span className="link-underline inline-flex items-center gap-1 font-semibold text-ink">
                      Read <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
