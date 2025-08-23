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
  { icon: IoLogoJavascript, skillTitle: 'JavaScript', skillPercentage: '60%' },
  { icon: FaReact, skillTitle: 'React', skillPercentage: '70%' },
  { icon: FaBootstrap, skillTitle: 'Bootstrap', skillPercentage: '60%' },
  { icon: RiTailwindCssFill, skillTitle: 'TailwindCSS', skillPercentage: '60%' },
];

export const databaseSkills = [
  { icon: BsFiletypeSql, skillTitle: 'MySQL', skillPercentage: '70%' },
  { icon: BiLogoMongodb, skillTitle: 'MongoDB', skillPercentage: '60%' }
];

export const backendSkills = [
  { icon: FaNode, skillTitle: 'NodeJS', skillPercentage: '70%' },
  { icon: SiExpress, skillTitle: 'ExpressJS', skillPercentage: '60%' }
];

export const devopsSkills = [
  { icon: FaGitAlt, skillTitle: 'Git', skillPercentage: '70%' },
  { icon: FaGithub, skillTitle: 'GitHub', skillPercentage: '60%' },
  { icon: BiLogoNetlify, skillTitle: 'Netlify', skillPercentage: '70%' },
  { icon: IoLogoVercel, skillTitle: 'Vercel', skillPercentage: '70%' }
];