import React from 'react';
import { colors } from '../../utils/styles';

const viewBoxWidth = 215;
const viewBoxHeight = 208;

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
        d="M114.663 24.0783C110.202 21.5351 104.706 21.5396 100.242 24.1166L41.7713 57.8747C37.3077 60.4517 34.5556 65.2096 34.5273 70.3449L34.2434 137.369C34.2192 142.572 37.0088 147.404 41.5416 150.01L99.7283 183.276C104.19 185.82 109.686 185.815 114.15 183.238L172.62 149.48C177.084 146.903 179.836 142.145 179.864 137.01L180.148 69.9854C180.173 64.7828 177.383 59.9511 172.85 57.3446L114.663 24.0783V24.0783Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo<{ height: number; color?: string }>(SVG);
