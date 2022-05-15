import React from 'react';
import styled from 'styled-components';
import { Btn, DivContainer } from '../../styles/styles';

const NavBar = styled.header`
  background-color: #002741;
`;

const NavHeader = styled(DivContainer)`
  padding: 0.9rem 0.5rem;
  // font-size: .75rem;
  font-size: clamp(0.5rem, 3vw, 0.75rem);
  display: flex;
  justify-content: space-between;
  color: #93afc1;

  a {
    color: #93afc1;
    margin-right: 0.9rem;
    font-size: 0.75rem;
    text-decoration: none;
  }
  span {
    margin-left: 0.9rem;
  }
`;

const NavBody = styled(DivContainer)`
  padding: 0.75rem 0.5rem;
  // font-size: .9rem;
  font-size: clamp(0.5rem, 3vw, 0.9rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #93afc1;

  .product-logo {
    border: 2px solid green;
    width: 5rem;
    height: 2rem;
  }

  .nav-items {    
    @media (max-width: 765px) {
    display: none;
    }
  }

  .nav-hamburger {
    display: flex;
    flex-direction: column;
    div {
      border: 2px solid black;
      width: 2rem;
      margin: .17rem;
    }
  }

  div {
    display: flex;
    align-items: center;

    ul {
      display: flex;

      li {
        list-style: none;
        margin-left: 1.4rem;
        // font-size: .8rem;

        font-size: clamp(0.65rem, 2vw, 0.8rem);

        
      }
    }
  }
`;

const NavBtn = styled(Btn)`
  margin-left: 3.5rem;
  @media (max-width: 793px) {
    // border: 2px solid black;
    margin-left: 2rem;
  }
`;

const Header = () => {
  return (
    <nav>
      <NavBar>
        <NavHeader>
          <div>
            <a href='mailto:'>mail@example.com</a>
            <a href='tel:+'>+145 (2466) 888</a>
          </div>
          <div>
            <span>ENG</span>
            <span>FR</span>
          </div>
        </NavHeader>
      </NavBar>
      <NavBody>
        <div className='product-logo'></div>
        <div className="nav-items">
          <ul>
            <li>HOME</li>
            <li>SERVICES</li>
            <li>COMPANY</li>
            <li>PAGES</li>
            <li>NEWS</li>
            <li>CONTACT</li>
            <li>O</li>
          </ul>
          <NavBtn>GET QUOTE</NavBtn>
        </div>
        <div className="nav-hamburger">
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </NavBody>
      
    </nav>
  );
};

export default Header;
