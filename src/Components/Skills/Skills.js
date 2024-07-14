import React from 'react'
import Card from './Card'
import imageData from './ImageData'
import './Skills.css'

const Skills = () => {
  return (
    <>
    <div id='skills-parent-main-div'>
    <div id='tech-heading-div' className='flex'>
    <h1 id='tech-heading'>Skills</h1>
    </div>

    <div id='tech-subheading-div' className='flex'>
    <p id='para-1-sub'>Independently curating remarkable software performance, I ensure you receive top-tier</p>
    <p id='para-2-sub'> upgrades that keep you on the cutting edge of innovation!</p>
    </div>

    <div id='cards-map'>
    {imageData.map((data) => (
      <Card key={data.id} imageUrl={data.imageUrl} alt={data.alt} bgOnHover={data.bgOnHover} defaultBackground={data.defaultBackground} hoveredUrl={data.hoveredUrl} height={data.height} width={data.width}/>
    ))}
    </div>
    </div>
    </>
  )
}

export default Skills
