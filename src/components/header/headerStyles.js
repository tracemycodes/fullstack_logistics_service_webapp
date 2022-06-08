import styled from 'styled-components';
import { Btn, DivContainer } from '../../styles/styles';

const MainNav = styled.header`
  width: 100%;
`;

const NavBar = styled.header`
  background-color: ${({ theme }) => theme.background_darkBlue};
`;

const NavHeader = styled(DivContainer)`
  padding: 0.9rem 0.5rem;
  font-size: clamp(0.5rem, 3vw, 0.75rem);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.text_grey};

  a {
    color: ${({ theme }) => theme.text_grey};
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text_grey};

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
    display: none;
    flex-direction: column;
    z-index: 7;
    div {
      border: 2px solid black;
      width: 2rem;
      margin: 0.17rem;
    }
    @media (max-width: 765px) {
      display: flex;
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
        cursor: pointer;
        font-size: clamp(0.65rem, 2vw, 0.8rem);
      }
    }
  }
`;

const NavBtn = styled(Btn)`
  margin-left: 3.5rem;
  @media (max-width: 793px) {
    margin-left: 1.8rem;
  }
`;

export { NavBtn, NavBody, NavHeader, NavBar, MainNav };
