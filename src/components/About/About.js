import { AboutWrapper } from './About.styled';
import SectionContent from 'components/SectionContent';
import Button from 'components/Button';

function About() {
  return (
    <AboutWrapper>
      <SectionContent
        first="What you are looking for"
        title="We provide bespoke solutions"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?"
      >
        <Button
          type="button"
          btnClassName="aboutBtn"
          content="Read more"
          onClick={() => {
            console.log('click');
          }}
        />
      </SectionContent>
    </AboutWrapper>
  );
}

export default About;
