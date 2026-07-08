"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { hero, proofLines, credentials } from "@/lib/content";
import { Icon } from "./Icons";

const easeOut = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: easeOut },
});

/* Decorative ascent line: the logo's growth arrow, drawn across the hero */
function AscentLine() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 620"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    >
      <defs>
        <linearGradient id="ascent-stroke" x1="0" y1="620" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d9a637" stopOpacity="0" />
          <stop offset="0.5" stopColor="#d9a637" stopOpacity="0.18" />
          <stop offset="1" stopColor="#a1781f" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <motion.path
        d="M-40 600 L280 540 L520 570 L820 470 L1080 500 L1480 330"
        stroke="url(#ascent-stroke)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.6, ease: easeOut }}
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[8.5rem] pb-16 lg:pt-[11rem] lg:pb-24">
      {/* Backdrop: warm mesh + thin grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 32rem at 50% -18%, rgba(217,166,55,0.18), transparent 60%), radial-gradient(40rem 24rem at 8% 30%, rgba(217,166,55,0.08), transparent 60%), radial-gradient(44rem 26rem at 94% 36%, rgba(107,84,35,0.09), transparent 58%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(31,25,13,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,25,13,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(70rem 40rem at 50% 0%, black, transparent 75%)",
        }}
      />
      <AscentLine />

      {/* Floating workflow cards: the paperwork, already handled (lg+) */}
      <motion.div
        {...rise(0.7)}
        aria-hidden
        className="absolute left-[4%] top-[15rem] hidden xl:block"
      >
        <div className="glass-card float-slow w-56 p-4" style={{ "--float-rot": "-5deg" } as React.CSSProperties}>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
              <Icon name="shield" className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">DPIIT Recognition</p>
              <p className="text-[0.68rem] text-muted">Startup India</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-line pt-2.5">
            <Icon name="check" className="h-3.5 w-3.5 text-gold-deep" />
            <span className="text-[0.7rem] font-medium text-ink-soft">Approved in 11 days</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        {...rise(0.85)}
        aria-hidden
        className="absolute right-[4%] top-[21rem] hidden xl:block"
      >
        <div className="glass-card float-slow-late w-56 p-4" style={{ "--float-rot": "4deg" } as React.CSSProperties}>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand">
              <Icon name="file" className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">GST Registration</p>
              <p className="text-[0.68rem] text-muted">Filed &amp; tracked</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-line pt-2.5">
            <Icon name="clock" className="h-3.5 w-3.5 text-gold-deep" />
            <span className="text-[0.7rem] font-medium text-ink-soft">Done in 3 days</span>
          </div>
        </div>
      </motion.div>

      <div className="container-x relative flex flex-col items-center text-center">
        <motion.p {...rise(0)} className="eyebrow">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="h-display mt-7 max-w-3xl text-[2.4rem] leading-[1.12] sm:text-5xl lg:text-[3.6rem]"
        >
          {hero.titleA} {hero.titleAccent} {hero.titleB}
        </motion.h1>

        <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {hero.sub}
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            {hero.ctaPrimary} <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/services" className="btn btn-ghost bg-white">
            {hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          {...rise(0.32)}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
        >
          {hero.assurances.map((a) => (
            <span key={a} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
              <Icon name="check" className="h-4 w-4 text-gold-deep" /> {a}
            </span>
          ))}
        </motion.div>

        {/* Proof strip */}
        <motion.div
          {...rise(0.42)}
          className="mt-16 grid w-full max-w-3xl gap-6 border-t border-line pt-9 sm:grid-cols-3"
        >
          {proofLines.map((p) => (
            <p key={p.value} className="text-sm leading-snug text-muted">
              <span className="font-display block text-3xl font-semibold tracking-tight text-ink">
                {p.value}
              </span>
              <span className="mt-1 block">{p.rest}</span>
            </p>
          ))}
        </motion.div>

        {/* Credential chips */}
        <motion.div {...rise(0.5)} className="mt-9 flex flex-wrap justify-center gap-2">
          {credentials.map((c) => (
            <span key={c.title} className="chip">
              <Icon name="shield" className="h-3.5 w-3.5 text-gold-deep" />
              {c.title}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
