import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';
import truckImg from '../../assets/truck-img.jpg';
import shipImg from '../../assets/ship-cargo.jpg';
import airplaneImg from '../../assets/plane-flying.jpg';
import businessImg from '../../assets/icons/movers.svg';
import eventImg from '../../assets/icons/reschedule-date.svg';
import militaryImg from '../../assets/icons/truck-loading.svg';

// swiper import
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import './styles.css';

// Import Swiper and modules
import { Navigation, Pagination } from 'swiper';

const Section = styled.section`
  padding: 4rem 0rem;
  background-color: #f8f9fb;
  // background-color: ${({ theme }) => theme.text_ashGrey};
  overflow: hidden;

  h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.text_h2};
    color: ${({ theme }) => theme.text_darkBlue};
  }
  .section-details {
    max-width: 34rem;
    width: 90%;
    color: ${({ theme }) => theme.text_darkBlue};
    font-size: ${({ theme }) => theme.text_p1};
    text-align: center;
    margin: 1rem auto;

    @media (max-width: 500px) {
      text-align: justify;
    }
  }
  .tab-group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.2rem;

    button {
      padding: 0.5rem 1rem;
      font-size: clamp(0.68rem, 3vw, 0.75rem);
      border: none;
      background-color: ${({ theme }) => theme.text_light};
      margin: 0 0.1rem;
      color: ${({ theme }) => theme.text_darkBlue};
      font-weight: 600;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 3;

      :hover {
        background-color: ${({ theme }) => theme.text_darkBlue};
        color: ${({ theme }) => theme.text_light};
      }
    }

    img {
      width: 1.4rem;
      height: 1.4rem;
      margin-right: 0.3rem;
      filter: ${({ theme }) => theme.icon_filter};
    }
    .btn-left {
      border-top-left-radius: 0.85rem;
    }
    .btn-right {
      border-top-right-radius: 0.85rem;
    }
  }
  .logistics-carousel {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    .card {
      // margin-top: 1rem;
      color: ${({ theme }) => theme.text_darkBlue};
      background-color: ${({ theme }) => theme.text_light};
      border-bottom-left-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
      box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.1);
      z-index: 2;
      position: relative;
      text-align: left;
    }
    h4 {
      margin: 1rem 1.3rem 0rem;
      font-size: ${({ theme }) => theme.text_h3};
      font-weight: 500;
    }
    p {
      margin: 1.3rem;
      font-size: ${({ theme }) => theme.text_p1};
    }
    .card-num {
      color: ${({ theme }) => theme.text_orange};
      font-weight: bold;
      margin-right: 0.2rem;
    }
    .card-img {
      height: 12rem;
      position: relative;
      z-index: 3;

      &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      &:hover:after {
        background-color: ${({ theme }) => theme.text_blue_overlay};
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  // .pagination {
  //   border: 2px solid orange;
  //   width: 3rem;
  //   height: 0.4rem;
  //   margin: 2.5rem auto 0.5rem;
  // }
`;

const LogisticsService = () => {
  return (
    <Section>
      <h3>Logistics Services</h3>
      <p className='section-details'>
        Solving your supply chain needs end to end taking the complexity out of
        container shipping. We are at the forefront of developing innovation.
      </p>
      <DivContainer>
        <div className='tab-group'>
          <button className='btn-left'>
            <img src={businessImg} alt='' />
            Business Logistics
          </button>
          <button className='btn'>
            <img src={militaryImg} alt='' />
            Military Logistics
          </button>
          <button className='btn-right'>
            <img src={eventImg} alt='' />
            Event Logistics
          </button>
        </div>
        <section className='logistics-carousel'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            loop={true}
            slidesPerView={3}
            speed={2000}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            <SwiperSlide>
              <div className='card'>
                <div className='card-img'>
                  <img src={truckImg} alt='' />
                </div>
                <h4>
                  {' '}
                  <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
                  Delivery{' '}
                </h4>
                <p>
                  We offer a Global Logistics Network with our Worldwide
                  offices.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <div className='card-img'>
                  <img src={shipImg} alt='' />
                </div>
                <h4>
                  {' '}
                  <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
                  Delivery{' '}
                </h4>
                <p>
                  We offer a Global Logistics Network with our Worldwide
                  offices.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <div className='card-img'>
                  <img src={airplaneImg} alt='' />
                </div>
                <h4>
                  {' '}
                  <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
                  Delivery{' '}
                </h4>
                <p>
                  We offer a Global Logistics Network with our Worldwide
                  offices.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <div className='card-img'>
                  <img src={truckImg} alt='' />
                </div>
                <h4>
                  {' '}
                  <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
                  Delivery{' '}
                </h4>
                <p>
                  We offer a Global Logistics Network with our Worldwide
                  offices.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <div className='card-img'>
                  <img src={shipImg} alt='' />
                </div>
                <h4>
                  {' '}
                  <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
                  Delivery{' '}
                </h4>
                <p>
                  We offer a Global Logistics Network with our Worldwide
                  offices.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card'>
                <div className='card-img'>
                  <img src={airplaneImg} alt='' />
                </div>
                <h4>
                  {' '}
                  <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
                  Delivery{' '}
                </h4>
                <p>
                  We offer a Global Logistics Network with our Worldwide
                  offices.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <div className='pagination'></div>
      </DivContainer>
    </Section>
  );
};

export default LogisticsService;

