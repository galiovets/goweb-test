import { List, Item, Title, Text } from './TeamList.styled';

function TeamList({ items }) {
  return (
    <List>
      {items.map(({ id, webp, webp2x, jpg, jpg2x, name, position }) => (
        <Item key={id}>
          <picture>
            <source srcSet={`${webp} 1x, ${webp2x} 2x`} type="image/webp" />
            <source srcSet={`${jpg} 1x, ${jpg2x} 2x`} type="image/jpeg" />
            <img src={jpg} alt={position} />
          </picture>
          <Title>{name}</Title>
          <Text>{position}</Text>
        </Item>
      ))}
    </List>
  );
}

export default TeamList;
