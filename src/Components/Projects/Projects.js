import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { BiLinkExternal } from 'react-icons/bi'
import 'swiper/css'
import 'swiper/css/pagination'
import './Projects.css'
import sliderData from './SliderData'

const Projects = () => {
  return (
    <div id='projects-main-head'>

        <div id='main-head-projects' className='flex'>
            <h1>Projects</h1>
        </div>
<div id='head-div-slider-section'>
        <Swiper
        slidesPerView={2}
        spaceBetween={60}
        pagination={{
          clickable: true
        }}
          modules={[Pagination]}
        className="mySwiper"
      >
         {sliderData.map((data) => (

        <SwiperSlide key={data.id}>
            <div id='slider-head-div-container'>
                <div id='slider-img-div'>
                    <img src={data.projectImg} alt='ansh' height={data.height} width={data.width}/>
                </div>
                <div id='slider-text-head-div'>
                    <div id='project-title-slider'>
                        <h1>{data.projectName}</h1>
                    </div>
                    <div>
                        <p>{data.projectDescription}</p>
                    </div>
                    <div id='project-slider-btn' className='flex'>
                        <button className='flex' onClick={() => window.open(`${data.urlToNavigate}`, '_blank')}>View Project <BiLinkExternal id='project-icon'/></button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
         ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Projects
