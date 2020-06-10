import styled from '@emotion/styled';
import { colors, breakpoints } from '../utils/styles';

const Filters = styled.div({
  // padding: '0 12px',
  width: '100%',
  // maxWidth: 600,
  // margin: 'auto',

  '> button': {
    marginLeft: 16,
  },

  '> button:first-of-type': {
    marginLeft: 0,
  },
});

const Filter = styled.button({
  height: 36,

  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
    borderColor: 'transparent',
  },

  '&:focus > div': {
    borderBottom: `2px solid ${colors.black}`,
  },
});

const FilterText = styled.div(
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    fontSize: 14,

    [breakpoints.mobile]: {
      fontSize: 13,
    },
  },
  (props: any) => ({
    color: props.isActive ? colors.purple : colors.green,
    borderBottom: props.isActive
      ? `2px solid ${colors.black}`
      : `2px solid ${colors.transparent}`,
    fontWeight: props.isActive ? 500 : 500,
  }),
);

const tabs = [
  { value: 'expertise', displayName: 'Expertise' },
  { value: 'publications', displayName: 'Publications' },
  { value: 'highlights', displayName: 'Highlights' },
  { value: 'blog', displayName: 'Blog' },
];

export default function HeaderTabs({ selectedTab, setSelectedTab }) {
  function onTabClick(value) {
    return function (event) {
      event.preventDefault();
      setSelectedTab(value);
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
