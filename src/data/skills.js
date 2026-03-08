import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa6";
import { BiLogoMongodb, BiLogoNetlify } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { FiCode, FiDatabase, FiServer, FiTool } from "react-icons/fi";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    categoryIcon: FiCode,
    subtitle: "Web and mobile interfaces, component architecture, and scalable styling systems.",
    skills: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: IoLogoJavascript, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: SiReact, name: "React Native" },
      { icon: FaBootstrap, name: "Bootstrap" },
      { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    categoryIcon: FiServer,
    subtitle: "API development, application logic, and server-side architecture.",
    skills: [
      { icon: FaNode, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiNestjs, name: "NestJS" },
    ],
  },
  {
    title: "Database",
    categoryIcon: FiDatabase,
    subtitle: "Data modeling, persistence, and schema-driven application design.",
    skills: [
      { icon: BsFiletypeSql, name: "MySQL" },
      { icon: BiLogoMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiSupabase, name: "Supabase" },
    ],
  },
  {
    title: "Tooling and Deployment",
    categoryIcon: FiTool,
    subtitle: "Version control, deployment tooling, and release-oriented workflows.",
    skills: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiDocker, name: "Docker" },
      { icon: BiLogoNetlify, name: "Netlify" },
      { icon: IoLogoVercel, name: "Vercel" },
    ],
  },
];
