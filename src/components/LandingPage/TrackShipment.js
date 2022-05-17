import React from 'react';
import styled from 'styled-components';
import { Btn, DivContainer } from '../../styles/styles';
import globeImg from '../../assets/31226.jpg'


const TrackShipSection = styled.section`
  width: 100%;
  border: 2px solid purple;
  overflow: hidden;
`;

const Banner = styled.div`
  height: 14.5rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.text_blue_overlay};
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
  margin-top: -4rem;
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
    margin: auto;
    color: ${({theme}) => theme.text_darkBlue};
  }

  form {
    border: 2px solid blue;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
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
    }
  }
  .statistics {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: unset;
    margin: unset;
    padding: unset;

    > div {
      border-radius: unset;
      width: unset;
      margin: unset;
      padding: unset;
      .count {
        margin: unset;
        padding: unset;
        display: block;
        width: 100%;
        border-radius: unset;
        border: 2px solid red;
        p {
          font-size: clamp(0.35rem, 2.5vw, 0.75rem);
        }
        .count-num {
          font-size: clamp(2rem, 3vw, 3rem);
          text-align: center;
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
          <article>
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
            <div className='count'>
              <p className='count-num'>217</p>
              <p>PORTS SERVED</p>
            </div>
          </div>
          <div>
            <div className='count'>
              <p className='count-num'>217</p>
              <p>PORTS SERVED</p>
            </div>
          </div>
          <div>
            <div className='count'>
              <p className='count-num'>217</p>
              <p>PORTS SERVED</p>
            </div>
          </div>
        </div>
      </TrackSection>
    </TrackShipSection>
  );
};

export default TrackShipment;
