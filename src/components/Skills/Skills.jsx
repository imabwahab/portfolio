import styles from './Skills.module.css'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";

function Skills() {
  return (
    <section id={styles.skills}>
      <span className={styles.skillTitle}>Skills</span>
      <span className={styles.skillDesc}>
        My expertise spans HTML, CSS, JavaScript, React, Bootstrap, and databases like MySQL and MongoDB. Below, you'll find a visual breakdown of my proficiency in each technology.
      </span>


      <div className={styles.skillsBar}>

        <div className={styles.skillBox}>
          <FaHtml5 className={styles.icon} />
          <div className={styles.skillBarText}>
            <h2>HTML</h2>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
            <span className={styles.percentage}>70%</span>
          </div>
        </div>

        <div className={styles.skillBox}>
          <FaCss3Alt className={styles.icon} />
          <div className={styles.skillBarText}>
            <h2>CSS</h2>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
            <span className={styles.percentage}>70%</span>
          </div>
        </div>

        <div className={styles.skillBox}>
          <IoLogoJavascript className={styles.icon} />
          <div className={styles.skillBarText}>
            <h2>JavaScript</h2>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
            <span className={styles.percentage}>70%</span>
          </div>
        </div>


        <div className={styles.skillBox}>
          <FaBootstrap className={styles.icon} />
          <div className={styles.skillBarText}>
            <h2>Bootstrap</h2>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
            <span className={styles.percentage}>70%</span>
          </div>
        </div>

        <div className={styles.skillBox}>
          <FaReact className={styles.icon} />
          <div className={styles.skillBarText}>
            <h2>REACT</h2>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
            <span className={styles.percentage}>70%</span>
          </div>
        </div>

        <div className={styles.skillBox}>
          <BsFiletypeSql className={styles.icon} />
          <div className={styles.skillBarText}>
            <h2>MySQL</h2>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
            <span className={styles.percentage}>70%</span>
          </div>
        </div>

        <div className={styles.skillBox}>
          <BiLogoMongodb className={styles.icon} />
          <div className={styles.skillBarText}>
            <h2>MongoDB</h2>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: '70%' }}></div>
            </div>
            <span className={styles.percentage}>70%</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills