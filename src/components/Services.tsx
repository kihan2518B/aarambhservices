"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { Icon, IconName } from "./Icons";

const serviceIcons: Record<string, IconName> = {
  "business-registration": "building",
  "gst-tax-compliance": "file",
  "startup-india-dpiit": "shield",
  "loan-funding": "rupee",
  "digital-presence-it": "globe",
  "strategy-consulting": "trending",
};

export function Services() {
  // The row crossing the viewport's middle band is the active one.
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px" }
    );
    rows.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="services">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
        {/* Sticky intro column */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="The solution"
            title="Everything a founder needs,"
            accent="under one roof."
            intro="Six services, one owner for your file. Start with one, or hand us the whole back office."
          />

          {/* Scroll progress, tied to the active service */}
          <div className="mt-9 hidden items-center gap-4 lg:flex" aria-hidden>
            <span className="font-display text-sm font-semibold tabular-nums tracking-tight text-ink">
              0{active + 1}
              <span className="text-muted"> / 06</span>
            </span>
            <div className="flex flex-1 gap-1.5">
              {services.map((s, i) => (
                <span
                  key={s.slug}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i <= active ? "bg-gold" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>

          <Link href="/services" className="btn btn-primary mt-8">
            Explore all services <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            Not sure where to start? Tell us where you are stuck on a free call, and we will map the
            rest.
          </p>
        </div>

        {/* Numbered service index */}
        <Stagger className="divide-y divide-line border-t border-b border-line">
          {services.map((s, i) => {
            const isActive = active === i;
            return (
              <StaggerItem key={s.slug}>
                <div
                  ref={(el) => {
                    rows.current[i] = el;
                  }}
                  data-index={i}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className={`group flex items-start gap-5 py-7 transition-all duration-500 sm:-mx-5 sm:rounded-2xl sm:px-5 sm:hover:bg-paper-2 ${
                      isActive ? "lg:opacity-100 sm:bg-paper-2" : "lg:opacity-60"
                    }`}
                  >
                    <span
                      className={`font-display pt-1 text-sm font-semibold tracking-tight transition-colors duration-500 ${
                        isActive ? "text-gold-deep" : "text-muted"
                      }`}
                    >
                      {s.no}
                    </span>
                    <span
                      className={`icon-tile hidden shrink-0 transition-all duration-500 sm:inline-flex ${
                        isActive ? "!border-gold !bg-gold !text-ink" : ""
                      }`}
                    >
                      <Icon name={serviceIcons[s.slug] ?? "spark"} className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                          {s.title}
                        </h3>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand-mid">
                          {s.kicker}
                        </span>
                      </span>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                        {s.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft">
                        <Icon name="clock" className="h-3.5 w-3.5 text-gold-deep" /> {s.meta}
                      </span>
                    </span>
                    <span
                      className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper ${
                        isActive ? "border-ink bg-ink text-paper" : "border-line bg-white text-ink"
                      }`}
                    >
                      <Icon name="arrowUpRight" className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
