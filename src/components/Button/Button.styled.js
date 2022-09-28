import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  max-width: 186px;
  font-weight: ${props => props.theme.fonts.weights.regular};
  text-align: center;
  font-size: 18px;
  line-height: 1.4;
  border: none;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  .content {
    margin-left: ${({ iconId }) => (iconId ? '8px' : '0')};
  }
`;
