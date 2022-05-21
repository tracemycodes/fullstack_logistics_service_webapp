import React from 'react'
import styled from 'styled-components'
import { DivContainer } from '../../styles/styles'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import './styles.css';

// Import Swiper and modules
import { Autoplay } from 'swiper';


const NewsSection = styled.section`
  color: ${({theme}) => theme.text_darkBlue};
  text-align: center;
  h2 {
    margin: 6rem 0 1rem;
  }
  p {
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 35rem;
  }
  
  article {
      width: 15.5rem;
      height: 19rem;
      border: 2px solid green;
      text-align: left;
      display: inline-block;

      @media (max-width: 765px) {
        width: 18rem;
      }
      .news-img {
        height: 10rem;
        border: 2px solid red;
        margin-bottom: 1.5rem;
      }
      h3{
        margin: 0 .5rem;
        position: relative;
        &:before {
          content: " ";
          position: absolute;
          width: 2.7rem;
          border: 1.8px solid red;
          border-radius: 30px;
          bottom: -0.4rem;
          left: 0;
        }
      }
      p {
        margin: 2rem .5rem 1rem;
      }
    }
  
`

const RecentNews = () => {
  return (
    <NewsSection>
      <DivContainer>
        <h2>Recent News</h2>
        <p>Solving your supply chain needs from end to end, taking the complexity out of container shipping We are the forefront of developing innovation.</p>
        
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          speed={2000}
          autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          // when window width is >= 320px
          570: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width i
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          740: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        >
          <SwiperSlide>
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
          </SwiperSlide>
          <SwiperSlide>            
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
          </SwiperSlide>
          <SwiperSlide>            
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
          </SwiperSlide>
        </Swiper>
      
      </DivContainer>
    </NewsSection>
  )
}

export default RecentNews
