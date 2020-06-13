import styled from '@emotion/styled';
import { colors, breakpoints, maxPageWidth } from 'utils/styles';

const imgWidth = 68;
const imgWidthMobile = 60;

const ImageWrapperWithBorder = styled.div({
  border: `2px solid ${colors.green}`,
  borderRadius: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 16,
  padding: 2,
});

export default function Footer() {
  return (
    <div
      css={{
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        maxWidth: maxPageWidth,
        margin: 'auto',
      }}
    >
      <div>
        <ImageWrapperWithBorder>
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
        </ImageWrapperWithBorder>
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          css={{
            fontSize: 18,
            fontWeight: 600,
            [breakpoints.mobile]: {
              fontSize: 16,
            },
          }}
        >{`Franz J. Weiberth, Ph.D.`}</div>
        <div
          css={{
            fontWeight: 600,
            color: colors.lightPurple,
            marginBottom: 2,
            fontSize: 15,
            [breakpoints.mobile]: {
              fontSize: 14,
              marginBottom: 1,
            },
          }}
        >
          {`Founder and CEO`}
        </div>
        <div
          css={{
            display: 'flex',
            color: colors.purple,
            textDecoration: 'underline',
            fontWeight: 500,
            fontSize: 14,
            [breakpoints.mobile]: {
              fontSize: 13,
            },
            '> *': { marginRight: 6 },
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
  );
}
