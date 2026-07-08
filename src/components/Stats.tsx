"use client";

import { stats } from "@/lib/content";
import { CountUp, Stagger, StaggerItem } from "./Reveal";

export function Stats() {
  return (
    <section aria-label="Track record" className="pb-4">
      <div className="container-x">
        <div className="rounded-3xl border border-line bg-paper-2 px-6 sm:px-10">
          <Stagger className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="px-2 py-10 lg:px-8 lg:py-14">
                <p className="font-display text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm leading-snug text-muted">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
