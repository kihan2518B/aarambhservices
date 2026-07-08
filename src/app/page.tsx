import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { HowWeHelp } from "@/components/HowWeHelp";
import { Method } from "@/components/Method";
import { Stats } from "@/components/Stats";
import { Compare } from "@/components/Compare";
import { CaseStudy } from "@/components/CaseStudy";
import { Testimonials } from "@/components/Testimonials";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Faq } from "@/components/Faq";
import { FounderNote } from "@/components/FounderNote";
import { Insights } from "@/components/Insights";
import { company, services, faqs } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: company.name,
      description:
        "Boutique Ahmedabad advisory for business registration, GST and tax compliance, Startup India and DPIIT recognition, loan and funding access, digital presence and strategy consulting.",
      telephone: company.phone,
      email: company.email,
      slogan: company.tagline,
      areaServed: "IN",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      openingHours: "Mo-Sa 09:30-18:30",
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* One story: problem → solution → why us → process → proof → trust → people → answers */}
      <Hero />
      <Marquee />
      <HowWeHelp />
      <Services />
      <Compare />
      <Method />
      <Stats />
      <CaseStudy />
      <Testimonials />
      <WhoWeServe />
      <FounderNote />
      <Faq />
      <Insights />
    </>
  );
}
