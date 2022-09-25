import styled from 'styled-components';

export const HeaderStyled = styled.header`
  .headerContainer {
    width: ${props => props.theme.breakpoints.mobile + 'px'};
    height: 120px;
    margin: 0 auto;
    padding-top: 22px;
    padding-left: 22px;
    padding-right: 22px;

    /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      padding-top: 16px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      padding-top: 32px;
    } */
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
  margin-bottom: 16px;
  font-size: 28px;
  line-height: 1.4;
  color: ${props => props.theme.colors.mainAccentColor};
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  .logoIcon {
    margin-right: 8px;
    fill: currentColor;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logoSpan {
    margin-left: 8px;
    color: ${props => props.theme.colors.lightTextColor};
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${props => props.theme.colors.mainHoverAccentColor};

    & .logoIcon {
      fill: ${props => props.theme.colors.mainHoverAccentColor};
    }
  }
`;
