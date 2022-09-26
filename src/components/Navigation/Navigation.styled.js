import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  @media screen and (max-width: ${props => props.theme.breakpoints.tablet - 1 + 'px'}) {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    &:not(:last-child) {
      margin-right: 43px;
    }
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 16px;
  line-height: 1.4;
  color: ${props => props.theme.colors.lightTextColor};
  cursor: pointer;

  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    content: '';
    opacity: 0;
    background-color: ${props => props.theme.colors.mainAccentColor};
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus::after,
  &:hover::after {
    opacity: 1;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;
