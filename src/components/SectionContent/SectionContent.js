import Container from 'components/Container';
import { Text, Title } from './SectionContent.styled';

function SectionContent({ className, preTitle, title, text, children }) {
  return (
    <Container className={className}>
      <Text>{preTitle}</Text>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {children}
    </Container>
  );
}

export default SectionContent;
