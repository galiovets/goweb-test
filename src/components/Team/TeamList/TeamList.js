import { List, Item, Title, Text } from './TeamList.styled';
import SocialLinks from 'components/SocialLinksList';
import socialLinks from 'data/socialLinks';

function TeamList({ items }) {
  return (
    <List>
      {items.map(({ id, webp, webp2x, jpg, jpg2x, name, position }) => (
        <Item key={id}>
          <div className="teamImgThumb">
            <picture>
              <source srcSet={`${webp} 1x, ${webp2x} 2x`} type="image/webp" />
              <source srcSet={`${jpg} 1x, ${jpg2x} 2x`} type="image/jpeg" />
              <img className="teamImg" src={jpg} alt={position} />
            </picture>
            <SocialLinks
              listClassName="teamSocList"
              linkClassName="teamSocLink"
              facebook={socialLinks.facebook}
              twitter={socialLinks.twitter}
              youtube={socialLinks.youtube}
              linkedin={socialLinks.linkedin}
            />
          </div>
          <div className="textWrapper">
            <Title>{name}</Title>
            <Text>{position}</Text>
          </div>
        </Item>
      ))}
    </List>
  );
}

export default TeamList;
