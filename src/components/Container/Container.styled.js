import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: ${props => props.theme.breakpoints.tablet - 1 + 'px'};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    max-width: ${props => props.theme.breakpoints.desktop - 1 + 'px'};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    width: ${props => props.theme.breakpoints.desktop + 'px'};
    padding-left: 28px;
    padding-right: 28px;
  }
`;
