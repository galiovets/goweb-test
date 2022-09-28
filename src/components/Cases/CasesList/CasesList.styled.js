import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: ${props => props.theme.breakpoints.tablet - 1 + 'px'};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
    max-width: ${props => props.theme.breakpoints.desktop - 1 + 'px'};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    grid-row-gap: 24px;
    grid-column-gap: 20px;
    width: ${props => props.theme.breakpoints.desktop + 'px'};
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const Item = styled.li`
  opacity: 1;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
