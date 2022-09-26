import { HeroStyled, Title, Text } from './Hero.styled';
import Container from 'components/Container';
import Button from 'components/Button';

function Hero() {
  return (
    <HeroStyled>
      <Container className="heroContainer">
        <Title>The Sky Is The Limit</Title>
        <Text>We provide world class financial assistance</Text>
        <Button
          type="button"
          iconId="arrow"
          btnClassName="heroBtn"
          onClick={() => {
            console.log('click');
          }}
          content="Read more"
          isIcon
          width="9px"
          height="18px"
        />
      </Container>
    </HeroStyled>
  );
}

export default Hero;
