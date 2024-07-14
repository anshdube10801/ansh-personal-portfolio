import React, { useEffect, useState } from 'react'
import CareerImg from '../../assets/Career.png'
import { BsEye } from 'react-icons/bs'
import { AiOutlineArrowUp } from 'react-icons/ai'
import './About.css'

const About = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setShowScrollButton(true)
    } else {
      setShowScrollButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
    <div id='about-parent'>

        <div id='about-head' className='flex'>
            <h1>Career Snapshot</h1>
        </div>

        <div id='career-parent' className='flex'>

            <div id='career-image-div' className='flex'>
              <img src={CareerImg} alt='career-img'/>
            </div>

            <div id='career-text-div'>

                <div id='career-text-desc'>
                  <p>Fluent in the art of Full Stack Web Development, adeptly utilizing tools like Node.js, React.js, NoSQL, SQL, HTML, CSS, and JavaScript. Proficiently crafting sophisticated solutions that seamlessly integrate both Frontend and Backend Web Development, resulting in a harmonious and impactful digital experience.</p>
                </div>

                <div id='career-experience'>

                    <div id='year-experience'>
                      <h1>01+</h1>
                      <p>years</p>
                      <p>experience</p>
                    </div>

                    <div id='projects-completed'>
                      <h1>05+</h1>
                      <p>projects</p>
                      <p>done</p>
                    </div>

                    <div id='projects-ongoing'>
                      <h1>02+</h1>
                      <p>ongoing</p>
                      <p>projects</p>
                    </div>

                </div>

                <div id='view-resume'>
                <button id='career-view-resume' onClick={() => window.open('https://drive.google.com/file/d/1O1gc-gkzXIZwBeckjFovrOkIjo0WuX2B/view?usp=drive_link', '_blank')}>
                    <div className='flex'>
                    <p>View CV</p> <BsEye id='career-view-resume-icon'/>
                    </div>
                    </button>
                </div>
            </div>
        </div>

        {showScrollButton && (
        <div id='go-to-top' onClick={scrollToTop}>
          <button><AiOutlineArrowUp id='scroll-to-top-icon'/></button>
        </div>
        )}
    </div>
    </>
  )
}

export default About
