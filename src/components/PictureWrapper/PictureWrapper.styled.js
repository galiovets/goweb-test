import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    width: 670px;
    height: 589px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    width: 670px;
    height: 460px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
