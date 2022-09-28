import styled from 'styled-components';

export const SocialList = styled.ul`
  display: flex;
`;

export const SocialItem = styled.li`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const SocialLink = styled.a`
  color: ${props => props.theme.colors.lightTextColor};
  opacity: 1;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  .socialIcon {
    fill: currentColor;
  }
`;
