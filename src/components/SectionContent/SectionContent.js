import Container from 'components/Container';
import { Text, Title } from './SectionContent.styled';

function SectionContent({ className, first, title, text, children }) {
  return (
    <Container className={className}>
      <Text>{first}</Text>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {children}
    </Container>
  );
}

export default SectionContent;
