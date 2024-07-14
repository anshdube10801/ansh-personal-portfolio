import React from 'react'
import Developer from '../../assets/Intro-img.png'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { BiLogoGmail } from 'react-icons/bi'
import { BsSend, BsMouse } from 'react-icons/bs'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link'
import './Introduction.css'

const Introduction = () => {
  const sendEmail = () => {
    const recipient = 'anshdube10801@gmail.com'

    const mailtoLink = `mailto:${recipient}`
    window.open(mailtoLink)
  }
  return (
    <>
      <div id='head-parent' className='flex'>
        <div id='icons-intro'>

          <div onClick={() => window.open('https://www.linkedin.com/in/ansh-dube/', '_blank')} className='contact-icon-top' id='linkedin-icon'> <FiLinkedin /> </div>

          <div onClick={() => window.open('https://github.com/anshdube10801', '_blank')} className='contact-icon-top' id='github-icon'> <FiGithub /> </div>

          <div onClick={sendEmail} className='contact-icon-top'> <BiLogoGmail /> </div>
        </div>
        <div id='intro-parent' className='flex'>

          <div id='intro-left'>

            <div id='ansh-text'>
              <h1>Hi! I&apos;m Ansh Dube</h1>
            </div>

            <div>

              <h1 id='text-animation'>
                Hi! I&apos;m a&nbsp;<span className="typewriter"></span>
              </h1>

              <div id='intro-desc'>
                <p>
                  I am a dedicated Full Stack Web Developer with a strong emphasis on MERN stack expertise. My true passion lies in crafting captivating and user-centric web applications that not only impress but also create a profound and enduring influence.
                </p>
              </div>

            </div>

            <div id='intro-hire-me-main-div'>
                  <button id='intro-hire-me' onClick={sendEmail}>
                    <div className='flex'>
                    <p>Hire Me</p> <BsSend id='hire-btn-icon'/>
                    </div>
                    </button>
            </div>

          </div>

          <div id='intro-right' className='flex'>
            <div id='image-container'>
              <img src={Developer} alt='developer' id='intro-img' className='image-layer' height={300} />
            </div>
          </div>

        </div>
      </div>
      <HashLink to='/#about-me' smooth className="custom-link"><div id='scroll-down'>
          <BsMouse id='mouse-icon'/>
          <p>Scroll Down</p>
          <AiOutlineArrowDown id='down-arrow'/>
        </div></HashLink>
    </>
  )
}

export default Introduction
