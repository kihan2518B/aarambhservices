import Link from "next/link";
import { company, footerServices, footerCompany, footerLegal } from "@/lib/content";
import { AscentMark } from "./AscentMark";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="dark-panel mt-4">
      {/* Link columns */}
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Arambh Advisory, home">
            <AscentMark onDark className="h-9 w-9" />
            <span className="leading-tight">
              <span className="font-display block text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-paper">
                Arambh Advisory
              </span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-gold">
                Services LLP
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            {company.taglineAlt}
          </p>
          <p className="h-serif-accent mt-4 text-lg text-gold/90">{company.motto}</p>
        </div>

        <nav aria-label="Services">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/50">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerServices.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-paper/80 transition-colors hover:text-gold">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/50">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerCompany.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-paper/80 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/50">Reach out</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li>
              <a href={company.phoneHref} className="transition-colors hover:text-gold">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
                {company.email}
              </a>
            </li>
            <li className="text-paper/60">{company.address}</li>
            <li className="text-paper/60">{company.hours}</li>
          </ul>
        </div>
      </div>

      {/* Signature CTA band: deep bronze fading into brand gold, logo watermark */}
      <div className="gold-band relative overflow-hidden border-t border-line-dark">
        <AscentMark
          onDark
          className="pointer-events-none absolute -bottom-16 right-0 h-[26rem] w-[26rem] opacity-[0.18] sm:-bottom-24 sm:right-6 sm:h-[34rem] sm:w-[34rem]"
        />
        <div className="container-x relative py-20 lg:py-28">
          <h2 className="h-display max-w-xl text-4xl text-paper sm:text-5xl">
            Ready to give your business a strong start?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/80">
            Book a free thirty minute call. Honest answers, a written quote, and a clear plan,
            whether or not you hire us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn bg-white text-ink hover:shadow-lift">
              Book a free call <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-dark !border-paper/40 hover:!border-paper hover:!text-paper"
            >
              <Icon name="whatsapp" className="h-4.5 w-4.5" /> WhatsApp us
            </a>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/20 pt-6 text-xs text-paper/70 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <ul className="flex gap-6">
              {footerLegal.map((l) => (
                <li key={l}>
                  <span className="cursor-default">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
