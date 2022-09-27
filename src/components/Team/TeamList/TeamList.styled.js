import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: ${props => props.theme.breakpoints.tablet - 1 + 'px'};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
    max-width: ${props => props.theme.breakpoints.desktop - 1 + 'px'};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    grid-column-gap: 20px;
    width: ${props => props.theme.breakpoints.desktop + 'px'};
    padding-left: 28px;
    padding-right: 28px;
  }

  img {
    margin-bottom: 16px;

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      margin-bottom: 14px;
    }
  }
`;

export const Item = styled.li`
  text-align: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h3`
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 8px;
  color: ${props => props.theme.fonts.weights.darkTextColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    font-size: 32px;
    line-height: 1;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: ${props => props.theme.fonts.weights.darkTextColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    font-size: 18px;
  }
`;
