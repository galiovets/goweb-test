import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SocialList, SocialItem, SocialLink } from './SocialLinks.styled';

function SocialLinks({ className, facebook, twitter, youtube, linkedin }) {
  return (
    <SocialList className={className}>
      <SocialItem>
        <SocialLink href={facebook} target="_blank">
          <BsFacebook className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={twitter} target="_blank">
          <BsTwitter className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={youtube} target="_blank">
          <BsYoutube className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink href={linkedin} target="_blank">
          <FaLinkedinIn className="socialIcon" size="2.1em" />
        </SocialLink>
      </SocialItem>
    </SocialList>
  );
}

export default SocialLinks;
