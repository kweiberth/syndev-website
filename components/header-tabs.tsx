import styled from '@emotion/styled';
import { colors, breakpoints } from '../utils/styles';
import { useRouter } from 'next/router';

const Filters = styled.div({
  width: '100%',

  '> button': {
    marginLeft: 16,
  },

  '> button:first-of-type': {
    marginLeft: 0,
  },
});

const Filter = styled.button({
  height: 32,

  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
    borderColor: 'transparent',
  },

  '&:focus > div': {
    borderBottom: `2px solid ${colors.green}`,
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
      ? `2px solid ${colors.green}`
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
      router.push(`/${value}`);
    };
  }

  return (
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
  );
}
