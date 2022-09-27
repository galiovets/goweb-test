import styled from 'styled-components';

export const CasesWrapper = styled.section`
  padding-top: 56px;
  padding-bottom: 40px;
  text-align: center;
  color: ${props => props.theme.colors.darkTextColor};
  background-color: ${props => props.theme.colors.lightTextColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    padding-top: 48px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .casesContainer {
    padding-left: 37px;
    padding-right: 36px;
    margin-bottom: 31px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      margin-bottom: 30px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      margin-bottom: 36px;
    }
  }
`;
