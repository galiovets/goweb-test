import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.breakpoints.mobile};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => props.theme.breakpoints.tablet};
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => props.theme.breakpoints.desktop};
  }
`;
