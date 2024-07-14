import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer-head-div'>

        <div id='footer-container'>
        <HashLink to='/#' smooth className="custom-link"><div id='name-div'>
                <h1>Ansh Dube</h1>
                <p>Full Stack Web Developer</p>
            </div></HashLink>

            <div id='footer-pages-div'>
            <HashLink to='/#about-me' smooth className="custom-link"><p className='margin-control color-set'>About</p></HashLink>
             <HashLink to='/#skills-main-div' smooth className="custom-link"><p className='margin-control color-set'>Skills</p></HashLink>
             <HashLink to='/#experience' smooth className="custom-link"><p className='margin-control color-set'>Experience</p></HashLink>
             <HashLink to='/#projects' smooth className="custom-link color-set"><p>Projects</p></HashLink>
            </div>
        </div>

        <div id='copyright-footer'>
        <p>&copy; {new Date().getFullYear()} Ansh Dube. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
