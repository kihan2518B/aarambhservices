import Link from "next/link";
import { insights } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { Icon } from "./Icons";

export function Insights() {
  return (
    <section className="section bg-paper-2/60">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Straight answers,"
            accent="written down."
            intro="The questions founders actually ask, answered without jargon or upsell."
          />
          <Link href="/insights" className="link-underline mb-1 hidden text-sm text-ink sm:inline-flex">
            All insights <Icon name="arrowUpRight" className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {insights.map((a) => (
            <StaggerItem key={a.slug}>
              <Link href={`/insights/${a.slug}`} className="card group flex h-full flex-col p-7">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="rounded-full bg-brand-tint px-3 py-1 font-semibold uppercase tracking-[0.1em] text-brand">
                    {a.tag}
                  </span>
                  <span>{a.read} read</span>
                </div>
                <h3 className="font-display mt-5 flex-1 text-lg font-semibold leading-snug tracking-tight text-ink">
                  {a.title}
                </h3>
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
  );
}
