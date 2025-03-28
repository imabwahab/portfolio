import styles from './Skills.module.css'
import React from 'react'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id={styles.skills}>
      <span className={styles.skillTitle}>What I do</span>
      <span className={styles.skillDesc}>I'm a skilled front-end web developer with experience in building visually appealing,<br /> user-friendly websites. I specialize in designing and developing responsive web solutions <br />using HTML, CSS, JavaScript, React, and Bootstrap, ensuring seamless user experiences.
      </span>

      <div className={styles.skillsBar}>
        <div className={styles.skillBar}>
          <img src={UIDesign} alt="UIDesign" className={styles.skillBarImg} />
          <div className={styles.skillBarText}>
            <h2>UI/UX design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>

        <div className={styles.skillBar}>
          <img src={WebDesign} alt="WebDesign" className={styles.skillBarImg} />
          <div className={styles.skillBarText}>
            <h2>Website Design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>

        <div className={styles.skillBar}>
          <img src={AppDesign} alt="AppDesign" className={styles.skillBarImg} />
          <div className={styles.skillBarText}>
            <h2>App Design</h2>
            <p>This is a demo text, you can write your own content here</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills