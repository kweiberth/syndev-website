import { useState } from 'react';
import styled from '@emotion/styled';
import { colors, maxPageWidth } from 'utils/styles';
import Footer from 'components/footer';
import Header from 'components/header';
import SectionExpertise from 'components/section-expertise';
import SectionPublications from 'components/section-publications';
import SectionHighlights from 'components/section-highlights';
import SectionBlog from 'components/section-blog';

const StickyFooter = styled.div(
  {
    bottom: 0,
    left: 0,
    right: 0,
    background: colors.white,
    borderTop: `1px solid ${colors.grey}`,
  },
  (props: any) => ({
    position: props.position || 'fixed',
    visibility: props.visibility || 'visible',
  }),
);

const StickyHeader = styled.div(
  {
    top: 0,
    left: 0,
    right: 0,
    background: colors.white,
    borderBottom: `1px solid ${colors.grey}`,
  },
  (props: any) => ({
    position: props.position || 'fixed',
    visibility: props.visibility || 'visible',
  }),
);

const Section = styled.div({
  paddingLeft: 4,
  maxWidth: maxPageWidth,
  margin: 'auto',
  padding: 12,
  paddingBottom: 24,
});

const sectionsByTab = {
  expertise: SectionExpertise,
  publications: SectionPublications,
  highlights: SectionHighlights,
  blog: SectionBlog,
};

export default function MainPage({
  initialSelectedTab = 'expertise',
}: {
  initialSelectedTab?: string;
}) {
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);
  const SectionToRender = sectionsByTab[selectedTab];
  return (
    <>
      <div
        css={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div css={{ flex: '1 0' }}>
          <StickyHeader>
            <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </StickyHeader>
          <StickyHeader visibility="hidden" position="static">
            <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </StickyHeader>

          <Section>
            <SectionToRender />
          </Section>
        </div>
        <StickyFooter>
          <Footer />
        </StickyFooter>
        <StickyFooter visibility="hidden" position="static">
          <Footer />
        </StickyFooter>
      </div>
    </>
  );
}