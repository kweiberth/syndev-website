import Circle from 'components/svgs/circle';
import { colors, breakpoints } from 'utils/styles';

const successes = [
  {
    heading: 'Accelerated timelines',
    content:
      'Developed and implemented multi-pronged approaches to accelerate timelines while maintaining quality and successful outcomes, including:',
    bullets: [
      'Working closely with Medicinal Chemistry to anticipate early supplies of study batches of emerging leads',
      'Developing scenarios for strategies for early scale up while balancing at-risk sourcing and budget constraints',
      'Identifying activities that could be simplified or performed in parallel',
      'Managing internal and external headcounts',
      'Building teamwork and coordinating functions within a global organization to assess drugability, define and prioritize CMC activities, achieve buy-in with upper management, and then execute the planning to advance lead molecules (co-authored Chapter 33 on drug development in <i>The Practice of Medicinal Chemistry</i>; Elsevier Science: Boston, 2015; pp 793-803)',
    ],
  },
  {
    heading: 'CMC Leadership',
    bullets: [
      'Coordinated multi-disciplinary teams, including, chemistry, analytics, physical quality, formulations, sourcing, supply chain functions, to align activities with project team objectives and to drive the advancement of small molecules in development',
      'Drafted regulatory documents to support IND filings (Module 3)',
    ],
  },
  {
    heading: 'Lab leadership',
    content:
      'Directed BS/MS/PhD chemists engaged in chemical design, optimization and development of safe, robust, cost effective and potentially industrializable chemical processes.',
  },
  {
    heading: 'Cost of goods (CoG)',
    content:
      'Led teams that brainstormed and designed novel alternative and stereoselective routes for the synthesis of many building blocks and drug substances to enable cost-effective manufacturing (e.g., <i>Synthesis&nbsp;</i> <b>2017</b>, <i>49</i>, 4133; <i>OPRD&nbsp;</i> <b>2015</b>, <i>19</i>, 806; <i>OPRD&nbsp;</i> <b>2012</b>, <i>16</i>, 1967; <i>OPRD&nbsp;</i> <b>2010</b>, <i>14</i>, 623).',
  },
  {
    heading: 'Reaction screening',
    content:
      'Developed Segmented Tube Reactors, a screening tool to perform multiple reactions in parallel in batch mode within a single tube (<i>OPRD&nbsp;</i> <b>2018</b>, <i>22</i>, 512).',
  },
  {
    heading: 'Flow innovation',
    content:
      'Designed a portable Coriolis mass flow metering and pumping system that provided precise dispensing of two reagent streams simultaneously and proportionally that was critical to the efficient <i>N</i>-amination of a variety of related leads in development (<i>OPRD&nbsp;</i> <b>2011</b>, <i>15</i>, 704).',
  },
  {
    heading: 'Technology transfer',
    content:
      'Transferred syntheses of many drug substances to chemical manufacturing sites internal and external to organizations.',
  },
  {
    heading: 'Transformation',
    content:
      'Experienced in rebuilding organizations, ways of working and morale after mergers or corporate reorganizations have occurred.',
  },
  {
    heading: 'Lab GMPs',
    content:
      'Developed standard procedures and operational philosophies for the GMP synthesis, up to final intermediates, of drug substances in a laboratory environment in coordination with Regulatory and Quality functions.',
  },
  {
    heading: 'GMP Pilot Plant',
    content:
      'Managed research kilo lab (12-22 L) and GMP pilot plant (40 – 600 L reactors; 11,000 ft<sup>2</sup> plant) for 14 years that synthesized drug substance supplies to support IND toxicological studies and Phase 1 clinical trials.',
  },
  {
    heading: 'HSE leadership',
    content:
      'Leveraged lab and scale-up expertise to drive the philosophy and content of many operational safety policies; served as Chemical Hygiene Officer; audit liaison.',
  },
  {
    heading: 'In-process sampling technology',
    content:
      'Designed only known sampling devise that enables the removal of one-drop sample from a batch reactor from a reaction that is under reflux without compromising a nitrogen blanket (U.S. Pat. 5747708).',
  },
  {
    heading: 'Due diligences',
    content:
      'Provided CMC and chemistry expertise on many external opportunities.',
  },
];

export default function SectionSuccesses() {
  return (
    <>
      <div
        css={{
          fontSize: 20,
          fontWeight: 600,
          color: colors.lightPurple,
          marginBottom: 18,
          [breakpoints.mobile]: {
            fontSize: 18,
          },
        }}
      >
        {`Franz has developed and delivered innovative solutions in synthesis, scale up, process equipment and project progression.`}
      </div>
      <div
        css={{
          '> div': {
            marginBottom: 18,
          },
          '> div:last-of-type': {
            marginBottom: 0,
          },
        }}
      >
        {successes.map((success, i) => {
          const { heading, content, bullets = [] } = success;
          return (
            <div
              key={`success-${i}`}
              css={{
                fontSize: 17,
              }}
            >
              <div
                css={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: colors.purple,
                  marginBottom: 6,
                  display: 'flex',
                }}
              >
                <div
                  css={{
                    borderBottom: `2px solid ${colors.green}`,
                  }}
                >
                  {heading}
                </div>
              </div>
              <div
                css={{
                  '> b': { fontWeight: 600 },
                  '> sup': { fontSize: 10 },
                }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {bullets.length ? (
                <div
                  css={{
                    padding: 12,
                    paddingTop: 4,
                    paddingBottom: 0,
                    '> div': { marginBottom: 4 },
                    '> div:last-of-type': { marginBottom: 0 },
                  }}
                >
                  {bullets.map((bullet, j) => (
                    <div
                      key={`success-${i}-bullet-${j}`}
                      css={{ display: 'flex' }}
                    >
                      <div
                        css={{
                          marginRight: 8,
                          '> svg': {
                            marginBottom: 2,
                          },
                        }}
                      >
                        <Circle color={colors.green} height={6} />
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: bullet }} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
