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
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Interfaces, component architecture, and modern styling workflows.",
    skills: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: IoLogoJavascript, name: "JavaScript" },
      { icon: FaReact, name: "React" },
      { icon: FaBootstrap, name: "Bootstrap" },
      { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server-side logic, API development, and request handling.",
    skills: [
      { icon: FaNode, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiNestjs, name: "NestJS" },
    ],
  },
  {
    title: "Database",
    subtitle: "Application data storage and schema-driven development.",
    skills: [
      { icon: BsFiletypeSql, name: "MySQL" },
      { icon: BiLogoMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiSupabase, name: "Supabase" },
    ],
  },
  {
    title: "Tooling and Deployment",
    subtitle: "Version control and deployment platforms used in delivery.",
    skills: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: SiDocker, name: "Docker" },
      { icon: BiLogoNetlify, name: "Netlify" },
      { icon: IoLogoVercel, name: "Vercel" },
    ],
  },
];
