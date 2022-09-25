import styled from 'styled-components';

export const HeroStyled = styled.section`
  color: ${props => props.theme.colors.lightTextColor};

  .heroContainer {
    margin-left: auto;
    margin-right: auto;
    padding: 162px 20px 104px;
    text-align: center;
    @media screen and (min-width: 768px) {
      background-color: red;
    }
  }

  .btn {
    color: ${props => props.theme.colors.lightTextColor};
    background-color: ${props => props.theme.colors.mainAccentColor};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.mainHoverAccentColor};
    }
  }
`;

export const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 241px;
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  font-size: 40px;
  line-height: 1.35;
`;

export const Text = styled.p`
  margin-bottom: 24px;
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 26px;
  line-height: 1.2;
`;
