import Circle from 'components/svgs/circle';
import { colors, breakpoints } from 'utils/styles';
import styled from '@emotion/styled';

const expertises = [
  'CMC strategy and coordination',
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

const Bold = styled.span({
  fontWeight: 600,
  color: colors.purple,
});

export default function SectionExpertise() {
  return (
    <>
      <div
        css={{
          fontSize: 20,
          fontWeight: 600,
          color: colors.lightPurple,
          [breakpoints.mobile]: {
            fontSize: 18,
          },
        }}
      >
        <span>{`Founded and led by `}</span>
        <Bold>{`Franz Weiberth`}</Bold>
        <span>{`, SynDev Technologies provides `}</span>
        <Bold>{`cutting edge consulting`}</Bold>
        <span>{` in the synthesis and progression of pharmacologically active new small molecules from lab to clinic to commercial manufacturing. Based on 30+ years of experience and innovation, SynDev specializes in `}</span>
        <Bold>{`all things synthesis and development`}</Bold>
        <span>{`, including:`}</span>
      </div>
      <div
        css={{
          padding: 12,
          paddingBottom: 0,
          fontWeight: 500,
          '> div': {
            marginBottom: 4,
          },
          '> div:last-of-type': {
            marginBottom: 0,
          },
        }}
      >
        {expertises.map((expertise, i) => (
          <div
            key={`expertise-${i}`}
            css={{
              fontSize: 18,
              [breakpoints.mobile]: {
                fontSize: 17,
              },
              display: 'flex',
            }}
          >
            <div
              css={{
                marginRight: 8,
                '> svg': {
                  marginBottom: 2,
                },
              }}
            >
              <Circle color={colors.green} height={8} />
            </div>
            <div>{expertise}</div>
          </div>
        ))}
      </div>
    </>
  );
}
