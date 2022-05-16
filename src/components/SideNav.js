import React from 'react'
import styled, { css } from 'styled-components'


const SideNavBar = styled.section`
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  transition: transform ease-in .8s;
  
  ${({toggleNav}) => toggleNav && css`
  background-color: ${({theme}) => theme.dark_overlay};
  `}

  nav {
  max-width: 20rem;
  width: 70%;
  height: 100%;
  border: 3px solid red;
  transform: translateX(-100%);
  transition: transform ease-in .8s;
  z.index: 444;
  
  ${({toggleNav}) => toggleNav && css`
  background-color: yellow;
  transform: translateX(0%);
  `}
  }
`

const SideNav = ({ toggleNav }) => {
  return (
    <SideNavBar toggleNav={toggleNav}>
      <nav>

      </nav>
    </SideNavBar>
  )
}

export default SideNav
