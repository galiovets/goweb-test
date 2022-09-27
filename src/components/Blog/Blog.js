// import Media from 'react-media';
import { BlogSection, BlogWrapper } from './Blog.styled';
import PictureWrapper from 'components/PictureWrapper';
import blogWebp1x from 'assets/images/home/blog.webp';
import blogWebp2x from 'assets/images/home/blog@2x.webp';
import blogJpg1x from 'assets/images/home/blog.jpg';
import blogJpg2x from 'assets/images/home/blog@2x.jpg';
import SectionContent from 'components/SectionContent';
import Button from 'components/Button';

import { useState, useEffect } from 'react';

function UseWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
}

function Blog() {
  const width = UseWindowWidth();

  return (
    <BlogSection>
      <BlogWrapper>
        {width <= 767 ? (
          <>
            <PictureWrapper
              srcsetWebp={`${blogWebp1x} 1x, ${blogWebp2x} 2x`}
              srcsetJpg={`${blogJpg1x} 1x, ${blogJpg2x} 2x,`}
              src={blogJpg1x}
              alt="Team"
            />
            <SectionContent
              className="blogContainer"
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
          </>
        ) : (
          <>
            <SectionContent
              className="blogContainer"
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
            <PictureWrapper
              picsClassName="blogPicWrapper"
              srcsetWebp={`${blogWebp1x} 1x, ${blogWebp2x} 2x`}
              srcsetJpg={`${blogJpg1x} 1x, ${blogJpg2x} 2x,`}
              src={blogJpg1x}
              alt="Team"
            />
          </>
        )}
        {/* <Media
          query="(max-width: 767px)"
          render={() => (
            <PictureWrapper
              srcsetWebp={`${blogWebp1x} 1x, ${blogWebp2x} 2x`}
              srcsetJpg={`${blogJpg1x} 1x, ${blogJpg2x} 2x,`}
              src={blogJpg1x}
              alt="Team"
            />
          )}
        /> */}
        {/* <SectionContent
          className="blogContainer"
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
        </SectionContent> */}
        {/* <Media
          query="(min-width: 768px)"
          render={() => (
            <PictureWrapper
              picsClassName="blogPicWrapper"
              srcsetWebp={`${blogWebp1x} 1x, ${blogWebp2x} 2x`}
              srcsetJpg={`${blogJpg1x} 1x, ${blogJpg2x} 2x,`}
              src={blogJpg1x}
              alt="Team"
            />
          )}
        /> */}
      </BlogWrapper>
    </BlogSection>
  );
}

export default Blog;
