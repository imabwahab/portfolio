import './Intro.css'
import profile from '../../assets/profile.png'
import { HiOutlineDocumentText } from "react-icons/hi";

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
        <p className="introPara">I'm a skilled front-end web developer with experience in building visually appealing,<br /> user-friendly websites. I specialize in designing and developing responsive web solutions <br />using HTML, CSS, JavaScript, React, and Bootstrap, ensuring seamless user experiences.<br />Also have the knowledge of databases like MongoDB and MySQL.

        </p>

        <a href="/portfolio/cv.pdf" download="cv.pdf"><button className="btn"><HiOutlineDocumentText /> CV</button></a>

        <Link></Link>

      </div>

      <img src={profile} alt="" className="bg-img" />
    </section>
  )
}

export default Intro