import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { ServiceArt } from "@/components/ServiceArt";
import { Compare } from "@/components/Compare";
import { Faq } from "@/components/Faq";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business registration, GST and tax compliance, Startup India and DPIIT recognition, collateral-free funding, digital presence and strategy consulting. Six services, one owner for your file.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="One roof."
        accent="Everything after the idea."
        intro="Start with a single registration or hand us the entire back office. Either way, one person owns your file, and you always know the fee before we begin."
      />

      <section className="section pt-4">
        <div className="container-x">
          <Stagger className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card group flex h-full flex-col gap-6 p-8 sm:flex-row"
                >
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-paper-2">
                    <ServiceArt kind={s.art} className="h-20 w-20" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                        {s.kicker}
                      </span>
                      <span className="font-display text-sm font-semibold text-gold-deep">
                        {s.no}
                      </span>
                    </div>
                    <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-ink">
                      {s.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {s.description}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="chip !py-1 text-[0.7rem]">
                          {t}
                        </span>
                      ))}
                      <span className="link-underline ml-auto inline-flex items-center gap-1 text-sm font-semibold text-ink">
                        Details <Icon name="arrowUpRight" className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Compare />
      <Faq />
    </>
  );
}
