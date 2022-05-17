import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';

const Section = styled.section`
  padding: 4rem 0rem;
  //  background-color: #F8F9FB;
  background-color: ${({theme}) => theme.text_ashGrey};
  border: 2px solid green;
  overflow: hidden;

  h3 {
    text-align: center;
    font-size: ${({theme}) => theme.text_h2};
    color: ${({theme}) => theme.text_darkBlue};
  }
  .section-details {
    max-width: 34rem;
    width: 90%;
    color: ${({theme}) => theme.text_darkBlue};
    font-size: ${({theme}) => theme.text_p1};
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
      background-color: ${({theme}) => theme.text_light};      
      margin: 0 0.1rem;
      color: ${({theme}) => theme.text_darkBlue};
      font-weight: 600;

      &:hover {
        background-color: ${({theme}) => theme.text_darkBlue};
        color: ${({theme}) => theme.text_light};
      }
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
      margin-top: 1rem;
      color: ${({theme}) => theme.text_darkBlue};
      background-color: ${({theme}) => theme.text_light};
      border: 2px solid green;
      border-bottom-left-radius: .8rem;
      border-bottom-right-radius: .8rem;
    }
    h4 {
      margin: 0.8rem 1.3rem 0rem;
      font-size: ${({theme}) => theme.text_h3};
      font-weight: 500;
    }
    p {
      margin: 1.3rem;
      font-size: ${({theme}) => theme.text_p1};
    }
    .card-num {
      color: ${({theme}) => theme.text_orange};
      font-weight: bold;
      margin-right: 0.2rem;
    }
    .card-img {
      height: 12rem;
      padding: 0.1rem;
      position: relative;

      &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      :hover:after {
        background-color: ${({theme}) => theme.text_blue_overlay};
      }
    }
  }
  .pagination {
    border: 2px solid orange;
    width: 3rem;
    height: 0.4rem;
    margin: 2.5rem auto 0.5rem;
  }
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
          <button className='btn-left'>Business Logistics</button>
          <button className='btn'>Military Logistics</button>
          <button className='btn-right'>Event Logistics</button>
        </div>
        <section className='logistics-carousel'>
          <div className='card'>
            <div className='card-img'></div>
            <h4>
              {' '}
              <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
              Delivery{' '}
            </h4>
            <p>
              We offer a Global Logistics Network with our Worldwide offices.
            </p>
          </div>
          <div className='card'>
            <div className='card-img'></div>
            <h4>
              {' '}
              <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
              Delivery{' '}
            </h4>
            <p>
              We offer a Global Logistics Network with our Worldwide offices.
            </p>
          </div>
          <div className='card'>
            <div className='card-img'></div>
            <h4>
              {' '}
              <span className='card-num'>01.</span> <strong>Truck </strong>{' '}
              Delivery{' '}
            </h4>
            <p>
              We offer a Global Logistics Network with our Worldwide offices.
            </p>
          </div>
        </section>
        <div className='pagination'></div>
      </DivContainer>
    </Section>
  );
};

export default LogisticsService;
