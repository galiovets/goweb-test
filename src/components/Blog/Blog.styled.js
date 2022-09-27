import styled from 'styled-components';

export const BlogSection = styled.section`
  color: ${props => props.theme.colors.lightTextColor};
  background-color: ${props => props.theme.colors.addAccentColor};

  .blogContainer {
    padding-top: 48px;
    padding-bottom: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      display: flex;
      width: 690px;
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

export const BlogWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: flex;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    max-width: ${props => props.theme.breakpoints.desktop + 'px'};
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
`;
