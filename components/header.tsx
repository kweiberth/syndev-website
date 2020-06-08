import { maxPageWidth, colors } from 'utils/styles';
import SynDevIcon from 'components/svgs/syndev-icon';

export default function Header() {
  return (
    <div
      css={{
        maxWidth: maxPageWidth,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        padding: 12,
      }}
    >
      <SynDevIcon height={32} />
      <div
        css={{
          fontSize: 17,
          fontWeight: 700,
          marginBottom: 2,
          color: colors.green,
          marginLeft: 8,
        }}
      >{`SynDev Technologies`}</div>
      <a
        href="mailto:franz.weiberth@syndev.co"
        target="_blank"
        rel="noreferrer"
        css={{
          marginLeft: 'auto',
          fontWeight: 500,
          fontSize: 13,
          background: colors.white,
          borderRadius: 3,
          color: colors.purple,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: '6px 12px',
          border: `1px solid ${colors.purple}`,
          ':hover': {
            background: colors.greenTranslucent,
          },
        }}
      >{`Email`}</a>
    </div>
  );
}
