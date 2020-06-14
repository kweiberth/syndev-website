import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  maxPageWidth,
  colors,
  boxShadow,
  boxShadowHovered,
} from 'utils/styles';
import SynDevLogo from 'components/svgs/syndev-logo';
import HeaderTabs from 'components/header-tabs';

const logoHeight = 42;
const padding = 12;

const headerStickySwitch = -1 * (logoHeight + padding);

const Sticky = styled.div({ top: 0, width: '100%' }, (props: any) => ({
  position: props.position || 'fixed',
  display: props.display || 'block',
  visibility: props.visibility || 'visible',
}));

export default function Header({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: Function;
}) {
  const [shouldFixTabsToTop, setShouldFixTabsToTop] = useState(false);

  const headerRef = useRef(null);

  const shouldFixTabsToTopRef = useRef(shouldFixTabsToTop);
  shouldFixTabsToTopRef.current = shouldFixTabsToTop;

  useEffect(() => {
    const handleScroll = () => {
      const { current: $el } = headerRef;

      if (
        $el.getBoundingClientRect().y < headerStickySwitch &&
        shouldFixTabsToTopRef.current === false
      ) {
        setShouldFixTabsToTop(true);
      } else if (
        $el.getBoundingClientRect().y >= (logoHeight + padding + 1) * -1 &&
        shouldFixTabsToTopRef.current === true
      ) {
        setShouldFixTabsToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef} data-test-id="header">
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          padding,
          paddingBottom: 0,
          maxWidth: maxPageWidth,
          margin: 'auto',
        }}
      >
        <a href="/" css={{ display: 'block' }}>
          <SynDevLogo height={logoHeight} />
        </a>
        <a
          href="mailto:franz.weiberth@syndev.co"
          target="_blank"
          rel="noreferrer"
          css={{
            marginLeft: 'auto',
            fontWeight: 600,
            fontSize: 13,
            background: colors.green,
            borderRadius: 4,
            color: colors.white,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '6px 12px',
            border: `1px solid ${colors.purple}`,
            marginBottom: 10,
            transition:
              'box-shadow 100ms ease-in, transform 100ms ease-in, color 100ms ease-in',
            ':hover': {
              color: colors.purple,
              boxShadow: boxShadowHovered,
              transform: 'translateY(-1px)',
            },

            // When the tabs are below this button we need to increase the
            // z-index of the button so that the boxShadow does not get cut off
            // or covered by the tabs
            ...(!shouldFixTabsToTop ? { zIndex: 9999 } : {}),
            boxShadow,
          }}
        >{`Contact`}</a>
      </div>
      <Sticky
        display={shouldFixTabsToTop ? 'block' : 'none'}
        visibility={'hidden'}
        position="static"
      >
        <HeaderTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </Sticky>
      <Sticky
        position={shouldFixTabsToTop ? 'fixed' : 'inherit'}
        data-test-id="header-tabs"
      >
        <HeaderTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </Sticky>
    </div>
  );
}
