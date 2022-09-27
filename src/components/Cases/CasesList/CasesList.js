import { List, Item } from './CasesList.styled';

function CasesList({ items }) {
  return (
    <List>
      {items.map(({ id, webp, webp2x, jpg, jpg2x, alt }) => (
        <Item key={id}>
          <picture>
            <source srcSet={`${webp} 1x, ${webp2x} 2x`} type="image/webp" />
            <source srcSet={`${jpg} 1x, ${jpg2x} 2x`} type="image/jpeg" />
            <img src={jpg} alt={alt} />
          </picture>
        </Item>
      ))}
    </List>
  );
}

export default CasesList;
