import { List, Item, Img } from './CasesList.styled';

function CasesList({ items }) {
  return (
    <List>
      {items.map(({ id, webp, webp2x, jpg, jpg2x, alt }) => (
        <Item key={id}>
          <a
            href={jpg}
            data-lightbox="images"
            data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolore!"
          >
            <picture>
              <source srcSet={`${webp} 1x, ${webp2x} 2x`} type="image/webp" />
              <source srcSet={`${jpg} 1x, ${jpg2x} 2x`} type="image/jpeg" />
              <Img src={jpg} alt={alt} />
            </picture>
          </a>
        </Item>
      ))}
    </List>
  );
}

export default CasesList;
