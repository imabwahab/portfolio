import './Intro.css'
import profile from '../../assets/profile.png'
import { HiOutlineDocumentText } from "react-icons/hi";

import { Link } from 'react-scroll'

function Intro() {
  return (
    <section id='intro'>
      <div className='background'>
        <img src={profile} alt="" className="bg-img" />
      </div>

      <div className="introContent">
        <span className="hello">Hello,</span>

        <span className="introText">I'm
          <span className="IntroName" style={{ marginLeft: '0.5rem' }}> Abdul Wahab</span>
          <br />
          <span className="skill">Website Developer.</span>
        </span>
        <p className="introPara">
          I'm a front-end web developer focused on building responsive, accessible, and visually engaging websites. With experience in modern tools like React, JavaScript, and CSS frameworks, I create user-centric solutions that deliver seamless digital experiences.
        </p>

        <a className='download-link ' href="/portfolio/cv.pdf" download="cv.pdf">
          <button className="btn"><HiOutlineDocumentText /> CV</button>
        </a>

        <Link></Link>

      </div>
    </section>
  )
}

export default Intro