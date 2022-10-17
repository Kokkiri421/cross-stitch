import React from 'react';
import CanvasCell from './cell';

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
        <CanvasCell
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
