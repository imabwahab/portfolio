import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub, FaNode, FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb, BiLogoNetlify } from "react-icons/bi";

import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const navLinks = [
  { name: 'Home', to: 'HeroSection' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'Projects' },
  { name: 'Contact', to: 'contact' },
];


export const skills = {
  frontend: [
    { icon: FaHtml5, skillTitle: 'HTML', skillPercentage: 85 },
    { icon: FaCss3Alt, skillTitle: 'CSS', skillPercentage: 85 },
    { icon: IoLogoJavascript, skillTitle: 'JavaScript', skillPercentage: 85 },
    { icon: FaReact, skillTitle: 'React', skillPercentage: 85 },
    { icon: FaBootstrap, skillTitle: 'Bootstrap', skillPercentage: 85 },
    { icon: RiTailwindCssFill, skillTitle: 'TailwindCSS', skillPercentage: 85 },
  ],

  database: [
    { icon: BsFiletypeSql, skillTitle: 'MySQL', skillPercentage: 85 },
    { icon: BiLogoMongodb, skillTitle: 'MongoDB', skillPercentage: 85 }
  ],

  backend: [
    { icon: FaNode, skillTitle: 'NodeJS', skillPercentage: 85 },
    { icon: SiExpress, skillTitle: 'ExpressJS', skillPercentage: 85 }
  ],

  devops: [
    { icon: FaGitAlt, skillTitle: 'Git', skillPercentage: 85 },
    { icon: FaGithub, skillTitle: 'GitHub', skillPercentage: 85 },
    { icon: BiLogoNetlify, skillTitle: 'Netlify', skillPercentage: 85 },
    { icon: IoLogoVercel, skillTitle: 'Vercel', skillPercentage: 85 }
  ]
}


// project pictures
import FormAI from "./FormAI.png";
import BlogPlatform from "./BlogPlatform.png";
import ChatApp from "./ChatApp.png";


export const projectData = [
  {
    name: 'Generative AI',
    pic: FormAI,
    preview: 'https://generative-ai-gray.vercel.app/',
    github: 'https://github.com/imabwahab/Generative-AI.git',
    tech: 'Next.js • Tailwind CSS • OpenAI API • Generative Models'
  },
  {
    name: 'Blog Platform',
    pic: BlogPlatform,
    preview: 'https://blog-source-pink.vercel.app/',
    github: 'https://github.com/imabwahab/blog-source.git',
    tech: 'React • Node.js • MongoDB • JWT Auth'
  },
  {
    name: 'Chat App',
    pic: ChatApp,
    preview: 'https://quick-chat-teal-eight.vercel.app/',
    github: 'https://github.com/imabwahab/Quick-Chat.git',
    tech: 'React • Firebase • Real-time Chat • Authentication'
  },
];

// Hero Section Data

import profile from './profile_2.png';

export const heroData = {
  greeting: "Hello,",
  name: "Abdul Wahab",
  roles: [
    "Full Stack MERN Developer",
    "Next.js Developer",
    "Node.js Developer"
  ],
  description:
    "I’m a Full Stack Developer specializing in the MERN stack. I build robust, scalable web apps with clean, maintainable code — from UI to backend architecture.",
  profileImage: profile,
  cvText: "CV",
  projectsTarget: "Projects",
};
