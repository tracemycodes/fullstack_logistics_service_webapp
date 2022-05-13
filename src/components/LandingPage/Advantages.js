import React from 'react'
import styled from 'styled-components'
import { DivContainer } from '../../styles/styles'


const MeritSection = styled.section`
  border: 2px solid green;
  .carousel {
    background-color: rgb(0, 39, 65, 0.8);
    padding: 0 2.4rem 1rem;
    max-width: 29rem;
    width: 100%;
    border: 1px solid blue;
    color: #f8f9fb;

    h2 {
      font-size: 1.8rem;
      margin: 3.5rem 0;
    }

    article {
      margin-bottom: 3.4rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      .icon {
        width: 7rem;
        height: 3rem;
        border: 2px solid green;

      }
      h3 {
        margin-bottom: .6rem;
        font-size: 1rem;
      }
      p {
        font-size: .8rem;
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
            <div className='icon'></div>
            <div className="article-text">
              <h3>Warehouse Facility</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!</p>
            </div>
          </article>
          <article>
            <div className='icon'></div>
            <div className="article-text">
              <h3>Customer Satisfaction</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia exercitationem vitae, veritatis quidem velit!</p>
            </div>
          </article>
          <article>
            <div className='icon'></div>
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
