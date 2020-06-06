import Head from 'next/head';
import { colors, breakpoints, boxShadow } from 'utils/styles';
import CaretRightIcon from 'components/svgs/caret-right-icon';

const imgWidth = 148;
const imgWidthMobile = 100;

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
          maxWidth: 600,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: `16px 12px 12px`,
        }}
      >
        <div css={{ flex: '1 0', '> *': { marginBottom: 24 } }}>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                css={{ fontSize: 16, fontWeight: 600, marginBottom: 2 }}
              >{`SynDev Technologies`}</div>
              <div
                css={{ fontWeight: 600, opacity: 0.8, fontSize: 12 }}
              >{`Insert tagline/description?`}</div>
            </div>
            <a
              href="mailto:franz.weiberth@syndev.co"
              target="_blank"
              rel="noreferrer"
              css={{
                marginLeft: 'auto',
                fontWeight: 600,
                background: colors.purple,
                borderRadius: 3,
                color: colors.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: '6px 12px',
                border: `1px solid ${colors.purple}`,
              }}
            >{`Email`}</a>
          </div>
          <div css={{ display: 'flex' }}>
            <div
              css={{
                border: `2px solid ${colors.purple}`,
                borderRadius: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 16,
                padding: 2,
              }}
            >
              <img
                src="/headshot.png"
                css={{
                  width: imgWidth,
                  height: imgWidth,
                  borderRadius: 9999,
                  [breakpoints.mobile]: {
                    width: imgWidthMobile,
                    height: imgWidthMobile,
                  },
                }}
              />
            </div>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: 16,
                '> *': {
                  marginBottom: 4,
                },
                [breakpoints.mobile]: {
                  fontSize: 14,
                  '> *': {
                    marginBottom: 2,
                  },
                },
              }}
            >
              <div
                css={{
                  fontSize: 18,
                  fontWeight: 600,
                  [breakpoints.mobile]: {
                    fontSize: 14,
                  },
                }}
              >{`Franz J. Weiberth, Ph.D.`}</div>
              <div>{`Founder and CEO`}</div>
              <div
                css={{
                  display: 'flex',
                  color: colors.blueHyperlink,
                  textDecoration: 'underline',
                  '> *': { marginRight: 8 },
                }}
              >
                <a
                  href="mailto:franz.weiberth@syndev.co"
                  target="_blank"
                  rel="noreferrer"
                >{`Email`}</a>
                <a
                  href="https://www.linkedin.com/in/franz-j-weiberth-ph-d-6a239a2a/"
                  target="_blank"
                  rel="noreferrer"
                >{`LinkedIn`}</a>
              </div>
            </div>
          </div>
          <div
            css={{
              // padding: 12,
              // borderRadius: 6,
              // border: `2px solid ${colors.purple}`,
              paddingLeft: 4,
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
                  <CaretRightIcon color={colors.purple} height={8} />
                </span>
                {competency}
              </div>
            ))}
          </div>
          <a
            href="https://pubs.acs.org/doi/10.1021/acs.oprd.8b00009"
            target="_blank"
            rel="noreferrer"
            css={{
              display: 'block',
              overflow: 'hidden',
              padding: 12,
              borderRadius: 6,
              boxShadow,
            }}
          >
            <img src="/article1.png" width="100%" />
          </a>
          <a
            href="https://doi.org/10.1039/C8GC01276H"
            target="_blank"
            rel="noreferrer"
            css={{
              display: 'block',
              overflow: 'hidden',
              padding: 12,
              borderRadius: 6,
              boxShadow,
            }}
          >
            <img src="/article2.png" width="100%" />
          </a>
        </div>
        <div
          css={{ flex: '0 0 auto', fontSize: 13, padding: `6px 0` }}
        >{`\u{00A9} SynDev, LLC`}</div>
      </div>
    </>
  );
}
