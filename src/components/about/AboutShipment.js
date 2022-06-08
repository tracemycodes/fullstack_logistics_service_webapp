import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';
import containerImg from '../../assets/icons/cargo-container-crane.svg';
import shipmentImg from '../../assets/icons/cruise.svg';
import mapImg from '../../assets/map-mercator.svg';

// swiper import
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import '../styles.css';

// Import Swiper and modules
import { Navigation, Pagination } from 'swiper';

const AboutLogistics = styled.section`
  padding: 6rem 0 7rem;
  color: ${({ theme }) => theme.text_darkBlue};
  background-image: url(${mapImg});
  background-cover: cover;
  background-position: center;
  text-align: center;
  width: 100%;
  overflow: hidden;
  // z-index: -2;

  h5 {
    font-size: ${({ theme }) => theme.text_h5};
    color: ${({ theme }) => theme.text_orange};
    margin-bottom: .4rem;
  }
  h3 {
    font-size: ${({ theme }) => theme.text_h2};
    max-width: 22rem;
    width: 100%;
    color: ${({ theme }) => theme.text_darkBlue};
    margin: 0rem auto 0.8rem;
  }

  p {
    margin: 0 auto;
    max-width: 30rem;
    width: 100%
    color: #306587;
    font-size: ${({ theme }) => theme.text_p1};
    text-align: justify;

  }
  .about-carousel {
    padding: 0.5rem 2.5rem;
    margin-top: 2rem;
    display: flex;
    gap: 2rem;    
    
    article {
      margin: 1rem 0 3rem;
    }
    .icon {
      width: 3.3rem;
      margin: auto;
      height: 3.3rem;

      img {
        position: relative;
        filter: brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(7180%) hue-rotate(356deg) brightness(87%) contrast(114%);
      }
    }
    h4 {
      margin-top: 1rem;
      color: ${({ theme }) => theme.text_darkBlue};
      font-weight: bold;
    }
    p {
      margin: unset;
      margin: 0;
      text-align: center;
      margin: 1.2rem 0;
      font-size: ${({ theme }) => theme.text_p1};
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text_orange};
      font-size: 0.8rem;
      font-weight: bold;
    }
    
  }
`;

const AboutShipment = () => {
  return (
    <AboutLogistics>
      <DivContainer>
        <h5>TRANSTICS SHIPPING CORP</h5>
        <h3>Taking care of you and your business all the way</h3>
        <p>
          Solving your supply chain needs from end to end taking the complexity
          out of container shipping. We are at the forefront of developing
          innovation
        </p>
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
            <SwiperSlide>
              <article>
                <div className='icon'>
                  <img src={containerImg} alt='logo' />
                </div>
                <h4>Secured Containers</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit, eius? Natus magni ab dignissimos officiis. Amet nam ad
                  odio id fugiat voluptatum?
                </p>
                <a href='#'>Read More</a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <div className='icon'>
                  <img src={shipmentImg} alt='' />
                </div>
                <h4>Modern Vessels</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit, eius? Natus magni ab dignissimos officiis. Amet nam ad
                  odio id fugiat voluptatum?
                </p>
                <a href='#'>Read More</a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <div className='icon'>
                  <img src={shipmentImg} alt='' />
                </div>
                <h4>Packaged goods</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit, eius? Natus magni ab dignissimos officiis. Amet nam ad
                  odio id fugiat voluptatum?
                </p>
                <a href='#'>Read More</a>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </DivContainer>
    </AboutLogistics>
  );
};

export default AboutShipment;
