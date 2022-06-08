import React, { useState } from 'react';
import SideNav from '../SideNav';
import { NavBtn, NavBody, NavHeader, NavBar, MainNav } from './headerStyles';
import { contact, navContainer } from '../../delivery';

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  const { email, tel } = contact;
  const { logo, navItems } = navContainer;

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
            <a href='mailto:'>{email}</a>
            <a href='tel:+'>{tel}</a>
          </div>
          <div>
            <span>ENG</span>
            <span>FR</span>
          </div>
        </NavHeader>
      </NavBar>
      <NavBody toggleNav={sideNav}>
        <div className='product-logo'>{logo}</div>
        <div className='nav-items'>
          <ul>
            {navItems.map((item) => (
              <li>
                <a href=''>{item}</a>
              </li>
            ))}
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
