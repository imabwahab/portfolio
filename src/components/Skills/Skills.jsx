import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import SkillCard from '../SkillCard/SkillCard';

import { FaLaptopCode } from "react-icons/fa";
import { TbDatabaseShare } from "react-icons/tb";

function Skills() {

  const frontEndSkills = [
    { icon: FaHtml5, skillTitle: 'HTML', skillPercentage: '70%' },
    { icon: FaCss3Alt, skillTitle: 'CSS', skillPercentage: '70%' },
    { icon: IoLogoJavascript, skillTitle: 'JavaScript', skillPercentage: '60%' },
    { icon: FaReact, skillTitle: 'React', skillPercentage: '70%' },
    { icon: FaBootstrap, skillTitle: 'Bootstrap', skillPercentage: '60%' },

  ];

  const backendSkills = [
    { icon: BsFiletypeSql, skillTitle: 'MySQL', skillPercentage: '70%' },
    { icon: BiLogoMongodb, skillTitle: 'MongoDB', skillPercentage: '60%' }
  ];

  return (
    <section id='skills'>
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>
        My technical expertise spans frontend, backend, and database development, enabling me to build complete and scalable web applications across the full stack.
      </span>

      <div className='skillsBar'>
        <div className="skillsBarHeader">
          <h2>FrontEnd</h2>
          <FaLaptopCode className='skillIcon' />
        </div>

        <div className='skillCards'>
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
          <h2>DataBases</h2>
          <TbDatabaseShare className='skillIcon' />
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
    </section>
  );
}

export default Skills;
