import React from 'react';
import { DivContainer } from '../../styles/styles';
import { AboutLogistics } from './aboutStyles';
import { aboutPageInfo } from '../../delivery';

// swiper import
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import '../styles.css';

// Import Swiper and modules
import { Navigation, Pagination } from 'swiper';

const AboutShipment = () => {
  const { title, header, text, card } = aboutPageInfo;
  return (
    <AboutLogistics>
      <DivContainer>
        <h5>{title.toUpperCase()}</h5>
        <h3>{header}</h3>
        <p>{text}</p>
        <div className='about-carousel'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            loop={true}
            slidesPerView={1}
            speed={2000}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              740: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {card.map((slide) => (
              <SwiperSlide key={slide.id}>
                <article>
                  <div className='icon'>
                    <img src={slide.icon} alt='logo' />
                  </div>
                  <h4>{slide.header}</h4>
                  <p>{slide.cardInfo}</p>
                  <a href='#'>Read More</a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </DivContainer>
    </AboutLogistics>
  );
};

export default AboutShipment;
