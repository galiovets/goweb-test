import { useState, useEffect } from 'react';
import { HeaderStyled, LogoLink } from './Header.styled';
import Container from 'components/Container';
import Icon from 'components/Icon';
import Navigation from 'components/Navigation';

function Header() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 120) {
        setAnimateHeader(true);
      } else if (window.scrollY > 70) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <HeaderStyled scroll={animateHeader}>
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
