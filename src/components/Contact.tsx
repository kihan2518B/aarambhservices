"use client";

import { useState } from "react";
import { company, services } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

export function Contact() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Arambh, I am ${name || "a founder"}.${need ? ` I need help with: ${need}.` : ""}${
        message ? ` ${message}` : ""
      }`
    );
    window.open(`${company.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section" id="contact">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Talk to us</p>
          <h2 className="h-display mt-5 text-3xl sm:text-4xl lg:text-[2.6rem]">
            Thirty minutes. Zero pressure.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Tell us where you are stuck. We will tell you exactly what it takes, what it costs, and
            how long it honestly takes. Then you decide.
          </p>

          <ul className="mt-9 space-y-4 text-sm">
            <li>
              <a href={company.phoneHref} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-brand-mid">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-ink group-hover:underline">
                    {company.phone}
                  </span>
                  <span className="text-muted">{company.hours}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-brand-mid">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-ink group-hover:underline">
                    {company.email}
                  </span>
                  <span className="text-muted">{company.responseTime}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-brand-mid">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold text-ink">{company.address}</span>
                <span className="text-muted">{company.serviceArea}</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <form onSubmit={submit} className="card p-8" aria-label="Start a conversation on WhatsApp">
            <p className="font-display text-lg font-semibold tracking-tight text-ink">
              Start the conversation
            </p>
            <p className="mt-1 text-sm text-muted">
              This opens a WhatsApp chat with us, pre-filled. No forms disappearing into a void.
            </p>

            <label className="mt-6 block text-sm font-medium text-ink" htmlFor="c-name">
              Your name
            </label>
            <input
              id="c-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Meera Kapoor"
              className="mt-2 w-full rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-mid"
            />

            <label className="mt-5 block text-sm font-medium text-ink" htmlFor="c-need">
              What do you need?
            </label>
            <select
              id="c-need"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              className="mt-2 w-full rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-mid"
            >
              <option value="">I am not sure yet</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>

            <label className="mt-5 block text-sm font-medium text-ink" htmlFor="c-msg">
              Anything else? <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea
              id="c-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="A line or two about your business and where you are stuck."
              className="mt-2 w-full resize-none rounded-xl border border-line bg-paper-2 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-mid"
            />

            <button type="submit" className="btn btn-primary mt-6 w-full">
              <Icon name="whatsapp" className="h-4.5 w-4.5" /> Continue on WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              Prefer email? Write to{" "}
              <a href={`mailto:${company.email}`} className="font-medium text-ink underline">
                {company.email}
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
