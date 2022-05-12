import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';

const Banner = styled.div`
  height: 14.5rem;
  width: 100%;
  border: 2px solid blue;
  position: relative;
  background-color: green;
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

const TrackSection = styled(DivContainer)`
  margin-top: -4rem;
  
`;

const TrackShipment = () => {
  return (
    <>
      <Banner>
        <DivContainer>
          <h2>Track your shipment with our latest shipment Tracker</h2>
        </DivContainer>
      </Banner>
      <TrackSection></TrackSection>
    </>
  );
};

export default TrackShipment;
