import styled from 'styled-components';
import showcaseJpg1x from 'assets/images/home/showcase.jpg';
import showcaseJpg2x from 'assets/images/home/showcase@2x.jpg';
import showcaseWebp1x from 'assets/images/home/showcase.webp';
import showcaseWebp2x from 'assets/images/home/showcase@2x.webp';

export const HeroStyled = styled.section`
  color: ${props => props.theme.colors.lightTextColor};

  .heroContainer {
    margin-left: auto;
    margin-right: auto;
    padding: 160px 20px 104px;
    text-align: center;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      -webkit-image-set(url(${showcaseWebp2x}) 2x, url(${showcaseWebp1x}) 1x, url(${showcaseJpg2x})
            2x, url(${showcaseJpg1x}) 1x);

    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      image-set(
        url(${showcaseWebp2x}) 2x,
        url(${showcaseWebp1x}) 1x,
        url(${showcaseJpg2x}) 2x,
        url(${showcaseJpg1x}) 1x
      );

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
      padding: 378px 122px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
      padding: 272px 280px 270px;
    }
  }

  .heroBtn {
    margin-right: auto;
    margin-left: auto;
    color: ${props => props.theme.colors.lightTextColor};
    background-color: ${props => props.theme.colors.mainAccentColor};

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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    width: 523px;
    font-size: 55px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 26px;
  line-height: 1.2;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet + 'px'}) {
    font-size: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop + 'px'}) {
    line-height: 1.4;
  }
`;
