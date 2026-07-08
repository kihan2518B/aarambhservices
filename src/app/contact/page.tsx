import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free thirty minute call with Arambh Advisory. Honest answers, a written quote, and a clear plan, whether or not you hire us. Based in Ahmedabad, serving founders across India.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${company.name}`,
  description: "Book a free call, WhatsApp us, or write to us.",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Tell us where"
        accent="you are stuck."
        intro="One call. You get honest answers, a written quote, and a clear plan, whether or not you hire us."
      />
      <Contact />
      <Faq />
    </>
  );
}
