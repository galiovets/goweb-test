import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: ${props => props.theme.fonts.weights.regular};
  line-height: 1.4;
  margin-top: 16px;
  margin-bottom: 24px;
`;
