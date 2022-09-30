import React, { useCallback } from "react";
import { Graphics } from '@inlet/react-pixi';
import * as PIXI from "pixi.js";

const CELL_BORDER_WIDTH = 1;

interface CanvasCellProps {
  x: number,
  y: number,
  width: number,
  height: number
  color: number,
};

const CanvasCell: React.FC<CanvasCellProps> = ({x, y, width, height, color}) => {
  const draw = useCallback((g: PIXI.Graphics) => {
    g.clear();
    g.lineStyle(CELL_BORDER_WIDTH, color);
    g.drawRect(x, y, width, height);
  }, [x, y, width, height, color]);

  return <Graphics draw={draw}/>;
}

export default CanvasCell;