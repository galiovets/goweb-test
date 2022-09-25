import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 16px 32px;
  max-width: 186px;
  font-weight: ${props => props.theme.fonts.weights.regular};
  text-align: center;
  font-size: 18px;
  line-height: 1.4;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  .content {
    margin-left: ${({ iconId }) => (iconId ? '8px' : '0')};
  }
`;
