/* eslint-disable comma-spacing */
/* eslint-disable react/prop-types */
/* eslint-disable key-spacing */
/* eslint-disable indent */
import React, { useState } from 'react'

const Card = ({ imageUrl, alt, bgOnHover,defaultBackground,hoveredUrl,height,width }) => {
const [hovered, setHovered] = useState(false)

    const imgSrc = hovered ? hoveredUrl : imageUrl

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: hovered ? bgOnHover : defaultBackground,
        boxShadow: '7px 7px 6px -6px #b6b6b6',
        height: '100px',
        width: '250px',
        transition: 'background-color 0.5s ease-out',
        padding:'20px'
    }

    return (
        <>
            <div style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <img src={imgSrc} alt={alt} height={height} width={width}/>
            </div>
        </>
    )
}

export default Card
