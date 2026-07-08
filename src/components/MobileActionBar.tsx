"use client";

import Link from "next/link";
import { company } from "@/lib/content";
import { Icon } from "./Icons";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-lg lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={company.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-[0.68rem] font-semibold text-ink"
        >
          <Icon name="phone" className="h-5 w-5 text-brand-mid" /> Call
        </a>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-line py-3 text-[0.68rem] font-semibold text-ink"
        >
          <Icon name="whatsapp" className="h-5 w-5 text-brand-mid" /> WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 bg-ink py-3 text-[0.68rem] font-semibold text-paper"
        >
          <Icon name="spark" className="h-5 w-5 text-gold" /> Free call
        </Link>
      </div>
    </div>
  );
}
