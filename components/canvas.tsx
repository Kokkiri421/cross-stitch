import React, { useEffect, useState } from 'react';
import { Stage } from '@inlet/react-pixi';

const CanvasComponent = () => {
  const [renderClient, setRenderClient] = useState<boolean>(false);

  useEffect(() => {
    setRenderClient(true);
  }, []);

  return (
    <div>
      {renderClient && (
        <div>
          <Stage width={300} height={300}/>
        </div>
      )}
    </div>
  );
};
export default CanvasComponent;
