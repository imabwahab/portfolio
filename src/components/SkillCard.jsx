function SkillCard({ IconComponent, skillTitle, skillPercentage }) {
  return (
    <div
      className="
        flex items-center flex-1 min-w-[260px] max-w-[280px] p-6 
        rounded-md text-gray-600  bg-gradient-to-r from-[#f5f7fa] via-[#e4ecf2] to-[#dfe9f3]

        hover:scale-[1.02] transition-transform duration-300 ease-in-out
        border border-gray-200 dark:border-gray-700
        shadow-md hover:shadow-lg dark:shadow-sm

       dark:text-gray-200
        dark:bg-gradient-to-r dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]
        box-border
        sm:flex-1 sm:w-full sm:p-4
      "
    >
      <IconComponent className={`w-12 h-12 mr-6 ${skillTitle}`} />

      <div className="flex flex-col justify-center flex-1">
        <h2 className=" text-lg font-semibold">{skillTitle}</h2>
{/* 
        <div className="w-4/5 bg-gray-300 rounded-md h-[10px] mt-2 overflow-hidden sm:w-[100px] sm:h-[8px]">
          <div
            className="bg-green-500 h-full rounded-md transition-all duration-500 ease-in-out"
            style={{ width: skillPercentage }}
          />
        </div>
        <span className="text-sm mt-1 sm:text-xs">proficiency: {skillPercentage}</span> */}
      </div>
    </div>
  )
}

export default SkillCard;
