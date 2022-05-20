import React from 'react'
import styled from "styled-components"
import landingImg2 from '../assets/industrial-port-container-yard.jpg'
import landingImg3 from '../assets/ship-container-harbor.jpg'
import landingImg4 from '../assets/terminal-landing.jpg'
import landingImg5 from '../assets/port-landing.jpg'
import landingImg6 from '../assets/pexels-landing.jpg'
import landingImg7 from '../assets/factory-worker-landing.jpg'
import landingImg8 from '../assets/beautiful-view-construction-landing.jpg'
import landingImg9 from '../assets/arial-port-landing.jpg'
import landingImg10 from '../assets/aerial-landing.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// Import Swiper and modules
import './styles.css'

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import TestLand from './TestLand';

const TestDiv = styled.section`
  width: 100%;
`




const Test = () => {
  return (
    <TestDiv>
      <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      speed={3000}
      effect={'fade'} 
      fadeEffect= {{crossFade: true}} 
      autoplay={{
        delay: 3000,
      }}
    >
      <SwiperSlide>
        <img src={landingImg2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={landingImg3} alt="" />
 
      </SwiperSlide>
      <SwiperSlide>
        <img src={landingImg7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={landingImg10} alt="" />
      </SwiperSlide>
      <TestLand/>
    </Swiper>
    </TestDiv>
  )
}

export default Test





    