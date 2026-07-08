import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services, company } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { Method } from "@/components/Method";
import { Faq } from "@/components/Faq";
import { ServiceArt } from "@/components/ServiceArt";
import { Icon } from "@/components/Icons";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.overview };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        crumb={{ label: "All services", href: "/services" }}
        eyebrow={`${service.no} · ${service.kicker}`}
        title={service.title}
        accent={service.summary}
        intro={service.overview}
      />

      <section className="section pt-2">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="card p-8 sm:p-10">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                What is included
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-snug text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-line pt-6">
                {service.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
                <span className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-muted">
                  <Icon name="clock" className="h-4 w-4 text-gold-deep" /> {service.meta}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="dark-panel flex h-full flex-col rounded-3xl p-8">
              <div className="flex justify-center rounded-2xl bg-white/[0.04] py-6">
                <ServiceArt kind={service.art} className="h-28 w-28" />
              </div>
              <h2 className="font-display mt-6 text-xl font-semibold tracking-tight text-paper">
                Know the fee before we begin.
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/70">
                One free call. We check what you actually need, quote the full fee in writing, and
                commit to a date. No surprises, no checkout extras.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="btn btn-gold w-full">
                  Book a free call <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-dark w-full"
                >
                  <Icon name="whatsapp" className="h-4.5 w-4.5" /> WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Method />

      <section className="section pt-0">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Keep exploring</p>
            <h2 className="h-display mt-4 text-2xl sm:text-3xl">Other ways we help</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="card group flex h-full flex-col p-6">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {s.kicker}
                  </span>
                  <h3 className="font-display mt-2 flex-1 text-lg font-semibold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <span className="link-underline mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-ink">
                    Explore <Icon name="arrowUpRight" className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Faq />
    </>
  );
}
