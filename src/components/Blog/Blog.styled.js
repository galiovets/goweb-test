import styled from 'styled-components';

export const BlogWrapper = styled.section`
  padding-top: 48px;
  padding-bottom: 58px;
  color: ${props => props.theme.colors.lightTextColor};
  background-color: ${props => props.theme.colors.addAccentColor};

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
