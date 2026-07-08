"use client";

import { motion } from "framer-motion";
import { method } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { Icon } from "./Icons";

const easeOut = [0.22, 1, 0.36, 1] as const;

// Wave the path through the five milestones: crests at 30, dips at 84 (viewBox 1000x120).
const JOURNEY_PATH =
  "M 89 30 C 170 30, 213 84, 294 84 S 419 30, 500 30 S 625 84, 706 84 S 830 30, 911 30 C 940 30, 962 24, 985 15";

export function Method() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            center
            eyebrow="The process"
            title="Five steps,"
            accent="no surprises."
            intro="The same disciplined path for every client, from the first call to long after the certificates arrive."
          />
        </div>

        {/* Desktop: curved journey. The path draws itself as it enters the viewport. */}
        <div className="relative mt-16 hidden lg:block">
          <svg
            aria-hidden
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            fill="none"
            className="absolute inset-x-0 top-0 h-[120px] w-full"
          >
            <path
              d={JOURNEY_PATH}
              stroke="var(--color-line-strong)"
              strokeWidth="1.5"
              strokeDasharray="5 8"
            />
            <motion.path
              d={JOURNEY_PATH}
              stroke="var(--color-gold)"
              strokeWidth="2"
              strokeOpacity="0.65"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 2, ease: easeOut }}
            />
          </svg>
          <span
            aria-hidden
            className="absolute -top-2 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink"
          >
            <Icon name="trending" className="h-4 w-4" />
          </span>

          <Stagger className="grid grid-cols-5 gap-8">
            {method.map((m, i) => {
              const dipped = i % 2 === 1;
              return (
                <StaggerItem key={m.step}>
                  <div className="flex flex-col items-center text-center">
                    <span
                      className={`font-display relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-white text-base font-semibold text-gold-deep shadow-card ${
                        dipped ? "mt-[3.75rem]" : "mt-1.5"
                      }`}
                    >
                      {m.step}
                    </span>
                    <h3 className="font-display mt-5 text-lg font-semibold tracking-tight text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{m.detail}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        {/* Mobile and tablet: vertical timeline */}
        <div className="relative mx-auto mt-12 max-w-xl lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-6 left-6 top-6 border-l-2 border-dashed border-line-strong"
          />
          <Stagger className="space-y-9">
            {method.map((m) => (
              <StaggerItem key={m.step}>
                <div className="flex items-start gap-5 text-left">
                  <span className="font-display relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white text-base font-semibold text-gold-deep shadow-card">
                    {m.step}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
