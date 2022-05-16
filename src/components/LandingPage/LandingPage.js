import React from 'react'
import styled from 'styled-components'
import { Btn, DivContainer } from '../../styles/styles'
import landingImg1 from '../../assets/ship-container-harbor.jpg'
import landingImg2 from '../../assets/industrial-port-container-yard.jpg'

const CarouselDiv = styled.section`
  padding: 9.5rem 0rem 14.5rem;
  position: relative;
  background-image: url(${landingImg2});
  background-size: cover;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  z-index: -1;
  
  &:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.dark_overlay};
  }

  h1 {
    font-size: ${({theme}) => theme.text_h1};
    line-height: ${({theme}) => theme.lineHeight_h1};
    color: ${({theme}) => theme.text_white};
    position: relative;
    max-width: 30rem;
    width: 100%;
    z-index: 2;
  }
  
  p {
    margin: 1rem 0 2rem;
    position: relative;
    font-size: ${({theme}) => theme.text_h4};
    color: ${({theme}) => theme.text_white};
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
    </CarouselDiv>
  )
}

export default LandingPage
