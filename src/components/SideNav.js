import React from 'react'
import styled from 'styled-components'


const SideNavBar = styled.nav`
  position: absolute;
  max-width: 20rem;
  width: 70%;
  left: 0;
  top: 0;
  height: 100vh;
  border: 3px solid red;
  z.index: 4;
`

const SideNav = () => {
  return (
    <SideNavBar>
      
    </SideNavBar>
  )
}

export default SideNav
