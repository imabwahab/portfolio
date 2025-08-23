import { FaLaptopCode } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDatabaseShare } from "react-icons/tb";
import { GoTools } from "react-icons/go";
import SkillCard from './SkillCard.jsx';

import { frontEndSkills, backendSkills, devopsSkills, databaseSkills } from "../assets/data";

function Skills() {

  return (
    <section id='skills' className=" py-10 px-6 md:px-30  text-white ">
      <h2 className="text-4xl font-bold text-primary-txt dark:text-[#FFF5E4] text-center mb-4">Skills</h2>
      <p className="text-center text-[#5C7285] dark:text-gray-300 max-w-3xl mx-auto mb-10">
        My technical expertise spans frontend, backend, and database development,
        enabling me to build complete and scalable web applications across the full stack.
      </p>

      {/* Skill Category Block */}
      <div className="space-y-12 ">

        {/* Frontend */}
        <div className="bg-gray-300/90 dark:bg-dark-midnight/10 rounded-lg shadow-2xl overflow-hidden">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-[#1E1EE6] via-[#A6CDC6]  to-[#FC466B] py-6 flex items-center justify-center gap-4  border-gray-700 text-primary-txt dark:text-primary-txt">
            <FaLaptopCode className="text-3xl " />
            <h3 className="text-3xl font-bold tracking-wide">Frontend</h3>
          </div>

          {/* Skill Cards */}
          <div className="flex flex-wrap justify-center gap-6 px-8 py-10">
            {frontEndSkills.map((skill, index) => (
              <SkillCard
                key={index}
                IconComponent={skill.icon}
                skillTitle={skill.skillTitle}
                skillPercentage={skill.skillPercentage}
              />
            ))}
          </div>
        </div>



        {/* Backend */}
        <div className="bg-gray-300/90 dark:bg-dark-midnight/10 rounded-lg shadow-2xl overflow-hidden">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-[#1E1EE6] via-[#A6CDC6]  to-[#FC466B] py-6 flex items-center justify-center gap-4  border-gray-700 text-primary-txt dark:text-primary-txt">
            <IoSettingsOutline className="text-3xl " />
            <h3 className="text-3xl font-bold tracking-wide">BackEnd</h3>
          </div>

          {/* Skill Cards */}
          <div className="flex flex-wrap justify-center gap-6 px-8 py-10">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                IconComponent={skill.icon}
                skillTitle={skill.skillTitle}
                skillPercentage={skill.skillPercentage}
              />
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="bg-gray-300/90 dark:bg-dark-midnight/10 rounded-lg shadow-2xl overflow-hidden">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-[#1E1EE6] via-[#A6CDC6]  to-[#FC466B] py-6 flex items-center justify-center gap-4  border-gray-700 text-primary-txt dark:text-primary-txt">
            <TbDatabaseShare className="text-3xl " />
            <h3 className="text-3xl font-bold tracking-wide">Database</h3>
          </div>

          {/* Skill Cards */}
          <div className="flex flex-wrap justify-center gap-6 px-8 py-10">
            {databaseSkills.map((skill, index) => (
              <SkillCard
                key={index}
                IconComponent={skill.icon}
                skillTitle={skill.skillTitle}
                skillPercentage={skill.skillPercentage}
              />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-gray-300/90 dark:bg-dark-midnight/10 rounded-lg shadow-2xl overflow-hidden">
          {/* Section Header */}
          <div className="bg-gradient-to-r from-[#1E1EE6] via-[#A6CDC6]  to-[#FC466B] py-6 flex items-center justify-center gap-4  border-gray-700 text-primary-txt dark:text-primary-txt">
            <GoTools className="text-3xl " />
            <h3 className="text-3xl font-bold tracking-wide">DevOps</h3>
          </div>

          {/* Skill Cards */}
          <div className="flex flex-wrap justify-center gap-6 px-8 py-10">
            {devopsSkills.map((skill, index) => (
              <SkillCard
                key={index}
                IconComponent={skill.icon}
                skillTitle={skill.skillTitle}
                skillPercentage={skill.skillPercentage}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
