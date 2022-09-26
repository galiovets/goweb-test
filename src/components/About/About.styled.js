import styled from 'styled-components';

export const AboutWrapper = styled.section`
  padding-top: 79px;
  padding-bottom: 79px;
  color: ${props => props.theme.colors.lightTextColor};
  background-color: ${props => props.theme.colors.mainAccentColor};

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