import React, { useState } from 'react';
import SideNav from '../SideNav';
import { NavBtn, NavBody, NavHeader, NavBar, MainNav } from './headerStyles';

const Header = () => {
  const [sideNav, setSideNav] = useState(false);

  const handleOnClick = () => {
    if (sideNav) {
      setSideNav(false);
    } else {
      setSideNav(true);
    }
  };

  return (
    <MainNav>
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
      <NavBody toggleNav={sideNav}>
        <div className='product-logo'></div>
        <div className='nav-items'>
          <ul>
            <li>HOME</li>
            <li>SERVICES</li>
            <li>COMPANY</li>
            <li>PAGES</li>
            <li>NEWS</li>
            <li>CONTACT</li>
          </ul>
          <NavBtn>GET QUOTE</NavBtn>
        </div>
        <div className='nav-hamburger' onClick={handleOnClick}>
          <div className='first'></div>
          <div className='second'></div>
          <div className='third'></div>
        </div>
        <SideNav toggleNav={sideNav} />
      </NavBody>
    </MainNav>
  );
};

export default Header;
