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
`;

export const Item = styled.li`
  text-align: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &:hover,
  &:focus {
    .teamImgThumb {
      box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.4);
      transform: scale(1.05);

      @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
        margin-bottom: 16px;
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  .teamImgThumb {
    position: relative;
    overflow: hidden;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 16px;

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      margin-bottom: 14px;
    }

    &:hover .teamSocList,
    &:focus .teamSocList {
      opacity: 1;
    }
  }

  .teamImg {
    margin-bottom: 0;
    width: 100%;
  }

  .teamSocList {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* background-color: rgba(0, 0, 0, 0.6); */
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.6));
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .teamSocLink {
    &:hover,
    &:focus {
      opacity: 0.8;
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
