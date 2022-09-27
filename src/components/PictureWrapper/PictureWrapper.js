import { Img } from './PictureWrapper.styled';

function PictureWrapper({ className, srcsetWebp, srcsetJpg, src, alt }) {
  return (
    <div className={className}>
      <picture>
        <source srcSet={srcsetWebp} type="image/webp" />
        <source srcSet={srcsetJpg} type="image/jpeg" />
        <Img src={src} alt={alt} />
      </picture>
    </div>
  );
}

export default PictureWrapper;
