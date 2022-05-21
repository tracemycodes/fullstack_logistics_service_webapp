import React from 'react'
import styled from 'styled-components'
import { DivContainer } from '../../styles/styles'


const CarouselSection = styled(DivContainer)`
// overflow-y: hidden;
margin: auto;
border: 2px solid red;
`

const NewsSection = styled.section`
  color: ${({theme}) => theme.text_darkBlue};
  text-align: center;
  h2 {
    margin: 6rem 0 1rem;
  }
  p {
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 35rem;
  }
  .news-scroll {
  overflow-x: scroll;
  overflow-y: hidden;
    z-index: 2;
    position: relative;
    height: 100%;
    
  }
  .news-bar {
    width: 788px;
    border: 2px solid blue;
    display: block;

      // height: 19rem;
    // display: flex;
    // // gap: 2rem;
    // align-items: center;
    // justify-content: space-between;

    > * + *{
      margin-left: 1.2rem;
    }

    article {
      width: 15.5rem;
      height: 19rem;
      border: 2px solid green;
      text-align: left;
      display: inline-block;
      .news-img {
        height: 10rem;
        border: 2px solid red;
        margin-bottom: 1.5rem;
      }
      h3{
        margin: 0 .5rem;
        position: relative;
        &:before {
          content: " ";
          position: absolute;
          width: 2.7rem;
          border: 1.8px solid red;
          border-radius: 30px;
          bottom: -0.4rem;
          left: 0;
        }
      }
      p {
        margin: 2rem .5rem 1rem;
      }
    }
  }
`

const RecentNews = () => {
  return (
    <NewsSection>
      <CarouselSection>
        <h2>Recent News</h2>
        <p>Solving your supply chain needs from end to end, taking the complexity out of container shipping We are the forefront of developing innovation.</p>
        
        <div className="news-scroll">
        <div className="news-bar">
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
        
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
       
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
        </div>
        </div>
      </CarouselSection>
    </NewsSection>
  )
}

export default RecentNews
