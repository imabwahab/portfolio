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
          <span className="IntroName">      Abdul Wahab</span>
          <br />
          Website Developer.
        </span>
        <p className="introPara">I'm a skilled front-end web developer with experience in building visually appealing, user-friendly websites. I specialize in designing and developing responsive web solutions using HTML, CSS, JavaScript, React, and Bootstrap, ensuring seamless user experiences. Also have the knowledge of databases like MongoDB and MySQL.

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