import { AboutWrapper } from './About.styled';
import PictureWrapper from 'components/PictureWrapper';
import aboutWebp1x from 'assets/images/home/people.webp';
import aboutWebp2x from 'assets/images/home/people@2x.webp';
import aboutJpg1x from 'assets/images/home/people.jpg';
import aboutJpg2x from 'assets/images/home/people@2x.jpg';
import SectionContent from 'components/SectionContent';
import Button from 'components/Button';

function About() {
  return (
    <AboutWrapper>
      <PictureWrapper
        className="aboutPicWrapper"
        srcsetWebp={`${aboutWebp1x} 1x, ${aboutWebp2x} 2x`}
        srcsetJpg={`${aboutJpg1x} 1x, ${aboutJpg2x} 2x,`}
        src={aboutJpg1x}
        alt="Team"
      />
      <SectionContent
        className="aboutContainer"
        preTitle="What you are looking for"
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
