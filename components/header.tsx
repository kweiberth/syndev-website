import { maxPageWidth, colors, boxShadow } from 'utils/styles';
import SynDevLogo from 'components/svgs/syndev-logo-horizontal';
import HeaderTabs from 'components/header-tabs';

export default function Header({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: Function;
}) {
  return (
    <div
      css={{
        maxWidth: maxPageWidth,
        margin: 'auto',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 6,
          padding: 12,
          paddingBottom: 0,
        }}
      >
        <a href="/" css={{ display: 'block' }}>
          <SynDevLogo height={42} />
        </a>
        <a
          href="mailto:franz.weiberth@syndev.co"
          target="_blank"
          rel="noreferrer"
          css={{
            marginLeft: 'auto',
            fontWeight: 600,
            fontSize: 13,
            background: colors.purple,
            borderRadius: 4,
            color: colors.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '6px 12px',
            boxShadow,
            ':hover': {
              color: colors.brightGreen,
            },
          }}
        >{`Contact`}</a>
      </div>
      <HeaderTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}
