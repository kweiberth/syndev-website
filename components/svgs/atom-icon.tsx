import React from 'react';
import { colors } from '../../utils/styles';

const viewBoxWidth = 576;
const viewBoxHeight = 512;

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
        fill={color}
        d="M441.5 39.8C432.9 25.1 417.1 16 400 16H176c-17.1 0-32.9 9.1-41.5 23.8l-112 192c-8.7 14.9-8.7 33.4 0 48.4l112 192c8.6 14.7 24.4 23.8 41.5 23.8h224c17.1 0 32.9-9.1 41.5-23.8l112-192c8.7-14.9 8.7-33.4 0-48.4l-112-192zM400 448H176L64 256 176 64h224l112 192-112 192z"
      ></path>
    </svg>
  );
};

export default React.memo<{ height: number; color?: string }>(SVG);
