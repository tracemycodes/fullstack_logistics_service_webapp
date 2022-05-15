import React from 'react'
import styled from 'styled-components'
import { Btn, DivContainer } from '../../styles/styles'
import landingImg1 from '../../assets/ship-container-harbor.jpg'

const CarouselDiv = styled.section`
  padding: 9.5rem 0rem 14.5rem;
  position: relative;
  border: 2px solid green;
  background-image: url(${landingImg1});
  background-size: cover;
  background-position: center;
  color: #fff;

  .overlay {
    position: absolute;
    content: " ";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.6);
  }

  h1 {
    font-size: 2.8rem;
    border: 2px solid red;
    color: #E1E1E1;
    position: relative;
    width: 30rem;
    z-index: 2;
  }
  
  p {
    margin: 1rem 0 2rem;
    position: relative;
    font-size: 1.25rem;
    color: #E1E1E1;
    z-index: 2;
  }
`

const LandingPage = () => {
  return (
    <CarouselDiv>
      <DivContainer>        
      <h1>Shipping Products Worldwide</h1>
      <p>with 100% Customer Satisfaction</p>
      <Btn>CONTACT US</Btn>
      </DivContainer>
      <div className="overlay">

      </div>
    </CarouselDiv>
  )
}

export default LandingPage
