// Content for Arambh Advisory Services LLP.
// Positioning: boutique, Ahmedabad-based, credential-led advisory, not a volume filing portal.
// Voice: plain, confident, specific. No dashes in copy. Commas, colons and periods.

export const company = {
  name: "Arambh Advisory Services LLP",
  shortName: "Arambh",
  tagline: "From Registration to Revenue",
  taglineAlt: "From idea to incorporated, and everything after.",
  motto: "Buland vision. Seedhi guidance. Sahi Arambh.",
  positioning: ["Incorporate.", "Comply.", "Fund.", "Grow."],
  location: "Ahmedabad, Gujarat",
  serviceArea: "Based in Ahmedabad. Serving founders across India.",
  hours: "Mon to Sat · 9:30 AM to 6:30 PM",
  phone: "+91 88665 56327",
  phoneHref: "tel:+918866556327",
  email: "info@arambhservices.com",
  whatsapp: "https://wa.me/918866556327",
  address: "Ahmedabad, Gujarat, India",
  responseTime: "We reply within one working day",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Trusted by 100+ founders across India",
  titleA: "Start right.",
  titleAccent: "Grow without the paperwork",
  titleB: "chasing you.",
  sub: "Registration, GST, DPIIT recognition and collateral free funding, handled end to end by one advisor who knows your file, keeps the date, and stays on as you grow.",
  ctaPrimary: "Book a free 30 minute call",
  ctaSecondary: "See what we do",
  assurances: ["Honest timelines", "Fees in writing", "One advisor, end to end"],
};

// Numbers told as sentences, used in the hero.
export const proofLines = [
  { value: "100+", rest: "founders taken from idea to incorporated" },
  { value: "₹50L+", rest: "raised in funding with zero collateral" },
  { value: "11 days", rest: "our fastest DPIIT recognition" },
];

// Stats band (with count-up).
export const stats = [
  { prefix: "", value: 100, suffix: "+", label: "Founders backed, idea to incorporated" },
  { prefix: "₹", value: 50, suffix: "L+", label: "Raised in funding without collateral" },
  { prefix: "", value: 7, suffix: " yrs", label: "Focused on this work, and only this" },
  { prefix: "", value: 11, suffix: " days", label: "Our fastest DPIIT recognition" },
];

// Our Promise — commitments stated plainly.
export const promises = [
  { title: "We answer.", detail: "A real person who knows your file, on the phone the same day. No bots, no ticket queue." },
  { title: "We commit the date.", detail: "Honest timelines agreed up front, then kept. GST in three days means three days." },
  { title: "We price it openly.", detail: "The full fee, in writing, before any work begins. No surprise extras, ever." },
  { title: "We stay on.", detail: "The relationship does not end at a certificate. We remain the number you call as you grow." },
];

// How we help — founder pain, and where we take you.
export const help = [
  { pain: "Confused which entity to even register", gain: "Incorporated as the structure that actually fits your plan" },
  { pain: "Dreading GST, ITR and ROC deadlines", gain: "Every filing handled quietly in the background, on time" },
  { pain: "Not sure you qualify for any funding", gain: "Matched to the right scheme, with documents ready to go" },
  { pain: "Carrying all of it alone, late at night", gain: "One advisor who owns the file and picks up the phone" },
];

