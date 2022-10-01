import React, { useCallback } from "react";
import { Graphics } from '@inlet/react-pixi';
import * as PIXI from "pixi.js";

interface CanvasCellProps {
  x: number,
  y: number,
  size: number,
  color: number,
};

const CanvasCell: React.FC<CanvasCellProps> = ({x, y, size, color}) => {
  const CELL_BORDER_WIDTH = 1;

  const SCALE = 1;

  const draw = useCallback((g: PIXI.Graphics) => {
    g.clear();
    g.lineStyle(CELL_BORDER_WIDTH / SCALE, color);
    g.drawRect(x, y, size, size);
  }, [x, y, size, color]);

  return <Graphics draw={draw} scale={SCALE}/>;
}

export default CanvasCell;