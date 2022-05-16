import React from 'react';
import styled from 'styled-components';
import { Btn, DivContainer } from '../../styles/styles';

const Banner = styled.div`
  height: 14.5rem;
  width: 100%;
  border: 2px solid blue;
  position: relative;
  // background-color: green;
  z-index: -1;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(0, 39, 65, 0.8);
  }
  h2 {
    color: #fff;
    width: 30rem;
    font-size: 1.8rem;
    margin: 3.5rem 0;
  }
  
`;

const TrackBtn = styled(Btn)`
  display: block;
  margin: auto;
  margin-top: 1rem;
`;

const TrackSection = styled(DivContainer)`
  margin-top: -4rem;
  z-index: -1;
  position: relative;
  padding-bottom: 3.6rem;

  div {
    background-color: #fff;
    padding: 1.25rem;
    // border: 2px solid purple;
    font-weight: bold;
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
    margin: auto;
    color: rgb(0, 39, 65);
  }

  form {
    border: 2px solid blue;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    background-color: #fff;
    color: rgb(0, 39, 65);
    padding: 1.25rem;

    label {
      font-size: 0.9rem;
      margin-right: 1rem;
    }
    input {
      width: 60%;
      background-color: #e8ebf2;
      border: none;
      padding: 0.5rem;
      border-radius: 0.3rem;

      :focus {
        outline: 2px solid #002741;
      }
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin: 4.5rem 0;

    article {
      border: 2px solid green;
    }
    .article-text {
      padding-left: 2.5rem;
      color: rgb(0, 39, 65);
      h2 {
        font-size: 1.8rem;
      }
      h5 {
        margin: 1rem 0;
        font-size: 0.95rem;
      }
      p {
        font-size: 0.9rem;
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
          font-size: 0.75rem;
        }
        .count-num {
          font-size: 3rem;
        }
      }
    }
  }
`;

const TrackShipment = () => {
  return (
    <>
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
          <article></article>
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
    </>
  );
};

export default TrackShipment;
