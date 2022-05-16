import React from 'react'
import styled from 'styled-components'
import { DivContainer } from '../../styles/styles'


const ReviewSection = styled.section`
  border: 2px solid black;
  padding-bottom: 5rem; 

  .banner-img {
    border: 2px solid purple;
    height: 21.6rem;
    text-align: center;
    position: relative;
    z-index: -2;

    :before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: yellow;
    }
    h2 {
      margin-top: 4rem;
      font-size: 1.75rem;      
      color: rgb(0, 39, 65);
    }

  }

`

const ReviewContainer = styled(DivContainer)`
  margin-top: -12rem;
  // z-index: -1;
  .carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .carousel-item {
      border: 2px solid orange;
      padding: 1.5rem;
      width: 21rem;
      font-size: .9rem;
      background-color: #fff;
      border-radius: .3rem;
      position: relative;
      color: rgb(0, 39, 65);
      z-index: -1;

      .ques-icon {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid black;
        top: -1rem;
        right: 1rem;
      }

      .rating {
        height: 1rem;
        width: 5rem;
        border: 2px solid brown;
        margin: 1rem 0 .8rem;
      }
      .user-info {
        margin-top: 1rem;
        display: flex;

        .user-img {
          width: 2.3rem;
          height: 2.3rem;
          border: 2px solid orange;
          border-radius: 50%;
          margin-right: 1rem;
        }
        h4 {
          font-size: 1rem;
          margin-bottom: .16rem;
        }
        p {
          font-size: .8rem;
        }
      }
    }
  }
`

const ClientReview = () => {
  return (
    <ReviewSection>
      <div className="banner-img">
        <h2>Client Review</h2>
      </div>
      <ReviewContainer>
        <div className="carousel">
          <div className="carousel-item">
            <div className="ques-icon"></div>
            <div className="rating"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam ut numquam debitis facere, magnam repellendus voluptates corporis quidem doloremque! Provident, facere quaerat.</p>
            <div className="user-info">
              <div className="user-img"></div>
              <div className="user-details">
                <h4>David Huxham</h4>
                <p>Founder, Huxham Inc</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="ques-icon"></div>
            <div className="rating"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam ut numquam debitis facere, magnam repellendus voluptates corporis quidem doloremque! Provident, facere quaerat.</p>
            <div className="user-info">
              <div className="user-img"></div>
              <div className="user-details">
                <h4>Rebecca Moore</h4>
                <p>Founder, Huxham Inc</p>
              </div>
            </div>
          </div>
        </div>
      </ReviewContainer>
    </ReviewSection>
  )
}

export default ClientReview
