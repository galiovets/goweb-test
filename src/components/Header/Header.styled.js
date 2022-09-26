import styled from 'styled-components';

export const HeaderStyled = styled.header`
  .headerContainer {
    @media screen and (max-width: ${props => props.theme.breakpoints.tablet - 1 + 'px'}) {
      width: ${props => props.theme.breakpoints.mobile + 'px'};
      height: 120px;
      margin: 0 auto;
      padding: 22px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      padding-top: 16px;
      padding-bottom: 15px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      padding-top: 32px;
      padding-bottom: 20px;
    }
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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    margin-bottom: 0;
  }

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
