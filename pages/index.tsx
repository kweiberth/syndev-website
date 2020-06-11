import { useState } from 'react';
import styled from '@emotion/styled';
import { colors, maxPageWidth } from 'utils/styles';
import Footer from 'components/footer';
import Header from 'components/header';
import SectionExpertise from 'components/section-expertise';
import SectionHighlights from 'components/section-highlights';

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

const sections = [
  {
    tab: 'expertise',
    component: SectionExpertise,
  },
  {
    tab: 'highlights',
    component: SectionHighlights,
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('expertise');
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
            {sections.map(({ tab, component: Component }) => {
              if (tab === selectedTab) {
                return <Component />;
              }
              return null;
            })}
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
