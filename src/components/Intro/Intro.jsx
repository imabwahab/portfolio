import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png'
import profile from '../../assets/profile.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

function Intro() {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>

        <span className="introText">I'm
          <span className="IntroName">      Abdul Wahab</span>
          <br />
          Website Developer.
        </span>
        <p className="introPara">I'm a skilled front-end web developer with experience in building visually appealing,<br /> user-friendly websites. I specialize in designing and developing responsive web solutions <br />using HTML, CSS, JavaScript, React, and Bootstrap, ensuring seamless user experiences.

        </p>

        <Link><button className="btn"><img src={btnImg} alt="" className='btnImg' />Hire me</button></Link>

      </div>

      <img src={profile} alt="" className="bg" />
    </section>
  )
}

export default Intro