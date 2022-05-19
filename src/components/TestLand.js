import React, { useRef, useState } from 'react'



// Style component
import styled from 'styled-components'
import { Btn, DivContainer } from '../styles/styles'
import landingImg2 from '../assets/industrial-port-container-yard.jpg'




const CarouselDiv = styled.section`
  padding: 9.5rem 0rem 14.5rem;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid green;
  top: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 1;
  
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
    color: black;
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



const TestLand = () => {
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

export default TestLand

