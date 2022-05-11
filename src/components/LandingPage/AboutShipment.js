import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';

const AboutLogistics = styled.section`
  border: 2px solid yellow;
  padding: 4rem 0;
  text-align: center;

  h5 {
    font-size: 0.7rem;
    color: #ec0101;
  }
  h3 {
    font-size: 1.8rem;
    width: 22rem;
    color: #002741;
    margin: 0rem auto 0.8rem;
    border: 2px solid purple;
  }

  p {
    margin: 0 9rem;
    color: #002741;
    border: 2px solid pink;
    font-size: 0.85rem;
  }
  .about-carousel {
    border: 2px solid red;
    padding: 0.5rem 2.5rem;
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    .icon {
      border: 2px solid orange;
      width: 2.5rem;
      height: 2.8rem;
    }
    h4 {
      margin-top: 1rem;
      color: #002741;
      font-weight: bold;
    }
    p {
      margin: unset;
      margin: 0;
      color: #002741;
      border: 2px solid black;
      margin: 1.2rem 0;
    }
    a {
      text-decoration: none;
      color: #ec0101;
      font-size: 0.8rem;
      font-weight: bold;
    }
    
  }
  .dots {
      border: 2px solid green;
      width: 4rem;
      padding: .3rem;
      margin: 1rem;
    }
`;

const AboutShipment = () => {
  return (
    <AboutLogistics>
      <DivContainer>
        <h5>TRANSTICS SHIPPING CORP</h5>
        <h3>Taking care of you and your business all the way</h3>
        <p>
          Solving your supply chain needs from end to end taking the complexity
          out of container shipping. We are at the forefront of developing
          innovation
        </p>
        <div className='about-carousel'>
          <article>
            <div className='icon'></div>
            <h4>Secured Containers</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              eius? Natus magni ab dignissimos officiis. Amet nam ad odio id
              fugiat voluptatum?
            </p>
            <a href='#'>Read More</a>
          </article>
          <article>
            <div className='icon'></div>
            <h4>Modern Vessels</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              eius? Natus magni ab dignissimos officiis. Amet nam ad odio id
              fugiat voluptatum?
            </p>
            <a href='#'>Read More</a>
          </article>
        </div>
      </DivContainer>
        <div className="dots"></div>
    </AboutLogistics>
  );
};

export default AboutShipment;
