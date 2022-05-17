import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';
import containerImg from '../../assets/icons/cargo-container-crane.svg'
import shipmentImg  from '../../assets/icons/cruise.svg'

const AboutLogistics = styled.section`
  padding: 4rem 0;
  color: ${({theme}) => theme.text_darkBlue};
  text-align: center;
  width: 100%;
  border: 2px solid red;
  overflow: hidden;

  h5 {
    font-size: ${({theme}) => theme.text_h5};
    color: ${({theme}) => theme.text_orange};
    margin-bottom: .4rem;
  }
  h3 {
    font-size: ${({theme}) => theme.text_h2};
    max-width: 22rem;
    width: 100%;
    color: ${({theme}) => theme.text_darkBlue};
    margin: 0rem auto 0.8rem;
  }

  p {
    margin: 0 auto;
    max-width: 30rem;
    width: 100%
    color: #306587;
    font-size: ${({theme}) => theme.text_p1};
    text-align: justify;

  }
  .about-carousel {
    padding: 0.5rem 2.5rem;
    margin-top: 2rem;
    display: flex;
    gap: 2rem;

    article {
      margin-top: 1rem;
    }
    .icon {
      width: 3.3rem;
      margin: auto;
      height: 3.3rem;
    }
    h4 {
      margin-top: 1rem;
      color: #002741;
      font-weight: bold;
    }
    p {
      margin: unset;
      margin: 0;
      text-align: center;
      margin: 1.2rem 0;
      font-size: ${({theme}) => theme.text_p1};
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
            <div className='icon'>
              <img src={containerImg} alt="logo"  />
            </div>
            <h4>Secured Containers</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              eius? Natus magni ab dignissimos officiis. Amet nam ad odio id
              fugiat voluptatum?
            </p>
            <a href='#'>Read More</a>
          </article>
          <article>
            <div className='icon'>
              <img src={shipmentImg} alt="" />
            </div>
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
