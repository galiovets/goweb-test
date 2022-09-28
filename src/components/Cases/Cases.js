import { CasesWrapper } from './Cases.styled';
import SectionContent from 'components/SectionContent';
import CasesList from './CasesList';
import casesImages from 'data/casesImages';

function Cases() {
  return (
    <CasesWrapper id="cases">
      <SectionContent
        className="casesContainer"
        preTitle="This is what we do"
        title="Business Cases"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!"
      />
      <CasesList items={casesImages} />
    </CasesWrapper>
  );
}

export default Cases;
