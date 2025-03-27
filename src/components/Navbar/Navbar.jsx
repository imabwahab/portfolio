import React from 'react'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import '../Navbar/Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo'/>

      <div className="desktopMenu">
        <Link className="desktopMenuItem">Home</Link>
        <Link className="desktopMenuItem">Clients</Link>
        <Link className="desktopMenuItem">Portfolio</Link>
        <Link className="desktopMenuItem">About</Link>
      </div>

      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className='desktopMenuImg' />
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar