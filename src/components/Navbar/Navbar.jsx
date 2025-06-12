import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import '../Navbar/Navbar.css'
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />

      <div className="desktopMenu">
        <Link className="desktopMenuItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link className="desktopMenuItem" activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500}>Skills</Link>
        <Link className="desktopMenuItem" activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} >Projects</Link>
        <Link className="desktopMenuItem" activeClass='active' to='' spy={true} smooth={true} offset={-40} duration={500} >About</Link>
      </div>

      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="" className='desktopMenuImg' />
        Contact Me
      </button>


      <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar