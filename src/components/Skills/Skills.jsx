import  './Skills.css'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";

function Skills() {
  return (
    <section id='skills'>
      <span className='skillTitle'>Skills</span>
      <span className='skillDesc'>
        My expertise spans HTML, CSS, JavaScript, React, Bootstrap, and databases like MySQL and MongoDB. Below, you'll find a visual breakdown of my proficiency in each technology.
      </span>


      <div className='skillsBar'>

        <div className='skillBox'>
          <FaHtml5 className='icon' />
          <div className='skillBarText'>
            <h2>HTML</h2>
            <div className='progressBar'>
              <div className='progressFill' style={{ width: '70%' }}></div>
            </div>
            <span className='percentage'>70%</span>
          </div>
        </div>

        <div className='skillBox'>
          <FaCss3Alt className='icon' />
          <div className='skillBarText'>
            <h2>CSS</h2>
            <div className='progressBar'>
              <div className='progressFill'style={{ width: '70%' }}></div>
            </div>
            <span className='percentage'>70%</span>
          </div>
        </div>

        <div className='skillBox'>
          <IoLogoJavascript className='icon' />
          <div className='skillBarText'>
            <h2>JavaScript</h2>
            <div className='progressBar'>
              <div className='progressFill'style={{ width: '70%' }}></div>
            </div>
            <span className='percentage'>70%</span>
          </div>
        </div>


        <div className='skillBox'>
          <FaBootstrap className='icon' />
          <div className='skillBarText'>
            <h2>Bootstrap</h2>
            <div className='progressBar'>
              <div className='progressFill'style={{ width: '70%' }}></div>
            </div>
            <span className='percentage'>70%</span>
          </div>
        </div>

        <div className='skillBox'>
          <FaReact className='icon' />
          <div className='skillBarText'>
            <h2>REACT</h2>
            <div className='progressBar'>
              <div className='progressFill'style={{ width: '70%' }}></div>
            </div>
            <span className='percentage'>70%</span>
          </div>
        </div>

        <div className='skillBox'>
          <BsFiletypeSql className='icon' />
          <div className='skillBarText'>
            <h2>MySQL</h2>
            <div className='progressBar'>
              <div className='progressFill'style={{ width: '70%' }}></div>
            </div>
            <span className='percentage'>70%</span>
          </div>
        </div>

        <div className='skillBox'>
          <BiLogoMongodb className='icon' />
          <div className='skillBarText'>
            <h2>MongoDB</h2>
            <div className='progressBar'>
              <div className='progressFill'style={{ width: '70%' }}></div>
            </div>
            <span className='percentage'>70%</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills