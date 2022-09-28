import { TeamWrapper } from './Team.styled';
import SectionContent from 'components/SectionContent';
import TeamList from './TeamList';
import teamInfo from 'data/team';

const Team = () => {
  return (
    <TeamWrapper>
      <SectionContent
        className="teamContainer"
        preTitle="Who we are"
        title="Our Professional Team"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!"
      />
      <TeamList items={teamInfo} />
    </TeamWrapper>
  );
};

export default Team;
