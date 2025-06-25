import './SkillCard.css'

function SkillCard({IconComponent, skillTitle, skillPercentage }) {
  return (
    <div className='skillBox' >
      <IconComponent className='icon' />
      <div className='skillBarText'>
        <h2>{skillTitle}</h2>
        <div className='progressBar'>
          <div className='progressFill' style={{ width: skillPercentage }}></div>
        </div>
        <span className='percentage'>{skillPercentage}</span>
      </div>
    </div>
  )
}

export default SkillCard