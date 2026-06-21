import profile from "../assets/profile_pic3.png";

export const profileData = {
  name: "Abdul Wahab",
  title: "Full-Stack Engineer",
  location: "Pakistan",
  status: "Available for work",
  kicker: "Available for freelance engagements and full-time opportunities.",
  intro:
    "I build production web applications with React, Next.js, Node, and TypeScript. My work spans real-time dashboards and payment flows through to secure, multi-tenant backend systems and third-party integrations.",
  roles: [
    "Production SaaS and fintech platforms",
    "React, Next.js, and TypeScript front-ends",
    "Node, Express, and NestJS backend systems",
  ],
  profileImage: profile,
  availability:
    "I do my best work on products that require thoughtful frontend execution, reliable backend architecture, and disciplined delivery from development through deployment.",
  primaryCta: {
    label: "View Projects",
    to: "projects",
  },
  secondaryCta: {
    label: "Contact Me",
    to: "contact",
  },
  stats: [
    { value: "3", label: "Production platforms at Algotix AI" },
    { value: "5+", label: "Production integrations shipped" },
    { value: "TypeScript", label: "Primary development stack" },
  ],
  spotlight: [
    "Real-time, data-driven frontend delivery",
    "Secure APIs and multi-tenant backend logic",
    "Payment, telephony, and AI integrations",
  ],
  stacks: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Supabase",
    "Stripe",
    "Tailwind CSS",
  ],
};

export const strengths = [
  {
    title: "Frontend Engineering",
    text: "Responsive React and Next.js interfaces in TypeScript, with reusable component libraries, data visualizations, and real-time UX driven by TanStack Query and Supabase Realtime.",
  },
  {
    title: "Backend & APIs",
    text: "Node.js, Express, and NestJS services with layered architecture, secure multi-tenant access control, and reliable API and business-logic design.",
  },
  {
    title: "Integrations & Payments",
    text: "Production integrations across Stripe billing, Twilio telephony, OpenAI analysis, Clerk authentication, and open-banking aggregation.",
  },
  {
    title: "Data & Deployment",
    text: "PostgreSQL, Supabase, MongoDB, and MySQL data modeling, deployed via Docker and Google Cloud Run / Vercel with Git-based CI/CD.",
  },
];
