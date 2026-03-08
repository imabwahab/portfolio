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
      "An AI-powered experience focused on prompt-driven output generation with a clean frontend and third-party API integration.",
    highlights: [
      "Built with a modern React framework for performance and routing.",
      "Integrated AI responses into a production-style frontend flow.",
      "Shipped with polished styling and deployment on Vercel.",
    ],
    detailIntro:
      "This project was built to explore practical AI integration inside a modern product experience, with attention to prompt flow, frontend clarity, and deployable implementation.",
    outcomes: [
      "Created a clean user flow for prompt-based AI interactions.",
      "Connected the interface to external AI services in a production-style setup.",
      "Focused on responsive presentation and polished deployment quality.",
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
      "A full-stack blogging platform covering content management, authentication, and end-to-end MERN application structure.",
    highlights: [
      "Connected frontend and backend layers in a single product workflow.",
      "Implemented JWT-based authentication for protected actions.",
      "Used MongoDB for content persistence and application state.",
    ],
    detailIntro:
      "This build reflects a more complete application workflow, combining frontend interfaces, backend endpoints, authentication, and persistent data in one product.",
    outcomes: [
      "Implemented content-driven user flows with protected actions.",
      "Built a backend-backed architecture instead of a frontend-only demo.",
      "Used JWT authentication and database persistence for real application behavior.",
    ],
    gallery: [BlogPlatform],
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
      "A chat application built around instant communication, user authentication, and responsive client-side interaction.",
    highlights: [
      "Delivered a real-time messaging experience with Firebase.",
      "Handled login and user flows around authenticated access.",
      "Focused on speed, responsiveness, and practical product behavior.",
    ],
    detailIntro:
      "This project focused on fast client interaction and real-time communication, with authenticated access and practical app behavior as the core priorities.",
    outcomes: [
      "Built a live messaging experience with Firebase as the realtime backend.",
      "Handled authentication and user flow around active conversations.",
      "Designed the interface to feel responsive and immediate during use.",
    ],
    gallery: [ChatApp],
  },
];
