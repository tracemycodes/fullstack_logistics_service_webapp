import React, { useRef, useState } from 'react';

// Style component
import styled from 'styled-components';
import { Btn, DivContainer } from '../../styles/styles';
import landingImg1 from '../../assets/industrial-port-container-yard.jpg';
import landingImg2 from '../../assets/ship-container-harbor.jpg';
import landingImg3 from '../../assets/factory-worker-landing.jpg';
import landingImg4 from '../../assets/aerial-landing.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import './styles.css';

// Import Swiper and modules
import { Autoplay, EffectFade } from 'swiper';

const SlideSection = styled.section`
  height: calc(100vh - 6rem);
  width: 100%;
`;

const CarouselDiv = styled.section`
  padding: 9.5rem 0rem 14.5rem;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 1;

  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.dark_overlay};
  }

  h1 {
    font-size: ${({ theme }) => theme.text_h1};
    line-height: ${({ theme }) => theme.lineHeight_h1};
    color: ${({ theme }) => theme.text_white};
    position: relative;
    max-width: 30rem;
    width: 100%;
    z-index: 2;
  }

  p {
    margin: 1rem 0 2rem;
    position: relative;
    font-size: ${({ theme }) => theme.text_h4};
    color: ${({ theme }) => theme.text_white};
    z-index: 2;
  }
`;

const LandingPage = () => {
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
        <SwiperSlide>
          <img src={landingImg1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landingImg2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landingImg3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landingImg4} alt='' />
        </SwiperSlide>
        <CarouselDiv>
          <DivContainer>
            <h1>Shipping Products Worldwide</h1>
            <p>with 100% Customer Satisfaction</p>
            <Btn>CONTACT US</Btn>
          </DivContainer>
        </CarouselDiv>
      </Swiper>
    </SlideSection>
  );
};

export default LandingPage;
