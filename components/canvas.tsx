import React, { useEffect, useState } from 'react';
import { Stage } from '@inlet/react-pixi';
import CanvasGrid from './pixi/grid';

const CanvasComponent = () => {
  const [renderClient, setRenderClient] = useState<boolean>(false);

  useEffect(() => {
    setRenderClient(true);
  }, []);

  return (
    <div>
      {renderClient && (
        <div>
          <Stage width={300} height={300}>
            <CanvasGrid cols={3} rows={3} size={20} />
          </Stage>
        </div>
      )}
    </div>
  );
};
export default CanvasComponent;
