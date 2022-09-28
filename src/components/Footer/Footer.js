import { FooterStyled, FooterText } from './Footer.styled';
import Container from 'components/Container';
import SocialLinks from 'components/SocialLinksList';
import socialLinks from 'data/socialLinks';

const Footer = () => {
  return (
    <FooterStyled>
      <Container className="footerContainer">
        <SocialLinks
          listClassName="footerList"
          linkClassName="footerSocLink"
          facebook={socialLinks.facebook}
          twitter={socialLinks.twitter}
          youtube={socialLinks.youtube}
          linkedin={socialLinks.linkedin}
        />
        <FooterText>Copyright © 2021 - FinanceLedger</FooterText>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
