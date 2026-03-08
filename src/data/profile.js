import profile from "../assets/profile_pic3.png";

export const profileData = {
  name: "Abdul Wahab",
  title: "Full-Stack MERN Developer",
  location: "Pakistan",
  kicker: "Available for freelance and full-time web development work.",
  intro:
    "I build production-focused web applications with React, Node.js, NestJS, MongoDB, PostgreSQL, and Supabase. My work focuses on shipping responsive interfaces, dependable APIs, authentication flows, and polished deployments.",
  roles: [
    "MERN Stack Web Applications",
    "Next.js Interfaces and Integrations",
    "Node.js and NestJS Backend Logic",
  ],
  profileImage: profile,
  availability:
    "I am strongest on product-style builds where frontend quality, backend reliability, and deployment discipline all matter.",
  primaryCta: {
    label: "View Projects",
    to: "projects",
  },
  secondaryCta: {
    label: "Contact Me",
    to: "contact",
  },
  stats: [
    { value: "3+", label: "Shipped portfolio projects" },
    { value: "4", label: "Core capability areas" },
    { value: "MERN", label: "Primary engineering stack" },
  ],
  spotlight: [
    "Responsive frontend delivery",
    "API integration and backend logic",
    "Authentication and full-stack workflows",
  ],
  stacks: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
  ],
};

export const strengths = [
  {
    title: "Frontend Delivery",
    text: "Responsive React and Next.js interfaces with Tailwind CSS, reusable components, and clean interaction patterns.",
  },
  {
    title: "Backend Development",
    text: "Node.js, Express, and NestJS services for authentication, CRUD workflows, API integration, and scalable business logic.",
  },
  {
    title: "Database Design",
    text: "MongoDB, PostgreSQL, MySQL, and Supabase experience for application data modeling, persistence, and full-stack feature delivery.",
  },
  {
    title: "Deployment Workflow",
    text: "Git-based collaboration, Docker-based workflows, and deployment using GitHub, Vercel, and Netlify for fast iteration and release cycles.",
  },
];
