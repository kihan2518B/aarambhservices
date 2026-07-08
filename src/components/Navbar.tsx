"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, navLinks } from "@/lib/content";
import { AscentMark } from "./AscentMark";
import { Icon } from "./Icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeOnNav = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-500 ease-out sm:px-5 ${
        scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"
      }`}
    >
      <div
        className={`nav-pill mx-auto w-full overflow-hidden transition-all duration-500 ease-out ${
          scrolled || open ? "max-w-[68rem]" : "max-w-[74rem] shadow-none"
        }`}
      >
        <div
          className={`flex items-center justify-between pl-5 pr-3 transition-[height] duration-500 ease-out sm:pl-6 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5" aria-label="Arambh Advisory, home">
            <AscentMark className="h-8 w-8" />
            <span className="leading-tight">
              <span className="font-display block text-[0.82rem] font-semibold uppercase tracking-[0.05em] text-ink">
                Arambh Advisory
              </span>
              <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-brand-mid">
                Services LLP
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {navLinks.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-sm font-medium transition-colors ${
                    active ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                  {active ? (
                    <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={company.phoneHref} className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink">
              {company.phone}
            </a>
            <Link href="/contact" className="btn btn-primary !px-5 !py-2.5 text-sm">
              Book a free call
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
          >
            <Icon name={open ? "x" : "spark"} className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-line lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-3 py-5" aria-label="Mobile">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={l.href}
                      onClick={closeOnNav}
                      className="font-display block rounded-xl px-3 py-2.5 text-xl font-semibold tracking-tight text-ink hover:bg-paper-2"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-3 flex flex-col gap-3 px-3 pb-2">
                  <Link href="/contact" onClick={closeOnNav} className="btn btn-primary w-full">
                    Book a free call
                  </Link>
                  <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">
                    <Icon name="whatsapp" className="h-4.5 w-4.5" /> WhatsApp us
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
