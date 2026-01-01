const skillColors = {
  HTML: "#E44D26",
  CSS: "#264DE4",
  JavaScript: "#F0DB4F",
  React: "#61DBFB",
  Bootstrap: "#7952B3",
  TailwindCSS: "#38BDF8",
  NodeJS: "#3C873A",
  ExpressJS: "#fdfdfd",
  MySQL: "#00758F",
  MongoDB: "#47A248",
  Git: "#F1502F",
  GitHub: "#181717",
  Netlify: "#00C7B7",
  Vercel: "#f0f0f0",
};

function SkillCard({ IconComponent, skillTitle, skillPercentage }) {
  return (
    <div
      className="
        flex flex-col items-center w-[260px] p-6 rounded-xl
        bg-white/60 dark:bg-dark-midnight/30 backdrop-blur-md
        shadow-lg hover:shadow-2xl border border-white/20
        transition-all duration-300 ease-out hover:-translate-y-1
      "
    >
      {/* Icon Wrapper (Floating Animation — requires adding keyframes in your global CSS) */}
      <div
        className="
          w-16 h-16 flex items-center justify-center rounded-full animate-[float_4s_ease-in-out_infinite]
          bg-gradient-to-r from-[#001d3d] via-[#335c67] to-[#0D5EA6]
          text-white shadow-md mb-4
        "
      >
        <IconComponent className="w-8 h-8" style={{ color: skillColors[skillTitle] }} />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-dark-secondary dark:text-gray-100 mb-2">
        {skillTitle}
      </h2>

      {/* Progress Bar */}
      {/* <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          style={{ width: `${skillPercentage}%` }}
          className="h-full bg-gradient-to-r from-[#0D5EA6] to-[#077A7D] rounded-full"
        ></div>
      </div> */}

      {/* Percentage Text */}
      {/* <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
        {skillPercentage}%
      </p> */}
    </div>
  );
}

export default SkillCard;
