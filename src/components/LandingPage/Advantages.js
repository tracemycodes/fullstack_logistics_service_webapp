import React from 'react'
import styled from 'styled-components'
import { DivContainer } from '../../styles/styles'
import habourImg from '../../assets/habour-img.jpg'
import wareHouseImg from '../../assets/icons/forklift.svg'
import rescheduleImg from '../../assets/icons/road-map.svg'
import customerImg from '../../assets/icons/female-services-support.svg'


const MeritSection = styled.section`
  background-image: url(${habourImg});
  background-size: cover;
  background-position: center;
  
  .carousel {
    border: 1px solid rgb(0, 39, 65, 0.95);
    background-color: rgb(0, 39, 65, 0.95);
    padding: 0 2.4rem 1rem;
    max-width: 29rem;
    width: 100%;
    height: 100%;
    color: #f8f9fb;

    @media (max-width: 350px) {
      padding: 0 1.5rem 1rem;
    }

    h2 {
      font-size: ${({theme}) => theme.text_h1};
      margin: 3.5rem 0;
      @media (max-width: 310px) {
        font-size: 1.3rem;
        margin: 2rem 0;
      }
    }

    article {
      margin-bottom: 3.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      position: relative;

      @media (max-width: 330px) {
        margin-bottom: 6rem;
        gap: .5rem;
      }
      
      .icon {
        background-color: ${({theme}) => theme.text_orange};
        border-radius: 50%;

        img {
        width: 30px;
        height: 30px;
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(207deg) brightness(102%) contrast(102%);
        margin: .6rem;

        @media (max-width: 330px) {
          width: 20px;
          height: 20px;
          }
        }
        
      }
      h3 {
        margin-bottom: .6rem;
        font-size: 1rem;
      }
      p {
        font-size: .8rem;
        @media (max-width: 330px) {
          position: absolute;
          width: 100%;
          bottom: -4rem;
          left: 0;
        }
      }
    }
  }
`

const Advantages = () => {
  return (
    <MeritSection>
      <DivContainer>
        <div className="carousel">
          <h2>Our Advantages</h2>
          <article>
            <div className='icon'>
              <img src={wareHouseImg} alt="" />
            </div>
            <div className="article-text">
              <h3>Warehouse Facility</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!</p>
            </div>
          </article>
          <article>
            <div className='icon'>
              <img src={customerImg} alt="" />
            </div>
            <div className="article-text">
              <h3>Customer Satisfaction</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!</p>
            </div>
          </article>
          <article>
            <div className='icon'>
              <img src={rescheduleImg} alt="" />
            </div>
            <div className="article-text">
              <h3>Real-time Cargo Tracking</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!</p>
            </div>
          </article>
        </div>
      </DivContainer>
    </MeritSection>
  )
}

export default Advantages
