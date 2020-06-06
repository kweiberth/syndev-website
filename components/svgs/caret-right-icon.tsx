import React from 'react';
import { colors } from '../../utils/styles';

const viewBoxWidth = 23;
const viewBoxHeight = 41;

const SVG = ({
  height,
  color = colors.white,
}: {
  height: number;
  color?: string;
}) => {
  const width = (viewBoxWidth / viewBoxHeight) * height;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    >
      <path
        d="M0 37.6025V2.99315C0 0.596682 2.89747 -0.603435 4.592 1.09109L21.8967 18.3958C22.9471 19.4462 22.9471 21.1495 21.8967 22.1999L4.592 39.5046C2.89747 41.1992 0 39.999 0 37.6025Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo<{ height: number; color?: string }>(SVG);
