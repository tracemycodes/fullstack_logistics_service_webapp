import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import './styles.css';

// Import Swiper and modules
import { Autoplay } from 'swiper';

const NewsSection = styled.section`
  color: ${({ theme }) => theme.text_darkBlue};
  text-align: center;
  padding-bottom: 5rem;
  h2 {
    margin: 6rem 0 1rem;
    font-size: ${({ theme }) => theme.text_h2};
  }
  p {
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 35rem;
    font-size: ${({ theme }) => theme.text_p1};
  }
  .my-slide {
    padding: 0 1rem;
  }
  article {
    height: 19rem;
    box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    text-align: left;
    border-radius: .7rem;

    .news-img {
      height: 10rem;
      border: 2px solid red;
      margin-bottom: 1.5rem;
      border-top-right-radius: .7rem;
      border-top-left-radius: .7rem;
    }
    h3 {
      margin: 0 0.5rem;
      position: relative;
      font-size: ${({ theme }) => theme.text_h3};
      &:before {
        content: ' ';
        position: absolute;
        width: 2.7rem;
        border: 1.8px solid ${({ theme }) => theme.text_orange};
        background-color: ${({ theme }) => theme.text_orange};
        border-radius: 30px;
        bottom: -0.4rem;
        left: 0;
      }
    }
    p {
      margin: 2rem 0.5rem 1rem;
      width: unset;
      font-size: ${({ theme }) => theme.text_p1};
    }
  }
`;

const RecentNews = () => {
  return (
    <NewsSection>
      <DivContainer>
        <h2>Recent News</h2>
        <p>
          Solving your supply chain needs from end to end, taking the complexity
          out of container shipping We are the forefront of developing
          innovation.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          speed={2000}
          // loop={true}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            570: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            740: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className='my-slide'
        >
          <SwiperSlide>
            <article>
              <div className='news-img'></div>
              <h3>Denso invests $10mn in india distribution</h3>
              <p className='news-text'>
                By HARRY MENEAR - Mar 16, 2021 - 9:00AM
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <div className='news-img'></div>
              <h3>Denso invests $10mn in india distribution</h3>
              <p className='news-text'>
                By HARRY MENEAR - Mar 16, 2021 - 9:00AM
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <div className='news-img'></div>
              <h3>Denso invests $10mn in india distribution</h3>
              <p className='news-text'>
                By HARRY MENEAR - Mar 16, 2021 - 9:00AM
              </p>
            </article>
          </SwiperSlide>
        </Swiper>
      </DivContainer>
    </NewsSection>
  );
};

export default RecentNews;
