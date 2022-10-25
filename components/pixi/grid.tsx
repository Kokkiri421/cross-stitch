import React from 'react';
import Cell from './Cell';

interface GridCellProps {
  cols: number;
  rows: number;
  size: number;
  scale: number;
}

const CanvasGrid: React.FC<GridCellProps> = ({ cols, rows, size, scale }) => {
  const COLOR = 0x123123;

  return (
    <>
      {[...Array(cols * rows).keys()].map((i: number) => (
        <Cell
          key={i}
          x={(i % cols) * size}
          y={Math.floor(i / cols) * size}
          size={size}
          color={COLOR}
          scale={scale}
        />
      ))}
    </>
  );
};

export default CanvasGrid;
