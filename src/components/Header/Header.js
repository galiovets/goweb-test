import { HeaderStyled, LogoLink } from './Header.styled';
import Container from 'components/Container';
import Icon from 'components/Icon';
import Navigation from 'components/Navigation';

function Header() {
  return (
    <HeaderStyled>
      <Container className="headerContainer">
        <LogoLink href="/">
          <Icon iconId="logo" className="logoIcon" width="39px" height="35px" />
          Finance
          <span className="logoSpan">Ledger</span>
        </LogoLink>
        <Navigation />
      </Container>
    </HeaderStyled>
  );
}

export default Header;
