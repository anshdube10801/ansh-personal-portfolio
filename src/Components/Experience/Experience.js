import React from 'react'
import companyData from './CompanyData'
import './Experience.css'

const Experience = () => {
  return (
        <div id='experience-parent'>

            <div className='flex'>
                <h1 id='exp-main-head'>Experience</h1>
            </div>

            <div id='work-exp-head'>
                {companyData.map((data) => (

                <div id='work-exp-single' key={data.id}>

                    <div id='img-title-div'>
                        <div>
                            <img src={data.logo} alt={data.alt} height={data.height} width={data.width}/>
                        </div>

                        <div id='title-position-div'>
                            <h2>{data.position}</h2>
                            <p>{data.company}</p>
                            <p>{data.duration}</p>
                        </div>
                    </div>

                    <div>
                        <p>{data.description}</p>
                    </div>
                </div>))}
            </div>

        </div>
  )
}

export default Experience
