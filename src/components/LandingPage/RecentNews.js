import React from 'react'
import styled from 'styled-components'
import { DivContainer } from '../../styles/styles'

const NewsSection = styled.section`

`

const RecentNews = () => {
  return (
    <NewsSection>
      <DivContainer>
        <h2>Recent News</h2>
        <p>Solving your supply chain needs from end to end, taking the complexity out of container shipping We are the forefront of developing innovation.</p>
        <div className="news-bar">
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
        </div>
        <div className="news-bar">
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
        </div>
        <div className="news-bar">
          <article>
            <div className="news-img"></div>
            <h3>Denso invests $10mn in india distribution</h3>
            <p className="news-text">By HARRY MENEAR - Mar 16, 2021 - 9:00AM</p>
          </article>
        </div>
      </DivContainer>
    </NewsSection>
  )
}

export default RecentNews
