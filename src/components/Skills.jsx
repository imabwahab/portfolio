import { FaLaptopCode } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDatabaseShare } from "react-icons/tb";
import { GoTools } from "react-icons/go";
import { skills } from "../assets/data.js";
import SkillCard from "./cards/SkillCard.jsx";


const sectionGradient = "bg-gradient-to-r from-[#001d3d] via-[#335c67] to-[#0D5EA6]";

function Skills() {
  const { frontend, backend, database, devops } = skills;

  const categories = [
    {
      title: "Frontend",
      icon: FaLaptopCode,
      data: frontend,
    },
    {
      title: "Backend",
      icon: IoSettingsOutline,
      data: backend,
    },
    {
      title: "Database",
      icon: TbDatabaseShare,
      data: database,
    },
    {
      title: "DevOps",
      icon: GoTools,
      data: devops,
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-12 lg:px-24 text-white">
      <h2 className="text-4xl font-bold text-primary-txt dark:text-primary-txt-light text-center mb-4">
        Skills
      </h2>

      <p className="text-center text-[#5C7285] dark:text-gray-300 max-w-3xl mx-auto mb-12">
        My technical expertise spans frontend, backend, database, and DevOps,
        enabling me to build complete and scalable applications.
      </p>

      <div className="space-y-14">
        {categories.map(({ title, icon: Icon, data }, idx) => (
          <>
            <div
              key={idx}
              className="bg-white/40 dark:bg-dark-midnight/20 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/10"
            >
              {/* Unified Section Header */}
              <div
                className={`${sectionGradient} py-6 flex items-center justify-center gap-4 text-primary-txt-light shadow-inner`}
              >
                <Icon className="text-3xl" />
                <h3 className="text-3xl font-bold tracking-wide">{title}</h3>
              </div>

              {/* Skill Cards */}
              <div className="flex flex-wrap justify-center gap-6 px-8 py-10">
                {data.map((skill, index) => (
                  <SkillCard
                    key={index}
                    IconComponent={skill.icon}
                    skillTitle={skill.skillTitle}
                    skillPercentage={skill.skillPercentage}
                  />
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Skills;
