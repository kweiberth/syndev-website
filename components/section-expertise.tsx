import Circle from 'components/svgs/circle';
import { colors } from 'utils/styles';
import styled from '@emotion/styled';

const expertises = [
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

const Bold = styled.span({
  fontWeight: 600,
  color: colors.purple,
});

export default function SectionExpertise() {
  return (
    <>
      <div
        css={{
          fontSize: 17,
          fontWeight: 600,
          color: colors.lightPurple,
        }}
      >
        <Bold>{`SynDev Technologies`}</Bold>
        <span>{` is a modern chemistry and biotech thinktank. Founded and led by `}</span>
        <Bold>{`Franz Weiberth`}</Bold>
        <span>{`, SynDev provides `}</span>
        <Bold>{`cutting edge consulting`}</Bold>
        <span>{` to chemical engineering and biotech companies and scientists. Based on 40 years of experience, SynDev specializes in `}</span>
        <Bold>{`all things synthesis, development and management`}</Bold>
        <span>{`, including:`}</span>
      </div>
      <div
        css={{
          padding: 12,
          paddingLeft: 6,
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
              fontSize: 17,
            }}
          >
            <span
              css={{
                height: '100%',
                marginRight: 6,
                '> svg': {
                  marginBottom: 3,
                },
              }}
            >
              <Circle color={colors.brightGreen} height={5} />
            </span>
            {expertise}
          </div>
        ))}
      </div>
    </>
  );
}
