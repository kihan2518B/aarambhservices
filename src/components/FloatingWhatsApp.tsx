"use client";

import { useEffect, useState } from "react";
import { company } from "@/lib/content";
import { Icon } from "./Icons";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-20 right-4 z-40 hidden items-center justify-center rounded-full bg-brand text-gold shadow-lift transition-all duration-300 hover:scale-105 lg:bottom-6 lg:right-6 lg:flex ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <Icon name="whatsapp" className="h-6 w-6" />
    </a>
  );
}
