import React from 'react';
import styled from 'styled-components';
import myimg from '../../assets/singapore-crane-shipping-cargo.jpg';
import { DivContainer } from '../../styles/styles';
import mapImg from '../../assets/11045.jpg'

const SmartSection = styled.section`
  width: 100%;
  position: relative;
  z-index: -1;

  .overlay-img{
  height: 24rem;
  background-image: url(${myimg});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: -2;

  h2 {
    color: #fff;
    position: absolute;
    font-size: 1.5rem;
    top: 2rem;
  }

  p {
    color: #e1e1e1;
    position: absolute;
    font-size: .9rem;
    top: 5rem;
    max-width: 67%;
    width: 30rem;
  }
  
  &:before {
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 39, 65, 0.8);
    position: absolute;
    z-index: 0;

  }

  @media (max-width: 767px) { 
      height: 206px;
    }
  
  }

  .map-div {
    height: 29rem;
    margin: 2rem auto 4rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  .custom-shape-divider-bottom-1652363935 {
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    z-index: -1;

    @media (max-width: 767px) {
      top: 6rem;
    }
  }

  .custom-shape-divider-bottom-1652363935 svg {
    position: relative;
    display: block;
    // width: calc(112% - 1.3px);
    width: calc(112% + 39rem);
    height: 306px;
    transform: rotateY(180deg);

    @media (max-width: 767px) {
      width: calc(147% + 1.3px);
      // height: 306px;
      height: 110px;
    }
  }

  .custom-shape-divider-bottom-1652363935 .shape-fill {
    fill: #ffffff;
  }

`;

const ShipSmart = () => {
  return (
    <SmartSection>
      <div className='overlay-img'>
        <DivContainer>
          <h2>Ship Smart with Transtics</h2>
          <p>
            Solving your supply chain needs from end to end, taking the
            complexity out of container shipping. We are at the forefront of
            developing innovative supply chain solutions
          </p>
        </DivContainer>
      </div>
      <DivContainer>
        <div className='map-div'>
          <img src={mapImg} alt="" />
          <div className='mini-map'></div>
        </div>
      </DivContainer>
      <div className='custom-shape-divider-bottom-1652363935'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          />
        </svg>
      </div>
    </SmartSection>
  );
};

export default ShipSmart;
