import { Wrapper, Img } from './PictureWrapper.styled';

function PictureWrapper({ srcsetWebp, srcsetJpg, src, alt }) {
  return (
    <Wrapper>
      <picture>
        <source srcSet={srcsetWebp} type="image/webp" />
        <source srcSet={srcsetJpg} type="image/jpeg" />
        <Img src={src} alt={alt} />
      </picture>
    </Wrapper>
  );
}

export default PictureWrapper;
