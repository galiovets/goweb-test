import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${props => props.theme.colors.lightTextColor};
  background-color: ${props => props.theme.colors.darkTextColor};

  .footerContainer {
    width: ${props => props.theme.breakpoints.mobile + 'px'};
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    padding-left: 34px;
    padding-right: 30px;
  }

  .footerList {
    align-self: center;
  }

  .footerSocLink {
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.mainAccentColor};
    }
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
  line-height: 1.4;
  margin-top: 12px;
`;
