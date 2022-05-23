import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';
import clientImg from '../../assets/singapore-crane-shipping-cargo.jpg';

// swiper import
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import './styles.css';

// Import Swiper and modules
import { Autoplay, EffectFade, Pagination } from 'swiper';

const ReviewSection = styled.section`
  padding-bottom: 5rem;

  .banner-img {
    height: 21.6rem;
    position: relative;
    z-index: -1;
    background-image: url(${clientImg});
    background-size: cover;
    background-position: top;

    :before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    h2 {
      margin-top: 4rem;
      font-size: ${({ theme }) => theme.text_h2};
      color: ${({ theme }) => theme.text_darkBlue};
    }
  }
`;

const ReviewContainer = styled(DivContainer)`
  margin-top: -18rem;

  h3 {
    margin: 2.5rem auto 3rem;
    text-align: center;
    font-size: ${({ theme }) => theme.text_h2};
    color: ${({ theme }) => theme.text_darkBlue};
  }

  .my-slider{
    padding: 3rem 1rem;
  }

  .carousel-item {
    box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    font-size: ${({ theme }) => theme.text_h3};
    background-color: #fff;
    border-radius: 0.3rem;
    position: relative;
    text-align: left;
    color: ${({ theme }) => theme.text_darkBlue};

    .ques-icon {
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      border: 2px solid black;
      top: -1rem;
      right: 1rem;
    }

    .rating {
      height: 1rem;
      width: 5rem;
      border: 2px solid brown;
      margin: 1rem 0 0.8rem;
    }
    .user-info {
      margin-top: 1rem;
      display: flex;

      .user-img {
        width: 2.3rem;
        height: 2.3rem;
        border: 2px solid orange;
        border-radius: 50%;
        margin-right: 1rem;
      }
      h4 {
        font-size: ${({ theme }) => theme.text_h3};
        margin-bottom: 0.16rem;
      }
      p {
        font-size: ${({ theme }) => theme.text_p1};
        color: ${({ theme }) => theme.text_darkBlue};
      }
    }
  }
`;

const ClientReview = () => {
  return (
    <ReviewSection>
      <div className='banner-img'></div>
      <ReviewContainer>
        <h3>Client Review</h3>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          loop={true}
          spaceBetween={40}
          slidesPerView={2}
          speed={2000}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
          }}
          className='my-slider'
        >
          <SwiperSlide>
            <div className='carousel-item'>
              <div className='ques-icon'></div>
              <div className='rating'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aperiam ut numquam debitis facere, magnam
                repellendus voluptates corporis quidem doloremque! Provident,
                facere quaerat.
              </p>
              <div className='user-info'>
                <div className='user-img'></div>
                <div className='user-details'>
                  <h4>David Huxham</h4>
                  <p>Founder, Huxham Inc</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='carousel-item'>
              <div className='ques-icon'></div>
              <div className='rating'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aperiam ut numquam debitis facere, magnam
                repellendus voluptates corporis quidem doloremque! Provident,
                facere quaerat.
              </p>
              <div className='user-info'>
                <div className='user-img'></div>
                <div className='user-details'>
                  <h4>Rebecca Moore</h4>
                  <p>Founder, Huxham Inc</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='carousel-item'>
              <div className='ques-icon'></div>
              <div className='rating'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aperiam ut numquam debitis facere, magnam
                repellendus voluptates corporis quidem doloremque! Provident,
                facere quaerat.
              </p>
              <div className='user-info'>
                <div className='user-img'></div>
                <div className='user-details'>
                  <h4>David Huxham</h4>
                  <p>Founder, Huxham Inc</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='carousel-item'>
              <div className='ques-icon'></div>
              <div className='rating'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aperiam ut numquam debitis facere, magnam
                repellendus voluptates corporis quidem doloremque! Provident,
                facere quaerat.
              </p>
              <div className='user-info'>
                <div className='user-img'></div>
                <div className='user-details'>
                  <h4>Rebecca Moore</h4>
                  <p>Founder, Huxham Inc</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ReviewContainer>
    </ReviewSection>
  );
};

export default ClientReview;
