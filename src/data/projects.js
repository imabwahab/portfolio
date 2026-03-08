import FormAI from "../assets/FormAI.png";
import BlogPlatform from "../assets/BlogPlatform.png";
import ChatApp from "../assets/ChatApp.png";

export const projectData = [
  {
    slug: "generative-ai",
    name: "Generative AI",
    image: FormAI,
    preview: "https://generative-ai-gray.vercel.app/",
    github: "https://github.com/imabwahab/Generative-AI.git",
    role: "Frontend and integration-focused build",
    period: "Portfolio project",
    stack: ["Next.js", "Tailwind CSS", "OpenAI API", "Generative UI"],
    summary:
      "A modern AI interface designed around prompt-driven workflows, structured output, and clean external API integration.",
    highlights: [
      "Built with a modern React framework for performance and routing.",
      "Integrated AI responses into a production-style frontend flow.",
      "Shipped with polished styling and deployment on Vercel.",
    ],
    detailIntro:
      "This project explored how AI can be integrated into a polished product experience, with attention to prompt flow, frontend clarity, and a deployable implementation.",
    outcomes: [
      "Designed a structured user flow for prompt-based AI interactions.",
      "Integrated external AI services into a production-style frontend experience.",
      "Delivered a responsive interface with polished deployment quality.",
    ],
    gallery: [FormAI],
  },
  {
    slug: "blog-platform",
    name: "Blog Platform",
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
    detailIntro:
      "This project represents a complete application workflow, combining frontend interfaces, backend endpoints, authentication, and persistent data in a single product.",
    outcomes: [
      "Implemented content-driven user flows with protected actions.",
      "Built a backend-supported architecture rather than a frontend-only demo.",
      "Used JWT authentication and database persistence to reflect real application behavior.",
    ],
    gallery: [BlogPlatform, BlogPlatform, BlogPlatform],
  },
  {
    slug: "chat-app",
    name: "Chat App",
    image: ChatApp,
    preview: "https://quick-chat-teal-eight.vercel.app/",
    github: "https://github.com/imabwahab/Quick-Chat.git",
    role: "Realtime frontend application",
    period: "Portfolio project",
    stack: ["React", "Firebase", "Real-time Messaging", "Authentication"],
    summary:
      "A chat application focused on real-time messaging, authenticated access, and responsive client-side interaction.",
    highlights: [
      "Delivered a real-time messaging experience with Firebase.",
      "Handled login and user flows around authenticated access.",
      "Focused on speed, responsiveness, and practical product behavior.",
    ],
    detailIntro:
      "This project focused on real-time communication, authenticated access, and the kind of responsive interaction expected from a modern messaging product.",
    outcomes: [
      "Built a live messaging experience with Firebase as the real-time backend.",
      "Handled authentication and user flow around active conversations.",
      "Designed the interface to feel fast, responsive, and immediate in use.",
    ],
    gallery: [ChatApp],
  },
];
