import React from 'react'
import styled from 'styled-components'

const SmartSection = styled.section`
  width: 100%;
  height: 30rem;
  border: 2px solid red;
  position: relative;
  background-color: blue;


  .custom-shape-divider-bottom-1652363935 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
 }

.custom-shape-divider-bottom-1652363935 svg {
    position: relative;
    display: block;
    width: calc(112% + 1.3px);
    height: 306px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1652363935 .shape-fill {
    fill: #FFFFFF;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom-1652363935 svg {
        width: calc(147% + 1.3px);
        height: 306px;
    }
}
`

const ShipSmart = () => {
  return (
    <SmartSection>
     <div className="custom-shape-divider-bottom-1652363935">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
  </svg>
</div>

    </SmartSection>
  )
}

export default ShipSmart
