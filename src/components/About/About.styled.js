import styled from 'styled-components';

export const AboutWrapper = styled.section`
  color: ${props => props.theme.colors.lightTextColor};
  background-color: ${props => props.theme.colors.mainAccentColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: flex;
  }

  .aboutContainer {
    padding-top: 79px;
    padding-bottom: 79px;
    display: flex;
    flex-direction: column;
    width: 690px;
    justify-content: center;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      padding-top: 62px;
      padding-bottom: 62px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      padding-top: 80px;
      padding-bottom: 86px;
    }
  }

  .aboutBtn {
    font-size: 16px;
    margin-top: 24px;
    color: ${props => props.theme.colors.lightTextColor};
    border: 1px solid ${props => props.theme.colors.lightTextColor};
    background-color: transparent;

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.mainAccentColor};
      background-color: ${props => props.theme.colors.lightBtnBackground};
      border: 1px solid ${props => props.theme.colors.mainAccentColor};
    }
  }
`;
