import Circle from 'components/svgs/circle';
import { colors } from 'utils/styles';

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

export default function SectionExpertise() {
  return (
    <>
      <div
        css={{
          fontSize: 16,
          fontWeight: 500,
          color: colors.purple,
          // marginBottom: 12,
          // padding: 12,
          // border: `1px solid ${colors.purple}`,
          // borderRadius: 4,
        }}
      >
        {`SynDev Technologies is a modern chemistry and biotech thinktank. Founded and led by Franz Weiberth, SynDev provides cutting edge consulting to chemical engineering and biotech companies. Based on 40 years of experience, SynDev specializes in all things synthesis and development, including:`}
      </div>
      <div
        css={{
          padding: 12,
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
              fontSize: 16,
            }}
          >
            <span
              css={{
                height: '100%',
                marginRight: 6,
                '> svg': {
                  marginBottom: 2,
                },
              }}
            >
              <Circle color={colors.green} height={6} />
            </span>
            {expertise}
          </div>
        ))}
      </div>
    </>
  );
}
