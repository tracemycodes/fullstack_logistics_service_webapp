import React from 'react';
import styled from 'styled-components';
import { DivContainer } from '../../styles/styles';

const FooterSection = styled.section`
  .brand-logo {
    background-color: #E6E6E6;
  }
  .footer-body {
    background-color: rgb(0, 39, 65);
  }
  .footer-terms {
    background-color: #03182d;
    width: 100%;
    border: 2px solid yellow;
  }
`;
const LogoDiv = styled(DivContainer)`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 2.4rem 0;

  .logo {
    width: 9rem;
    height: 3rem;
    border: 2px solid yellow;
  }
`;

const FooterDiv = styled(DivContainer)`
  display: flex;
  align-item: center;
  padding: 2.4rem 0;
  
  h3 {
    color: #fff;
    margin: 1.5rem 0 1.5rem;
  }
  a {
    text-decoration: none;
    margin-bottom: 1.1rem;
    display: block;
    font-size: .75rem;
    color: #E6E6E6;
  }
  > * + * {
    margin-left: 4rem;
   
  }
  .social-contact {
    margin-left: auto;
  }
`;

const FooterTerms = styled(DivContainer)`
  display: flex;
  align-item: center;
  padding: 2.4rem 0;
  color: #E6E6E6;
  font-size: .8rem;

  > * + * {
    margin-left: 2rem;
  }
  .right-reserved {
    margin-right: auto;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className='brand-logo'>
        <LogoDiv>
          <div className='logo'></div>
          <div className='logo'></div>
          <div className='logo'></div>
          <div className='logo'></div>
          <div className='logo'></div>
        </LogoDiv>
      </div>
      <div className="footer-body">
        <FooterDiv>
          <div>
            <h3>Navigation Link</h3>
            <a href="#">Home</a>
            <a href="#">About Company</a>
            <a href="#">Our Services</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h3>Our Services</h3>
            <a href="#">Business Consulting</a>
            <a href="#">Healthcare Consulting</a>
            <a href="#">Strategic Marketing</a>
            <a href="#">Finance Audit</a>
          </div>
          <div className='social-contact'>
            <h3>Social Contact</h3>
            <div>

            </div>
          </div>
        </FooterDiv>
      </div>
      <div className="footer-terms">
        <FooterTerms>
          <p className="right-reserved"> &copy; - Transtics | All Rights Reserved</p>
          <p>Terms of service</p>
          <p>Privacy Policy</p>
        </FooterTerms>
      </div>
    </FooterSection>
  );
};

export default Footer;