export const services = [
  {
    no: "01",
    slug: "business-registration",
    kicker: "Foundation",
    title: "Business Registration",
    summary: "The right structure, filed properly.",
    description:
      "Private Limited, LLP, OPC or Partnership, chosen with intent rather than by template. DSC, DIN, name approval, MoA & AoA, PAN, TAN and bank setup, all coordinated by one person who owns your file.",
    overview:
      "The structure you register on day one quietly decides how you raise money, how much tax you pay, and how much compliance you carry for years. We help you choose between Private Limited, LLP, OPC and Partnership with real intent, then file the whole thing end to end so you can get back to building.",
    included: [
      "Entity selection advice for your actual plan",
      "Digital Signature (DSC) and Director ID (DIN)",
      "Name approval and incorporation filing",
      "MoA, AoA, PAN and TAN",
      "Company bank account setup",
      "A post-incorporation compliance checklist",
    ],
    meta: "Usually 7 to 15 working days",
    art: "registration",
    tags: ["Pvt Ltd", "LLP", "OPC", "Partnership"],
  },
  {
    no: "02",
    slug: "gst-tax-compliance",
    kicker: "Compliance",
    title: "GST & Tax Compliance",
    summary: "Filed quietly, on time, every time.",
    description:
      "GST registration in three working days. After that, monthly returns, ITR, TDS and annual ROC are handled quietly in the background, so a missed deadline never turns into a penalty.",
    overview:
      "GST registration in three working days, and then the quiet, unglamorous work that keeps you out of trouble. We track every return and statutory deadline in the background, so a missed date never becomes a penalty, a notice, or a late night.",
    included: [
      "GST registration",
      "Monthly and quarterly GST returns",
      "Income tax returns (ITR)",
      "TDS filings",
      "Annual ROC and MCA compliance",
      "Deadline tracking and reminders",
    ],
    meta: "GST in 3 days",
    art: "tax",
    tags: ["GST", "ITR", "TDS", "ROC"],
  },
  {
    no: "03",
    slug: "startup-india-dpiit",
    kicker: "Recognition",
    title: "Startup India · DPIIT",
    summary: "Recognised, then put to work.",
    description:
      "We do not rest until your DPIIT recognition is approved. Then we walk you through every benefit it unlocks: the 80-IAC tax holiday, self certification, fast track IPR and scheme eligibility.",
    overview:
      "DPIIT recognition is the official credential that unlocks the 80-IAC tax holiday, self certification and fast track intellectual property routes. We do not rest until yours is approved, and then we walk you through every benefit it opens up.",
    included: [
      "Eligibility check and documentation",
      "DPIIT recognition application",
      "80-IAC tax exemption guidance",
      "Self certification setup",
      "Fast track IPR and scheme mapping",
      "Ongoing benefit advisory",
    ],
    meta: "11 to 30 days",
    art: "recognition",
    tags: ["DPIIT", "80-IAC", "Self cert", "Fast IPR"],
  },
  {
    no: "04",
    slug: "loan-funding",
    kicker: "Capital",
    title: "Loan & Funding Access",
    summary: "The funding most founders miss.",
    description:
      "CGTMSE, Mudra, SIDBI, SME growth funds, angel networks. Funding that needs no collateral exists, and most founders simply do not know they qualify. We map the right instrument, prepare every document, and stay on it until the money is in your account.",
    overview:
      "Funding that needs no collateral exists, and most founders simply do not know they qualify. We assess your eligibility honestly, map the right instrument to your stage, prepare every document, and stay on the case until the money is in your account.",
    included: [
      "Eligibility assessment across schemes",
      "CGTMSE, Mudra and SIDBI applications",
      "SME growth fund and angel introductions",
      "Document and projection preparation",
      "Bank and NBFC liaison",
      "Follow through until disbursal",
    ],
    meta: "₹50L+ raised to date",
    art: "funding",
    tags: ["CGTMSE", "Mudra", "SIDBI", "Angels"],
  },
  {
    no: "05",
    slug: "digital-presence-it",
    kicker: "Identity",
    title: "Digital Presence & IT",
    summary: "Look as considered as you are.",
    description:
      "Website, brand, social and the IT plumbing behind it, built so a serious business reads as one from the very first click.",
    overview:
      "A serious business should read as one from the very first click. We build the website, brand, social presence and the IT plumbing behind it, so your digital front matches the quality of the work you actually do.",
    included: [
      "Website design and build",
      "Logo and brand identity",
      "Social media setup",
      "Business email and domain",
      "Basic IT and tooling setup",
      "Live in five to ten days",
    ],
    meta: "Live in 5 to 10 days",
    art: "digital",
    tags: ["Website", "Brand", "Social", "IT setup"],
  },
  {
    no: "06",
    slug: "strategy-consulting",
    kicker: "Strategy",
    title: "Strategy & Consulting",
    summary: "A thinking partner, on call.",
    description:
      "Investor ready business plans, clean financial models, market maps and go to market strategy, for the questions a Google search cannot answer.",
    overview:
      "For the questions a Google search cannot answer. We act as a thinking partner: investor ready business plans, clean financial models, honest market maps and a clear path to market, grounded in what your numbers actually say.",
    included: [
      "Investor ready business plan",
      "Financial models and projections",
      "Market and competitor maps",
      "Go to market strategy",
      "Pricing and unit economics",
      "On call advisory",
    ],
    meta: "Ongoing advisory",
    art: "strategy",
    tags: ["Biz plans", "Financials", "GTM", "Research"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// "Who we serve" segments.
export const segments = [
  { icon: "compass", title: "First-time founders", detail: "Starting from zero, with a clear plan." },
  { icon: "building", title: "Growing MSMEs", detail: "Revenue in, now scaling up properly." },
  { icon: "gear", title: "Manufacturers", detail: "Udyam, compliance and unit funding." },
  { icon: "globe", title: "D2C & retail brands", detail: "Structure, GST and a sharp identity." },
  { icon: "handshake", title: "Service businesses", detail: "Clean books, contracts and growth." },
  { icon: "trending", title: "Startups raising capital", detail: "DPIIT, schemes and investor-ready docs." },
];

export const audiences = [
  {
    tag: "Just starting out",
    title: "I am starting my first business.",
    detail:
      "No idea where to begin? Good. That is exactly the right time to call. We turn the confusion into a clear, prioritised plan, then file it for you.",
    cta: "Start from zero",
  },
  {
    tag: "Already running",
    title: "I have revenue and need to scale.",
    detail:
      "You are past survival. Now you need clean compliance, the right capital, and a sharper strategy. We handle the back office so you can run the business.",
    cta: "Scale up",
  },
];

export const team = {
  eyebrow: "The people",
  title: "Two founders. One number you can actually call.",
  intro:
    "Arambh is small on purpose. When you work with us, you work with the people whose names are on the door.",
  members: [
    {
      name: "Brijesh Desai",
      role: "Founder",
      initials: "BD",
      bio: "Brijesh started Arambh after years of watching capable founders get worn down by paperwork. He leads registration, DPIIT recognition and the funding side, and he is usually the person on your first call.",
    },
    {
      name: "Rishabh Makwana",
      role: "Co-Founder",
      initials: "RM",
      bio: "Rishabh runs compliance and operations, the quiet engine that keeps GST, tax and ROC filings on time. If a deadline is coming up, he already knows about it.",
    },
  ],
};

export const method = [
  {
    step: "01",
    title: "A real conversation",
    detail:
      "Tell us your goals and where you are stuck. Thirty minutes, zero pressure, and an actual person on the line instead of a sales script.",
  },
  {
    step: "02",
    title: "A clear roadmap",
    detail:
      "We map exactly what you need: structure, registrations, compliance, eligibility, and what each step costs, in writing, before we begin.",
  },
  {
    step: "03",
    title: "We do the work",
    detail:
      "Paperwork, filings, follow ups. You get updates that make sense in plain language, never a wall of jargon or a silent inbox.",
  },
  {
    step: "04",
    title: "Certificates in hand",
    detail:
      "Company live. GST active. DPIIT recognised. Every milestone documented, explained, and handed over, along with the benefits it unlocks.",
  },
  {
    step: "05",
    title: "We stay on",
    detail:
      "Growth does not end at registration. We remain your advisory partner, the number you call when the next question comes up.",
  },
];

export const comparison = {
  title: "Not a portal. Not a gamble. An advisor.",
  intro:
    "Filing portals compete on the cheapest checkout. Doing it yourself costs weekends you do not have. We compete on something else: accountability.",
  rows: [
    { label: "One advisor who knows your file", arambh: true, portal: "Whoever is free", diy: false },
    { label: "Picks up the phone the same day", arambh: true, portal: "Ticket queue", diy: "On you" },
    { label: "Maps your funding and schemes (CGTMSE, Mudra)", arambh: true, portal: false, diy: false },
    { label: "Stays on after the certificate", arambh: true, portal: false, diy: false },
    { label: "Sits across the table, in Ahmedabad", arambh: true, portal: false, diy: "On you" },
    { label: "Fee agreed in writing, up front", arambh: true, portal: "Extras at checkout", diy: "On you" },
  ],
};

export const testimonials = [
  {
    quote:
      "We got our DPIIT Startup India certificate through Arambh in eleven days, and used the 80-IAC tax holiday in our first year. Exactly what they promised.",
    name: "Priya Shah",
    role: "Co-Founder, D2C brand",
    place: "Surat",
    service: "Startup India · DPIIT",
    metric: "11-day DPIIT",
  },
  {
    quote:
      "The funding guidance alone was worth it. They mapped exactly which scheme fit our unit and stayed on it until the loan was disbursed.",
    name: "Amit Patel",
    role: "Director, manufacturing MSME",
    place: "Rajkot",
    service: "Loan & Funding",
    metric: "Loan disbursed",
  },
  {
    quote:
      "What we thought would take months was done in under two weeks. Genuinely transparent. We always knew what we were paying and why.",
    name: "Rahul Mehta",
    role: "Founder, tech startup",
    place: "Ahmedabad",
    service: "Business Registration",
    metric: "Live in 2 weeks",
  },
  {
    quote:
      "After three other consultants, Arambh felt like the first honest one. Clear pricing, real answers.",
    name: "Sneha Iyer",
    role: "Founder, healthtech",
    place: "Vadodara",
    service: "Strategy & Consulting",
    metric: "Transparent pricing",
  },
  {
    quote:
      "As a first generation entrepreneur, I had no idea where to start. They walked me through every step. It genuinely changed things for us.",
    name: "Nikhil Desai",
    role: "MSME owner",
    place: "Ahmedabad",
    service: "Business Registration",
    metric: "0 to incorporated",
  },
  {
    quote:
      "From registration to our first website, everything came from one team. One number to call.",
    name: "Karan Joshi",
    role: "Co-Founder, services startup",
    place: "Gandhinagar",
    service: "Digital & IT",
    metric: "One team, end to end",
  },
];

export const caseStudy = {
  eyebrow: "Proof, not promises",
  headline: "Startup India certificate, delivered in eleven days.",
  context:
    "A first time Ahmedabad founder came to us with an idea and a deadline. The 80-IAC tax free window only begins once you are recognised, so every week of delay was a week of lost benefit.",
  outcomes: [
    "Company incorporated and GST active within two weeks",
    "DPIIT Startup India certificate in eleven days",
    "Three year tax exemption under 80-IAC unlocked",
    "Made eligible for government funding schemes",
  ],
};

export const credentials = [
  { title: "DPIIT Recognised", detail: "Dept. for Promotion of Industry & Internal Trade" },
  { title: "Startup India Certified", detail: "Recognised ecosystem partner" },
  { title: "GST & MCA Compliant", detail: "Filings done right, on time" },
  { title: "Registered LLP", detail: "A structured, accountable firm" },
];

export const institutions = [
  "DPIIT",
  "Startup India",
  "MSME · Udyam",
  "GST Network",
  "MCA · ROC",
  "CGTMSE",
  "Mudra Yojana",
  "SIDBI",
];

export const faqs = [
  {
    q: "Will you tell me the fee before any work starts?",
    a: "Yes, always. Government fees are fixed by law, and our professional fee is fixed too, agreed in writing before we begin. No surprise extras appear at checkout, because there is no checkout. You will know the full number on the first call.",
  },
  {
    q: "Which structure should I register: Pvt Ltd, LLP or OPC?",
    a: "It depends on whether you will raise funding, how many founders there are, and your appetite for compliance. That is exactly the conversation we have on the free call. We recommend the structure that fits your actual plan, not the one that is easiest to file.",
  },
  {
    q: "How long does company registration and DPIIT really take?",
    a: "Incorporation usually takes 7 to 15 working days, GST registration around 3 working days, and DPIIT recognition 11 to 30 days depending on your documents. Our fastest DPIIT to date was eleven days. We give you honest dates, then we keep them.",
  },
  {
    q: "Do I actually qualify for funding without collateral?",
    a: "More founders qualify than realise it. Schemes like CGTMSE, Mudra and SIDBI exist precisely for early and growing businesses. On the call we check your eligibility honestly, and if you do not qualify yet, we tell you exactly what to fix first.",
  },
  {
    q: "What happens if I miss a compliance deadline?",
    a: "Missed GST, ITR, TDS or ROC deadlines turn into penalties and notices quickly. Once we are handling your compliance, those dates become ours to track, quietly, in the background, so it stops being a question you carry.",
  },
  {
    q: "Are you only for Ahmedabad businesses?",
    a: "We are based in Ahmedabad and proud of it, so you can sit across the table from us. We also work with founders across India remotely, with the same person owning your file from start to finish.",
  },
];

export const founderLetter = {
  eyebrow: "A note from the founder",
  body: [
    "Most founders do not fail at the idea. They get worn down by everything around it: the forms, the deadlines, the consultant who stops replying the moment the invoice clears.",
    "We started Arambh because we had watched that happen too many times. So we built the opposite. One advisor who knows your file, a fee you agree to up front, deadlines we actually keep, and a relationship that does not end at a certificate.",
    "Buland vision. Seedhi guidance. Sahi Arambh. A bold vision, straight guidance, and a right beginning. That is the whole promise, and we would like the chance to keep it for you.",
  ],
  signName: "Brijesh Desai",
  signoff: "Founder, Arambh Advisory Services LLP",
};

export const insights = [
  {
    slug: "pvt-ltd-vs-llp-vs-opc",
    title: "Pvt Ltd, LLP or OPC: which one, and why",
    excerpt: "The decision that quietly shapes your funding, tax and compliance for years.",
    date: "Apr 18, 2026",
    read: "8 min",
    tag: "Foundation",
    body: [
      "Every founder asks the same question on the first call: which structure should I register? It feels like a small admin choice. It is not. The entity you pick decides how you raise money, how much tax you pay, and how much compliance you carry for the next several years.",
      "A Private Limited company is the right answer if you intend to raise external funding. Investors expect equity shares, a board, and the governance that comes with them. The trade off is more compliance: board meetings, annual filings and audits.",
      "An LLP suits a profitable services business with a few partners who want limited liability without the heavier compliance of a company. You cannot easily raise venture money into an LLP, so it is rarely right for a startup chasing investors.",
      "A One Person Company lets a solo founder get the protection of a company structure while keeping full control, and it can convert to a Private Limited later as you grow.",
      "The honest answer is that it depends on your plan, not on what is cheapest to file. That is the conversation we have on the free call, and it is the single most valuable thirty minutes most first time founders spend.",
    ],
  },
  {
    slug: "gst-in-three-days",
    title: "GST in three days: what the form will not tell you",
    excerpt: "The documents you actually need, and the real reasons applications get rejected.",
    date: "Apr 12, 2026",
    read: "6 min",
    tag: "Compliance",
    body: [
      "On paper, GST registration looks like a simple online form. In practice, a surprising number of applications get stuck or rejected, usually for reasons the portal never explains clearly.",
      "The most common cause is a mismatch in the address proof. The name on your electricity bill, rent agreement and PAN need to line up, and the officer reviewing your file will question anything that looks inconsistent.",
      "The second is the nature of business and the codes you declare. Pick the wrong ones and you invite questions later, or end up filing returns under the wrong heads.",
      "The third is simply documentation order. A clean, complete file moves in about three working days. An incomplete one bounces between you and the department for weeks.",
      "We prepare the file properly the first time, so the three day timeline is the norm for our clients, not the exception.",
    ],
  },
  {
    slug: "cgtmse-explained",
    title: "₹2 crore, no collateral: reading CGTMSE properly",
    excerpt: "Who qualifies, how the guarantee works, and how to apply without wasting months.",
    date: "Apr 5, 2026",
    read: "10 min",
    tag: "Funding",
    body: [
      "Most founders assume a business loan needs property as security. The CGTMSE scheme exists precisely to break that assumption. Under it, banks can lend to eligible micro and small enterprises without collateral, because a government trust guarantees a large part of the loan.",
      "Eligibility is broader than people expect. New and existing manufacturing and service enterprises both qualify, with a few excluded categories. What matters is that the unit is registered and the application is built properly.",
      "The part founders get wrong is the projections and the documentation. A loan officer is not funding your enthusiasm. They are funding a file that shows the business can comfortably service the loan.",
      "We assess whether you qualify honestly, prepare the projections and documents, and stay with the application through the bank's process until it is sanctioned and disbursed.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export const footerServices = [
  "Business Registration",
  "GST & Tax Compliance",
  "Startup India · DPIIT",
  "Loan & Funding",
  "Digital & IT",
  "Strategy & Consulting",
];

export const footerCompany = [
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Book a call", href: "/contact" },
];

export const footerLegal = ["Privacy", "Terms", "Refund Policy"];
