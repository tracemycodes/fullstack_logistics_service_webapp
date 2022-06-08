import React from 'react';
import styled from 'styled-components';
import { Btn, DivContainer } from '../../styles/styles';
import globeImg from '../../assets/31226.jpg'
import connectImg from '../../assets/hand-button.jpg'
import travelImg from '../../assets/icons/travel.svg'
import companyImg from '../../assets/icons/check-company.svg'
import portImg from '../../assets/icons/crane.svg'



const TrackShipSection = styled.section`
  width: 100%;
  overflow: hidden;
`;

const Banner = styled.div`
  height: 14.5rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.text_blue_overlay};
  background-image: url(${connectImg});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: -1;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.text_blue_overlay};
  }
  h2 {
    color: ${({theme}) => theme.text_light};
    width: 30rem;
    font-size: ${({theme}) => theme.text_h2};
    margin: 3.5rem 0;
    position: relative;
    z-index: 1;
  }
  
`;

const TrackBtn = styled(Btn)`
  display: block;
  margin: auto;
  margin-top: 1rem;

  @media (max-width: 690px) {
    display: inline;
    float: right;
    margin: unset;
  }
  @media (max-width: 374px) {
    display: block;
    float: unset;
    margin-top: 1rem;
    
  }
  
`;

const TrackSection = styled(DivContainer)`
  margin-top: -3.77rem;
  z-index: -1;
  position: relative;
  padding-bottom: 3.6rem;

  div {
    background-color: ${({theme}) => theme.text_light};
    padding: 1.25rem;
    font-weight: bold;
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
    box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.1);
    border-bottom: none;
    margin: auto;
    color: ${({theme}) => theme.text_darkBlue};
  }

  form {
    box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.1);
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    border-top: none;
    background-color: ${({theme}) => theme.text_light};
    color: ${({theme}) => theme.text_darkBlue};
    padding: 1.25rem;

    label {
      font-size: ${({theme}) => theme.text_p1};
      margin-right: 1rem;
    }
    input {
      width: 60%;
      background-color: ${({theme}) => theme.text_ashGrey};
      border: none;
      padding: 0.5rem;
      border-radius: 0.3rem;

      :focus {
        outline: 2px solid ${({theme}) => theme.text_orange};
      }
      @media (max-width: 374px) {
      width: 100%;
      margin-top: 1rem;  
      }
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin: 4.5rem 0;

    
    @media (max-width: 898px) {
      display: block;  
      
      .article-img {
        max-width: 30rem;
        width: 75%;
        margin: 0 auto 2rem;
      }
    }

    article {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .article-text {
      padding-left: 2.5rem;
      color: rgb(0, 39, 65);
      h2 {
        font-size: ${({theme}) => theme.text_h2};
      }
      h5 {
        margin: 1rem 0;
        font-size: ${({theme}) => theme.text_h3};
      }
      p {
        font-size: ${({theme}) => theme.text_p1};
        margin-bottom: 1.5rem;
      }
      @media (max-width: 898px) {
      padding: unset;
      max-width: 36rem;
      width: 100%;
      margin: auto;
      text-align: center;
      }
    }
  }
  .statistics {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: unset;
    margin: unset;
    padding: unset;
    box-shadow: unset;
    
    > div {
      position: relative;
      border-radius: unset;
      width: unset;
      margin: unset;
      padding: unset;
      box-shadow: unset;
      display: flex;

      img {
        width: 3.5rem;
        filter: ${({theme}) => theme.icon_filter};
        margin-right: .5rem;

        @media (max-width: 726px) {
          width: 3rem;
          height: 3rem;
        }
        @media (max-width: 486px) {
          width: 1.7rem;
          height: 1.7rem;
        }
        @media (max-width: 300px) {
          width: 1rem;
          height: 1rem;
        }
      }

      .count {
        margin: unset;
        padding: unset;
        display: block;
        width: 100%;
        border-radius: unset;
        box-shadow: unset;
        p {
          font-size: clamp(0.45rem, 3vw, 0.75rem);
        }
        .count-num {
          font-size: clamp(2rem, 2.5vw, 3rem);
          text-align: center;

          @media (max-width: 486px) {
            font-size: 1.7rem;
          }
          @media (max-width: 300px) {
          font-size: 1rem;
         }

        }
        .count-text {
          
          @media (max-width: 726px) {
          display: block;
          position: absolute;
          width: 300%;
          bottom: -1.75rem; 
          left: 0;
        }
         @media (max-width: 486px) {
           left: 0;
           bottom: -1.45rem; 
           font-size: 0.6rem;
         }
         @media (max-width: 300px) {
          font-size: .46rem;
         }
        }
      }
    }
  }
`;

const TrackShipment = () => {
  return (
    <TrackShipSection>
      <Banner>
        <DivContainer>
          <h2>Track your shipment with our latest shipment Tracker</h2>
        </DivContainer>
      </Banner>
      <TrackSection>
        <div>
          <p>Track My Shipment</p>
        </div>
        <form>
          <label htmlFor='booking-no'>Booking no, Containers no or B/L</label>
          <input type='text' name='booking-no' id='tack-no' />
          <TrackBtn type='submit'>Track Shipment</TrackBtn>
        </form>
        <section>
          <article className='article-img'>
            <img src={globeImg} alt="" />
          </article>
          <article className='article-text'>
            <h2>Global Leader of the Logistics</h2>
            <h5>
              All our efforts and investments are geared towards offering better
              solutions.
            </h5>
            <p>
              Solving Your supply chain needs from end to end, taking the
              complexity out of container shipping. We are at the forefront of
              developing innovative supply chain solutions.
            </p>
            <Btn>More About Us</Btn>
          </article>
        </section>
        <div className='statistics'>
          <div>
            <img src={companyImg} alt="" />
            <div className='count'>
              <p className='count-num'>217</p>
              <p className='count-text'>COMPANY ESTABLISHED</p>
            </div>
          </div>
          <div>
            <img src={travelImg} alt="" />
            <div className='count'>
              <p className='count-num'>217</p>
              <p className='count-text'>C0UNTRIES SERVED</p>
            </div>
          </div>
          <div>
            <img src={portImg} alt="" />
            <div className='count'>
              <p className='count-num'>217</p>
              <p className='count-text'>PORTS SERVED</p>
            </div>
          </div>
        </div>
      </TrackSection>
    </TrackShipSection>
  );
};

export default TrackShipment;
