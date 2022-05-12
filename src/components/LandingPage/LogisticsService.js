import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';

const Section = styled.section`
  padding: 4rem 0rem;
  border: 1px solid salmon;
  //  background-color: #F8F9FB;
  background-color: #e8ebf2;

  h3 {
    text-align: center;
    font-size: 1.8rem;
  }
  .section-details {
    border: 2px solid green;
    width: 34rem;
    font-size: 0.85rem;
    text-align: center;
    margin: 1rem auto;
  }
  .tab-group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.2rem;

    button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: #fff;
      margin: 0 0.1rem;
      color: #002741;
      font-weight: 600;

      &: hover {
        background-color: #002741;
        color: #fff;
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
    border: 2px solid red;
    display: flex;
    align-items: center;
    gap: 1.4rem;

    .card {
      border: 2px solid blue;
      margin-top: 1rem;
      color: #002741;
      border-bottom-left-radius: .8rem;
      border-bottom-right-radius: .8rem;
    }
    h4 {
      margin: 0.8rem 1.3rem 0rem;
      font-size: 1rem;
      font-weight: 500;
    }
    p {
      margin: 1.3rem;
      font-size: 0.83rem;
    }
    .card-num {
      color: #ec0101;
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
        background-color: rgb(0, 39, 65, 0.8);
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
