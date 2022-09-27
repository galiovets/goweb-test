import Container from 'components/Container';
// import PictureWrapper from 'components/PictureWrapper';
import { Text, Title } from './SectionContent.styled';

function SectionContent({
  className,
  // isPicture = false,
  // picsClassName,
  // srcsetWebp,
  // srcsetJpg,
  // src,
  // alt,
  preTitle,
  title,
  text,
  children,
}) {
  return (
    <Container className={className}>
      {/* {isPicture ? (
        <PictureWrapper
          picsClassName={picsClassName}
          srcsetWebp={srcsetWebp}
          srcsetJpg={srcsetJpg}
          src={src}
          alt={alt}
        />
      ) : null} */}
      <Text>{preTitle}</Text>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {children}
    </Container>
  );
}

export default SectionContent;
