import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SocialList, SocialItem, SocialLink } from './SocialLinks.styled';

function SocialLinks({ listClassName, linkClassName, facebook, twitter, youtube, linkedin }) {
  return (
    <SocialList className={listClassName}>
      <SocialItem>
        <SocialLink
          href={facebook}
          className={linkClassName}
          target="_blank"
          aria-label="Link to Facebook"
        >
          <BsFacebook className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href={twitter}
          className={linkClassName}
          target="_blank"
          aria-label="Link to Twitter"
        >
          <BsTwitter className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href={youtube}
          className={linkClassName}
          target="_blank"
          aria-label="Link to Youtube"
        >
          <BsYoutube className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href={linkedin}
          className={linkClassName}
          target="_blank"
          aria-label="Link to LinkedIn"
        >
          <FaLinkedinIn className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
}

export default SocialLinks;
