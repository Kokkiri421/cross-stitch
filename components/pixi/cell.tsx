import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

interface CanvasCellProps {
  x: number;
  y: number;
  size: number;
  color: number;
  scale: number;
}

const CanvasCell: React.FC<CanvasCellProps> = ({
  x,
  y,
  size,
  color,
  scale,
}) => {
  const CELL_BORDER_WIDTH = 1;

  const draw = useCallback(
    (g: PIXI.Graphics) => {
      g.clear();
      g.lineStyle(CELL_BORDER_WIDTH / scale, color);
      g.drawRect(x, y, size, size);
    },
    [x, y, size, color, scale]
  );

  return <Graphics draw={draw} />;
};

export default CanvasCell;
