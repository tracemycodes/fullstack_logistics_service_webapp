import React, { useRef, useState } from 'react';
import { Btn, DivContainer } from '../../styles/styles';
import { SlideSection, CarouselDiv } from './landingPageStyles';
import { landingPageInfo } from '../../delivery';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import '../styles.css';

// Import Swiper and modules
import { Autoplay, EffectFade } from 'swiper';

const LandingPage = () => {
  const { title, text, slider } = landingPageInfo;
  return (
    <SlideSection>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        speed={3000}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2000,
        }}
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt='' />
          </SwiperSlide>
        ))}

        <CarouselDiv>
          <DivContainer>
            <h1>{title}</h1>
            <p>{text}</p>
            <Btn>CONTACT US</Btn>
          </DivContainer>
        </CarouselDiv>
      </Swiper>
    </SlideSection>
  );
};

export default LandingPage;
