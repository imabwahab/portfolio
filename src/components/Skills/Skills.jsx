import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb, BiLogoNetlify } from "react-icons/bi";
import SkillCard from '../SkillCard/SkillCard';
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill, RiVercelLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoVercel } from "react-icons/io5";

/* skills bar title icons */
import { FaLaptopCode } from "react-icons/fa";
import { TbDatabaseShare } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { GoTools } from "react-icons/go";
import { GrDeploy } from "react-icons/gr";

function Skills() {

  const frontEndSkills = [
    { icon: FaHtml5, skillTitle: 'HTML', skillPercentage: '70%' },
    { icon: FaCss3Alt, skillTitle: 'CSS', skillPercentage: '70%' },
    { icon: IoLogoJavascript, skillTitle: 'JavaScript', skillPercentage: '60%' },
    { icon: FaReact, skillTitle: 'React', skillPercentage: '70%' },
    { icon: FaBootstrap, skillTitle: 'Bootstrap', skillPercentage: '60%' },
    { icon: RiTailwindCssFill, skillTitle: 'Tailwind CSS', skillPercentage: '60%' },
  ];

  const databaseSkills = [
    { icon: BsFiletypeSql, skillTitle: 'MySQL', skillPercentage: '70%' },
    { icon: BiLogoMongodb, skillTitle: 'MongoDB', skillPercentage: '60%' }
  ];

  const backendSkills = [
    { icon: FaNode, skillTitle: 'NodeJS', skillPercentage: '70%' },
    { icon: SiExpress, skillTitle: 'ExpressJS', skillPercentage: '60%' }
  ];

  
  const devopsSkills = [
    { icon: FaGitAlt, skillTitle: 'Git', skillPercentage: '70%' },
    { icon: FaGithub, skillTitle: 'GitHub', skillPercentage: '60%' },
    { icon: BiLogoNetlify, skillTitle: 'Netlify', skillPercentage: '70%' },
    { icon: IoLogoVercel, skillTitle: 'Vercel', skillPercentage: '70%' }
  ];


  return (
    <section id='skills'>
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>
        My technical expertise spans frontend, backend, and database development, enabling me to build complete and scalable web applications across the full stack.
      </span>

      <div className='skillsBar back'>
        <div className="skillsBarHeader">
          <h2>FrontEnd</h2>
          <FaLaptopCode className='skillIcon' />
        </div>

        <div className='skillCards '>
          {frontEndSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <SkillCard key={index} IconComponent={IconComponent} skillTitle={skill.skillTitle} skillPercentage={skill.skillPercentage} />
            );
          })}
        </div>
      </div>

      <div className='skillsBar'>
        <div className="skillsBarHeader">
          <h2>BackEnd</h2>
          <IoSettingsOutline className='skillIcon' />
        </div>

        <div className='skillCards'>
          {backendSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <SkillCard key={index} IconComponent={IconComponent} skillTitle={skill.skillTitle} skillPercentage={skill.skillPercentage} />
            );
          })}
        </div>
      </div>

      <div className='skillsBar'>
        <div className="skillsBarHeader">
          <h2>DataBases</h2>
          <TbDatabaseShare className='skillIcon' />
        </div>

        <div className='skillCards'>
          {databaseSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <SkillCard key={index} IconComponent={IconComponent} skillTitle={skill.skillTitle} skillPercentage={skill.skillPercentage} />
            );
          })}
        </div>
      </div>
  
      <div className='skillsBar'>
        <div className="skillsBarHeader">
          <h2>Tools</h2>
          <GoTools className='skillIcon' />
        </div>

        <div className='skillCards'>
          {devopsSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <SkillCard key={index} IconComponent={IconComponent} skillTitle={skill.skillTitle} skillPercentage={skill.skillPercentage} />
            );
          })}
        </div>
      </div>


    </section>
  );
}

export default Skills;
