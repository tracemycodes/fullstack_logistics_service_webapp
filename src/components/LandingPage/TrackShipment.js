import React from 'react';
import styled from 'styled-components';
import { Btn, DivContainer } from '../../styles/styles';

const Banner = styled.div`
  height: 14.5rem;
  width: 100%;
  border: 2px solid blue;
  position: relative;
  // background-color: green;
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
`

const TrackSection = styled(DivContainer)`
  margin-top: -4rem;
  z-index: 2;
  position: relative;

  div {
    background-color: #fff;
    padding: 1.25rem;
    // border: 2px solid purple;
    font-weight: bold;
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: .8rem;
    border-top-left-radius: .8rem;
    margin: auto;
    color: rgb(0, 39, 65);
  }
  
  form {
    border: 2px solid blue;
    margin-bottom: 10rem;
    border-bottom-right-radius: .8rem;
    border-bottom-left-radius: .8rem;
    background-color: #fff;
    color: rgb(0, 39, 65);
    padding: 1.25rem;

    label {
      font-size: .9rem;
      margin-right: 1rem;
    }
    input {
      width: 60%;
      background-color: #e8ebf2;
      border: none;
      padding: .5rem;
      border-radius: .3rem;
      
      :focus {
        outline: 2px solid #002741;
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
          <p>

          Track My Shipment
          </p>
        </div>
        <form>
          <label htmlFor="booking-no">Booking no, Containers no or B/L</label>
          <input type="text" name="booking-no" id="tack-no" />
          <TrackBtn type='submit'>Track Shipment</TrackBtn>
        </form>
        <section>
          
        </section>
      </TrackSection>
    </>
  );
};

export default TrackShipment;