// import React from 'react';
// import styled from 'styled-components';
// import { DivContainer } from '../../styles/styles';
// import truckImg from '../../assets/truck-img.jpg'
// import shipImg from '../../assets/ship-cargo.jpg'
// import airplaneImg from '../../assets/plane-flying.jpg'
// import businessImg from '../../assets/icons/movers.svg'
// import eventImg from '../../assets/icons/reschedule-date.svg'
// import militaryImg from '../../assets/icons/truck-loading.svg'

// const Section = styled.section`
//   padding: 4rem 0rem;
//    background-color: #F8F9FB;
//   // background-color: ${({theme}) => theme.text_ashGrey};
//   overflow: hidden;

//   h3 {
//     text-align: center;
//     font-size: ${({theme}) => theme.text_h2};
//     color: ${({theme}) => theme.text_darkBlue};
//   }
//   .section-details {
//     max-width: 34rem;
//     width: 90%;
//     color: ${({theme}) => theme.text_darkBlue};
//     font-size: ${({theme}) => theme.text_p1};
//     text-align: center;
//     margin: 1rem auto;

//     @media (max-width: 500px) {
//       text-align: justify;
//     }
//   }
//   .tab-group {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 1.2rem;

//     button {
//       padding: 0.5rem 1rem;
//       font-size: clamp(0.68rem, 3vw, 0.75rem);
//       border: none;
//       background-color: ${({theme}) => theme.text_light};
//       margin: 0 0.1rem;
//       color: ${({theme}) => theme.text_darkBlue};
//       font-weight: 600;
//       display: flex;
//       align-items: center;
//       position: relative;
//       z-index: 3;

//       :hover {
//         background-color: ${({theme}) => theme.text_darkBlue};
//         color: ${({theme}) => theme.text_light};
//       }
//     }

//     img {
//       width: 1.4rem;
//       height: 1.4rem;
//       margin-right: .3rem;
//       filter: ${({theme}) => theme.icon_filter};
//     }
//     .btn-left {
//       border-top-left-radius: 0.85rem;
//     }
//     .btn-right {
//       border-top-right-radius: 0.85rem;
//     }
//   }
//   .logistics-carousel {
//     display: flex;
//     align-items: center;
//     gap: 1.4rem;

//     .card {
//       margin-top: 1rem;
//       color: ${({theme}) => theme.text_darkBlue};
//       background-color: ${({theme}) => theme.text_light};
//       border-bottom-left-radius: .8rem;
//       border-bottom-right-radius: .8rem;
//       box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.1);
//       z-index: 2;
//       position: relative;
//     }
//     h4 {
//       margin: 0.8rem 1.3rem 0rem;
//       font-size: ${({theme}) => theme.text_h3};
//       font-weight: 500;
//     }
//     p {
//       margin: 1.3rem;
//       font-size: ${({theme}) => theme.text_p1};
//     }
//     .card-num {
//       color: ${({theme}) => theme.text_orange};
//       font-weight: bold;
//       margin-right: 0.2rem;
//     }
//     .card-img {
//       height: 12rem;
//       position: relative;
//       z-index: 3;

//       &:after {
//         content: ' ';
//         position: absolute;
//         top: 0;
//         left: 0;
//         height: 100%;
//         width: 100%;
//       }
//       &:hover:after {
//         background-color: ${({theme}) => theme.text_blue_overlay};
//       }
//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//       }
//     }
//   }
//   .pagination {
//     border: 2px solid orange;
//     width: 3rem;
//     height: 0.4rem;
//     margin: 2.5rem auto 0.5rem;
//   }
// `;

// const LogisticsService = () => {
//   return (
//     <Section>
//       <h3>Logistics Services</h3>
//       <p className='section-details'>
//         Solving your supply chain needs end to end taking the complexity out of
//         container shipping. We are at the forefront of developing innovation.
//       </p>
//       <DivContainer>
//         <div className='tab-group'>
//           <button className='btn-left'>
//             <img src={businessImg} alt="" />
//             Business Logistics
//           </button>
//           <button className='btn'>
//             <img src={militaryImg} alt="" />
//             Military Logistics
//           </button>
//           <button className='btn-right'>
//             <img src={eventImg} alt="" />
//             Event Logistics
//           </button>
//         </div>
//         <section className='logistics-carousel'>
//           <div className='card'>
//             <div className='card-img'>
//               <img src={truckImg} alt="" />
//             </div>
//             <h4>
//               {' '}
//               <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
//               Delivery{' '}
//             </h4>
//             <p>
//               We offer a Global Logistics Network with our Worldwide offices.
//             </p>
//           </div>
//           <div className='card'>
//             <div className='card-img'>
//               <img src={shipImg} alt="" />
//             </div>
//             <h4>
//               {' '}
//               <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
//               Delivery{' '}
//             </h4>
//             <p>
//               We offer a Global Logistics Network with our Worldwide offices.
//             </p>
//           </div>
//           <div className='card'>
//             <div className='card-img'>
//               <img src={airplaneImg} alt="" />
//             </div>
//             <h4>
//               {' '}
//               <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
//               Delivery{' '}
//             </h4>
//             <p>
//               We offer a Global Logistics Network with our Worldwide offices.
//             </p>
//           </div>
//         </section>
//         <div className='pagination'></div>
//       </DivContainer>
//     </Section>
//   );
// };

// export default LogisticsService;
