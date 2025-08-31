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

export const frontEndSkills = [
  { icon: FaHtml5, skillTitle: 'HTML', skillPercentage: '70%' },
  { icon: FaCss3Alt, skillTitle: 'CSS', skillPercentage: '70%' },
  { icon: IoLogoJavascript, skillTitle: 'JavaScript', skillPercentage: '70%' },
  { icon: FaReact, skillTitle: 'React', skillPercentage: '70%' },
  { icon: FaBootstrap, skillTitle: 'Bootstrap', skillPercentage: '70%' },
  { icon: RiTailwindCssFill, skillTitle: 'TailwindCSS', skillPercentage: '70%' },
];

export const databaseSkills = [
  { icon: BsFiletypeSql, skillTitle: 'MySQL', skillPercentage: '70%' },
  { icon: BiLogoMongodb, skillTitle: 'MongoDB', skillPercentage: '70%' }
];

export const backendSkills = [
  { icon: FaNode, skillTitle: 'NodeJS', skillPercentage: '70%' },
  { icon: SiExpress, skillTitle: 'ExpressJS', skillPercentage: '70%' }
];

export const devopsSkills = [
  { icon: FaGitAlt, skillTitle: 'Git', skillPercentage: '70%' },
  { icon: FaGithub, skillTitle: 'GitHub', skillPercentage: '70%' },
  { icon: BiLogoNetlify, skillTitle: 'Netlify', skillPercentage: '70%' },
  { icon: IoLogoVercel, skillTitle: 'Vercel', skillPercentage: '70%' }
];


// project pictures
import vmrm from "./vmrm.png";
import FormAI from "./FormAI.png";
import UGH from "./ugh.png";
import BlogPlatform from "./BlogPlatform.png";
import ChatApp from "./ChatApp.png"


export const projectData = [{
  name: 'Generative AI',
  pic: FormAI,
  preview: 'https://generative-ai-gray.vercel.app/',
  github: 'https://github.com/imabwahab/Generative-AI.git'
}, {
  name: 'Blog Platform',
  pic: BlogPlatform,
  preview: 'https://blog-source-pink.vercel.app/',
  github: 'https://github.com/imabwahab/blog-source.git'
}, {
  name: 'Chat App',
  pic: ChatApp,
  preview: 'https://quick-chat-teal-eight.vercel.app/',
  github: 'https://github.com/imabwahab/Quick-Chat.git'
}, {
  name: 'Gaming Hub',
  pic: UGH,
  preview: 'https://imabwahab.github.io/Gaming-Hub/',
  github: 'https://github.com/imabwahab/Gaming-Hub.git'
}, {
  name: 'VMRM',
  pic: vmrm,
  preview: 'https://vehicle-maintenance-repairing-manag.vercel.app/',
  github: 'https://github.com/imabwahab/Vehicle-Maintenance-Repairing-Management.git'

}];