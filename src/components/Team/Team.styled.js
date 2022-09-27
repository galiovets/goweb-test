import styled from 'styled-components';

export const TeamWrapper = styled.section`
  padding-top: 72px;
  padding-bottom: 50px;
  text-align: center;
  color: ${props => props.theme.colors.darkTextColor};
  background-color: ${props => props.theme.colors.lightTextColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    padding-top: 50px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    padding-top: 80px;
    padding-bottom: 88px;
  }

  .teamContainer {
    margin-bottom: 63px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      margin-bottom: 24px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      margin-bottom: 36px;
    }
  }
`;
