import React from 'react';
import styled, { css } from 'styled-components';
import { Btn } from '../styles/styles';

const SideNavBar = styled.section`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  transition: background-color ease-in 0.8s;
  
  ${({ toggleNav }) =>
    toggleNav &&
    css`
      background-color: ${({ theme }) => theme.dark_overlay};
      z-index: 5;
      `}

  nav {
    max-width: 20rem;
    width: 70%;
    height: 100%;
    background-color: rgb(0, 39, 65, 0.95);
    transform: translateX(-100%);
    transition: transform ease-in 0.8s;
    display: flex;
    flex-direction: column;

    ${({ toggleNav }) =>
      toggleNav &&
      css`
        background-color: rgb(0, 39, 65);
        transform: translateX(0%);
      `}

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      margin-top: 25%;
      border-top: 2px solid ${({theme}) => theme.text_white};   

      
      li {
        list-style: none;
        padding: 1rem;
        border-bottom: 2px solid ${({theme}) => theme.text_white};
        border-top: none;
        width: 100%;
        text-align: center;
        cursor: pointer;

        &:hover a {
          color: ${({theme}) => theme.text_orange};
        }
        &:hover {
          background-color: rgb(3, 24, 45);
        }
      }

    }
    .nav-logo {
      margin: 3rem auto 0;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text_grey};
    }
    
  }
`;

const SideNavBtn = styled(Btn)`
  margin: auto;
`

const SideNav = ({ toggleNav }) => {
  return (
    <SideNavBar toggleNav={toggleNav}>
      <nav>
        <a href='#' className='nav-logo'>logo</a>

        <ul>
          <li>
            <a href='#'>HOME</a>
          </li>
          <li>
            <a href='#'>SERVICES</a>
          </li>
          <li>
            <a href='#'>COMPANY</a>
          </li>
          <li>
            <a href='#'>PAGES</a>
          </li>
          <li>
            <a href='#'>NEWS</a>
          </li>
          <li>
            <a href='#'>CONTACT</a>
          </li>
        </ul>
        <SideNavBtn>GET QUOTE</SideNavBtn>
      </nav>
    </SideNavBar>
  );
};

export default SideNav;
