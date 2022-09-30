import React, { useEffect, useState } from 'react';
import { Stage } from '@inlet/react-pixi';
import CanvasCell from './pixi/cell';

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
            <CanvasCell x={0} y={0} width={100} height={100} color={0x134123}/>
          </Stage>
        </div>
      )}
    </div>
  );
};
export default CanvasComponent;
