import styled from 'styled-components';

export const BlogWrapper = styled.section`
  color: ${props => props.theme.colors.lightTextColor};
  background-color: ${props => props.theme.colors.addAccentColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: flex;
    flex-direction: row-reverse;
  }

  .blogPicWrapper {
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      width: 670px;
      height: 493px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      width: 670px;
      height: 460px;
    }
  }

  .blogContainer {
    padding-top: 48px;
    padding-bottom: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      width: 493px;
      padding-top: 59px;
      padding-bottom: 59px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  .blogBtn {
    font-size: 16px;
    margin-top: 24px;
    color: ${props => props.theme.colors.lightTextColor};
    border: 1px solid ${props => props.theme.colors.lightTextColor};
    background-color: transparent;

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.addAccentColor};
      background-color: ${props => props.theme.colors.lightBtnBackground};
      border: 1px solid ${props => props.theme.colors.mainAccentColor};
    }
  }
`;
