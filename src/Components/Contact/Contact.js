import React from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const Contact = () => {
  return (
        <div id='contact-parent-div'>

            <div id='contact-heading-div' className='flex'>
                <h1>Get in touch</h1>
            </div>

            <div id='container-div'>
                <div id='contact-left-div'>

                    <div id='left-email-div'>
                        <div id='left-email-icon'>
                            <AiOutlineMail id='icon-email'/>
                        </div>
                        <div id='left-email-text' className='margin-control'>
                            <h2>Email</h2>
                            <p>anshdube10801@gmail.com</p>
                        </div>
                    </div>

                    <div id='left-location-div'>
                        <div id='left-location-icon'>
                            <CiLocationOn id='icon-location'/>
                        </div>
                        <div id='left-location-text' className='margin-control'>
                            <h2>Location</h2>
                            <p>Indore, India</p>
                        </div>
                    </div>
                </div>

                <div id='contact-right-div'>

                    <form id="contact-form">

                        <div id='name-email-div'>
                            <div className="form-group">
                                <label htmlFor="fullname">Full Name</label>
                                <input type="text" id="fullname" className="form-control width-control" />
                            </div>

                            <div className="form-group" id='email-div'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" className="form-control width-control" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" className="form-control width-set" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="form-control width-set no-resize"></textarea>
                        </div>
                        <button type="submit" className="btn" id='send-btn'>Send Message</button>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default Contact
