import styled from 'styled-components';

export const AboutSection = styled.section`
  color: ${props => props.theme.colors.lightTextColor};
  background-color: ${props => props.theme.colors.mainAccentColor};
`;

export const AboutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: flex;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    max-width: ${props => props.theme.breakpoints.desktop + 'px'};
  }

  .aboutPicWrapper {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      width: 670px;
      height: 589px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      width: 670px;
      height: 460px;
    }
  }

  .aboutContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 79px;
    padding-bottom: 79px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      display: flex;
      width: 690px;
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
    justify-content: center;
    width: 156px;
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
