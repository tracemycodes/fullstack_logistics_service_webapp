// Style component
import styled from 'styled-components';

const SlideSection = styled.section`
  height: calc(100vh - 6rem);
  width: 100%;
`;

const CarouselDiv = styled.section`
  padding: 9.5rem 0rem 14.5rem;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 1;

  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.dark_overlay};
  }

  h1 {
    font-size: ${({ theme }) => theme.text_h1};
    line-height: ${({ theme }) => theme.lineHeight_h1};
    color: ${({ theme }) => theme.text_white};
    position: relative;
    max-width: 30rem;
    width: 100%;
    z-index: 2;
  }

  p {
    margin: 1rem 0 2rem;
    position: relative;
    font-size: ${({ theme }) => theme.text_h4};
    color: ${({ theme }) => theme.text_white};
    z-index: 2;
  }
`;

export { CarouselDiv, SlideSection };
