import styled from '@emotion/styled';
import { colors, breakpoints, maxPageWidth } from '../utils/styles';
import { useRouter } from 'next/router';

const Wrapper = styled.div({
  width: '100%',
  overflow: 'hidden',
  maxWidth: maxPageWidth,
  margin: 'auto',
  background: colors.white,
  borderBottom: `1px solid ${colors.grey}`,
});

const WrapperForFade = styled.div({
  overflow: 'hidden',

  // for <Fade* /> components
  position: 'relative',
});

const Filters = styled.div({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  flex: '1 1 auto',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
  WebkitOverflowScrolling: 'touch',
  width: '100%',
  paddingLeft: 12,

  // Remove the scroll bar
  '&::-webkit-scrollbar': { width: 0, height: 0 }, // Chrome, Safari, Opera, etc.
  msOverflowStyle: 'none', // IE 10+
  scrollbarWidth: 'none', // Firefox

  '> button': {
    marginRight: 16,
  },

  '> button:last-of-type': {
    marginRight: 0,

    // Extra padding means we'll be able to horizontally scroll enough to the
    // left so the last tab is not covered by <FadeRight/>
    paddingRight: 24,
  },
});

const FadeRight = styled.div({
  position: 'absolute',
  width: 30,
  right: 0,
  top: 0,
  bottom: 0,
  background: `linear-gradient(270deg, ${colors.white} 20%, ${colors.transparent} 100%)`,
});

const Filter = styled.button({
  height: 36,

  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
    borderColor: 'transparent',
  },

  '&:focus > div': {
    borderBottom: `2px solid ${colors.brightGreen}`,
  },
});

const FilterText = styled.div(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 14,
    fontWeight: 700,
    [breakpoints.mobile]: {
      fontSize: 13,
    },
  },
  (props: any) => ({
    color: props.isActive ? colors.purple : colors.lightPurple,
    borderBottom: props.isActive
      ? `2px solid ${colors.brightGreen}`
      : `2px solid ${colors.transparent}`,
    fontWeight: props.isActive ? 700 : 600,
  }),
);

const tabs = [
  { value: 'expertise', displayName: 'Expertise' },
  { value: 'publications', displayName: 'Publications' },
  { value: 'highlights', displayName: 'Highlights' },
  { value: 'blog', displayName: 'Blog' },
];

export default function HeaderTabs({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: Function;
}) {
  const router = useRouter();

  function onTabClick(value) {
    return function (event) {
      event.preventDefault();
      setSelectedTab(value);
      router.replace(`/${value}`);
    };
  }

  return (
    <Wrapper>
      <WrapperForFade>
        <Filters>
          {tabs.map(({ value, displayName }) => (
            <Filter
              key={value}
              onClick={onTabClick(value)}
              type="button"
              aria-label={`View ${displayName.toLowerCase()}`}
            >
              <FilterText isActive={selectedTab === value}>
                {displayName.toUpperCase()}
              </FilterText>
            </Filter>
          ))}
        </Filters>
        <FadeRight />
      </WrapperForFade>
    </Wrapper>
  );
}
