import React from 'react'
import styled from 'styled-components'
import { Btn, DivContainer } from '../../styles/styles'

const NavBar = styled.header`
  

  background-color: #002741;
  

`

const NavHeader = styled( DivContainer )`
padding: .9rem .5rem;
font-size: .75rem;
display: flex;
justify-content: space-between;
color: #93AFC1;
  
  a {
    color: #93AFC1;
    margin-right: .9rem;
    font-size: .75rem;
    text-decoration: none;

  }
  span {
    margin-left: .9rem;
  }
`

const NavBody = styled( DivContainer )`
  padding: .75rem .5rem;
  font-size: .9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #93AFC1;

  .product-logo {
    border: 2px solid green;
    width: 5rem;
    height: 2rem;
  }
  
  div {
    display: flex;
    align-items: center;
    
    ul {
      display: flex;

      li {
        list-style: none;
        margin-left: 1.4rem;
        font-size: .8rem;
      }

    }
  }
  
`

const NavBtn = styled( Btn )`
  margin-left: 3.5rem;
  
`

const Header = () => {

  return (
    <nav>
        <NavBar>
        <NavHeader>          
          <div>
            <a href="mailto:">mail@example.com</a>
            <a href="tel:+">+145 (2466) 888</a>            
          </div>
          <div>
            <span>ENG</span>           
            <span>FR</span>           
          </div>
        </NavHeader>
      </NavBar>
        <NavBody>
          <div className="product-logo">

          </div>
          <div>
            <ul>
              <li>
                HOME
              </li>
              <li>
                SERVICES
              </li>
              <li>
                COMPANY
              </li>
              <li>
                PAGES
              </li>
              <li>
                NEWS
              </li>
              <li>
                CONTACT
              </li>
              <li>
                O
              </li>
            </ul>
            <NavBtn>GET QUOTE</NavBtn>
          </div>
        </NavBody>
      </nav>
  )
}

export default Header
