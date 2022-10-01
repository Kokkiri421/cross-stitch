import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';
import CanvasCell from './cell';

interface GridCellProps {
  cols: number;
  rows: number;
  size: number;
}

const CanvasGrid: React.FC<GridCellProps> = ({ cols, rows, size }) => {
  const COLOR = 0x123123;

  return (
    <>
      {[...Array(cols * rows).keys()].map((i: number) => (
        <CanvasCell
          x={(i % cols) * size}
          y={Math.floor(i / cols) * size}
          size={size}
          color={COLOR}
        />
      ))}
    </>
  );
};

export default CanvasGrid;
