import BlogPlatform from "../assets/BlogPlatform.png";
import Sams from "../assets/sams.png";

export const projectData = [
  {
    name: "mapmymoney.co.nz",
    source: "Algotix AI",
    kind: "client",
    image: null,
    website: "https://mapmymoney.co.nz",
    role: "Full-stack product delivery",
    period: "2025 – Present",
    stack: ["Frontend Delivery", "Backend Support", "Production"],
    summary:
      "Contributed to feature delivery and implementation quality for a live, customer-facing platform inside an active production environment.",
    highlights: [
      "Shipped practical product improvements in a live production environment.",
      "Worked across the delivery cycle from implementation to release-ready updates.",
      "Contributed across frontend and backend implementation tasks.",
    ],
  },
  {
    name: "getflair.io",
    source: "Algotix AI",
    kind: "client",
    image: null,
    website: "https://getflair.io",
    role: "Client-facing full-stack implementation",
    period: "2025 – Present",
    stack: ["Feature Implementation", "Product Engineering", "Client-facing"],
    summary:
      "Contributed to full-stack implementation across an active client-facing product with real usage expectations.",
    highlights: [
      "Supported full-stack implementation across a live product.",
      "Delivered work tied directly to client-facing functionality.",
      "Operated in a professional delivery workflow shaped by real constraints.",
    ],
  },
  {
    name: "Blog Platform",
    source: "Personal",
    kind: "personal",
    image: BlogPlatform,
    preview: "https://blog-source-pink.vercel.app/",
    github: "https://github.com/imabwahab/blog-source.git",
    role: "Full-stack MERN application",
    period: "Portfolio project",
    stack: ["React", "Node.js", "MongoDB", "JWT Auth"],
    summary:
      "A full-stack blogging platform covering content management, authentication, and an end-to-end MERN application workflow.",
    highlights: [
      "Connected frontend and backend layers in a single product workflow.",
      "Implemented JWT-based authentication for protected actions.",
      "Used MongoDB for content persistence and application state.",
    ],
  },
  {
    name: "SAMS — Smart Appointment Management System",
    source: "Personal",
    kind: "personal",
    image: Sams,
    preview: "https://sams-web-azure.vercel.app/",
    github: "https://github.com/imabwahab/sams-web",
    role: "Full-stack healthcare management platform",
    period: "Portfolio project",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "TanStack Query",
      "Tailwind CSS",
    ],
    summary:
      "A production-ready, role-based platform that digitizes the doctor–patient appointment workflow for clinics, serving patients, doctors, and admins through one unified system.",
    highlights: [
      "Built role-based dashboards for patients, doctors, and admins, with doctor discovery, search, and specialization filtering.",
      "Designed smart scheduling with weekly availability, automatic conflict prevention, and a tracked appointment lifecycle.",
      "Shipped a type-safe REST API with Express, Prisma, and Zod validation, documented end to end with Swagger/OpenAPI.",
      "Applied production patterns including JWT auth, bcrypt hashing, soft deletes, request logging, and consistent error handling.",
    ],
  },
];
