import React, { useState, useRef, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import { HashLink } from 'react-router-hash-link'
import { SiGooglemeet } from 'react-icons/si'
import { FaBars } from 'react-icons/fa' // Importing the hamburger icon
import './Navbar.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const menuRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  // Handle clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLinks(false)
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <nav className="navbar">
      <HashLink to='/#' smooth>
        <div className="navbar-logo">
          <img src={Logo} alt='logo' height={50}/>
        </div>
      </HashLink>
      <ul className={`navbar-list ${showLinks ? 'show' : ''}`} ref={menuRef}>
        <HashLink to='/#' smooth className="custom-link"><li><p className='bold'>Home</p></li></HashLink>
        <HashLink to='/#about-me' smooth className="custom-link"><li><p className='bold'>About</p></li></HashLink>
        <HashLink to='/#skills-main-div' smooth className="custom-link"><li><p className='bold'>Skills</p></li></HashLink>
        <HashLink to='/#experience' smooth className="custom-link"><li><p className='bold'>Experience</p></li></HashLink>
        <HashLink to='/#projects' smooth className="custom-link"><li><p className='bold'>Projects</p></li></HashLink>
        <HashLink to='/#contact' smooth className="custom-link"><li><p className='bold'>Contact</p></li></HashLink>
      </ul>
      <div className="about-us">
        <button className='flex' onClick={() => window.open('https://calendly.com/anshdube10801', '_blank')}>
          Schedule Meet <SiGooglemeet id='schedule-meet-icon'/>
        </button>
        <button className="hamburger" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
