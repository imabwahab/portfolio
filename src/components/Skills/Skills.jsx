import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";

function Skills() {
  
  const skillsInfo = [
    { icon: FaHtml5, skillTitle: 'HTML', skillPercentage: '70%' },
    { icon: FaCss3Alt, skillTitle: 'CSS', skillPercentage: '70%' },
    { icon: IoLogoJavascript, skillTitle: 'JavaScript', skillPercentage: '60%' },
    { icon: FaReact, skillTitle: 'React', skillPercentage: '70%' },
    { icon: FaBootstrap, skillTitle: 'Bootstrap', skillPercentage: '60%' },
    { icon: BsFiletypeSql, skillTitle: 'MySQL', skillPercentage: '70%' },
    { icon: BiLogoMongodb, skillTitle: 'MongoDB', skillPercentage: '60%' }
  ];

  return (
    <section id='skills'>
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>
        My expertise spans HTML, CSS, JavaScript, React, Bootstrap, and databases like MySQL and MongoDB. Below, you'll find a visual breakdown of my proficiency in each technology.
      </span>

      <div className='skillsBar'>
        {skillsInfo.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div className='skillBox' key={index}>
              <IconComponent className='icon' />
              <div className='skillBarText'>
                <h2>{skill.skillTitle}</h2>
                <div className='progressBar'>
                  <div className='progressFill' style={{ width: skill.skillPercentage }}></div>
                </div>
                <span className='percentage'>{skill.skillPercentage}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
