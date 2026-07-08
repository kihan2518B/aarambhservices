"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked"
            accent="questions."
            intro="If yours is not here, ask us directly. A real person replies within one working day."
          />
          <Reveal delay={0.15}>
            <div className="card mt-8 max-w-sm p-6">
              <p className="font-display text-base font-semibold tracking-tight text-ink">
                Book a 15 minute call
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Quick questions deserve quick answers. Talk to us before you decide anything.
              </p>
              <Link href="/contact" className="btn btn-primary mt-5 w-full !py-3 text-sm">
                Schedule a call
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="rounded-2xl border border-line bg-paper-2">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[0.98rem] font-semibold tracking-tight text-ink">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen ? "rotate-45 border-ink bg-ink text-paper" : "border-line bg-white text-ink"
                      }`}
                    >
                      <Icon name="x" className="h-3.5 w-3.5 rotate-45" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
