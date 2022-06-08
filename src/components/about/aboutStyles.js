import styled from 'styled-components';
import mapImg from '../../assets/map-mercator.svg';

export const AboutLogistics = styled.section`
  padding: 6rem 0 7rem;
  color: ${({ theme }) => theme.text_darkBlue};
  background-image: url(${mapImg});
  background-cover: cover;
  background-position: center;
  text-align: center;
  width: 100%;
  overflow: hidden;

  h5 {
    font-size: ${({ theme }) => theme.text_h5};
    color: ${({ theme }) => theme.text_orange};
    margin-bottom: .4rem;
  }
  h3 {
    font-size: ${({ theme }) => theme.text_h2};
    max-width: 22rem;
    width: 100%;
    color: ${({ theme }) => theme.text_darkBlue};
    margin: 0rem auto 0.8rem;
  }

  p {
    margin: 0 auto;
    max-width: 30rem;
    width: 100%
    color: #306587;
    font-size: ${({ theme }) => theme.text_p1};
    text-align: justify;

  }
  .about-carousel {
    padding: 0.5rem 2.5rem;
    margin-top: 2rem;
    display: flex;
    gap: 2rem;    
    
    article {
      margin: 1rem 0 3rem;
    }
    .icon {
      width: 3.3rem;
      margin: auto;
      height: 3.3rem;

      img {
        position: relative;
        filter: brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(7180%) hue-rotate(356deg) brightness(87%) contrast(114%);
      }
    }
    h4 {
      margin-top: 1rem;
      color: ${({ theme }) => theme.text_darkBlue};
      font-weight: bold;
    }
    p {
      margin: unset;
      margin: 0;
      text-align: center;
      margin: 1.2rem 0;
      font-size: ${({ theme }) => theme.text_p1};
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text_orange};
      font-size: 0.8rem;
      font-weight: bold;
    }
    
  }
`;
