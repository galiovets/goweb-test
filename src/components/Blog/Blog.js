import { BlogWrapper } from './Blog.styled';
import SectionContent from 'components/SectionContent';
import Button from 'components/Button';

function Blog() {
  return (
    <BlogWrapper>
      <SectionContent
        preTitle="April 16 2020"
        title="Blog Post One"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?"
      >
        <Button
          type="button"
          btnClassName="blogBtn"
          content="Read Our Blog"
          onClick={() => {
            console.log('click');
          }}
        />
      </SectionContent>
    </BlogWrapper>
  );
}

export default Blog;
