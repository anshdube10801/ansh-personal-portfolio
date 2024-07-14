import React from 'react'
import Navbar from '../Navbar/Navbar'
import Introduction from '../Introduction/Introduction'
import './Dashboard.css'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Dashboard = () => {
  return (
    <>
    <div id='navbar'>
        <Navbar/>
    </div>

    <div id='intro'>
        <Introduction/>
    </div>

    <div id='about-me'>
      <About/>
    </div>

    <div id='skills-main-div'>
      <Skills/>
    </div>

    <div id='experience'>
      <Experience/>
    </div>

    <div id='projects'>
      <Projects/>
    </div>

    <div id='contact'>
      <Contact/>
    </div>

    <div id='footer'>
      <Footer/>
    </div>
    </>

  )
}

export default Dashboard
