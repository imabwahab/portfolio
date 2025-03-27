import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png'
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
        <p className="introPara">I'm a skilled web designer with experience in creating <br /> the visually appealing , user friendly websites, designs and their solutions.</p>

        <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire me</button></Link>

      </div>

      <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro