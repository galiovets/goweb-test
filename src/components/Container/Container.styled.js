import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  width: ${props => props.theme.breakpoints.mobile};

  /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => props.theme.breakpoints.tablet};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => props.theme.breakpoints.desktop};
    padding-left: 28px;
    padding-right: 28px;
  } */
`;
