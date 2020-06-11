import React from 'react';
import { colors } from '../../utils/styles';

const viewBoxWidth = 100;
const viewBoxHeight = 100;

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
      <circle cx="50" cy="50" r="50" fill={color} />
    </svg>
  );
};

export default React.memo<{ height: number; color?: string }>(SVG);
