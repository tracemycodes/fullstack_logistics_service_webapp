import React from 'react'
import styled from 'styled-components'
import { Btn, DivContainer } from '../../styles/styles'

const CarouselDiv = styled.section`
  padding: 9.5rem 0rem 14.5rem;
  border: 2px solid green;
  background-color: rgb(19, 30, 239, 0.7);
  color: #fff;

  h1 {
    font-size: 2.8rem;
    border: 2px solid red;
    width: 30rem;
  }

  p {
    margin: 1rem 0 2rem;
    font-size: 1.25rem
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
