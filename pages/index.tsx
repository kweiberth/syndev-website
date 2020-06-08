import Head from 'next/head';
import styled from '@emotion/styled';
import { colors, maxPageWidth } from 'utils/styles';
import CaretRightIcon from 'components/svgs/atom-icon';
import Footer from 'components/footer';
import Header from 'components/header';
import Highlights from 'components/highlights';

const competencies = [
  'CMC strategy and leadership',
  'Project progression, early development to clinic',
  'Drugability assessments',
  'Organic chemistry',
  'Route scouting and optimization',
  'Multi-step synthesis development',
  'Process chemistry and scale up',
  'Strategic sourcing',
  'Analytics',
  'Physical quality',
  'Technology transfer',
  'Due Diligence',
  'cGMPs',
];

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

export default function Home() {
  return (
    <>
      <Head>
        <title>SynDev Technologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div css={{ flex: '1 0', '> *': { marginBottom: 24 } }}>
          <StickyHeader>
            <Header />
          </StickyHeader>
          <StickyHeader visibility="hidden" position="static">
            <Header />
          </StickyHeader>

          <div
            css={{
              paddingLeft: 4,
              maxWidth: maxPageWidth,
              margin: 'auto',
              padding: 12,
              '> div': {
                marginBottom: 6,
              },
              '> div:last-of-type': {
                marginBottom: 0,
              },
            }}
          >
            {competencies.map((competency, i) => (
              <div
                key={`competency-${i}`}
                css={{
                  fontSize: 17,
                }}
              >
                <span
                  css={{
                    height: '100%',
                    marginRight: 6,
                    '> svg': {
                      marginBottom: 1,
                    },
                  }}
                >
                  <CaretRightIcon color={colors.purple} height={10} />
                </span>
                {competency}
              </div>
            ))}
          </div>
          <Highlights />
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
