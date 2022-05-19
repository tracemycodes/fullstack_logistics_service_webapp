import React from 'react'
import styled from "styled-components"
import landingImg2 from '../assets/industrial-port-container-yard.jpg'

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
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect={'fade'} 
      fadeEffect= {{crossFade: true}} 
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      pagination={{clickable: true}}
      autoplay={{delay: 5000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={landingImg2} alt="" />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <TestLand/>
    </Swiper>
    </TestDiv>
  )
}

export default Test





    