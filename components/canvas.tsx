import React, { useEffect, useState } from 'react';
import { Container, Stage } from '@inlet/react-pixi';
import CanvasGrid from './pixi/grid';

const CanvasComponent = () => {
  const [renderClient, setRenderClient] = useState<boolean>(false);

  useEffect(() => {
    setRenderClient(true);
  }, []);

  return (
    <div>
      {renderClient && (
        <Stage width={300} height={300}>
          <Container {...{width: 300, height: 300, x: 10, y: 20, scale: 1}}>
            <CanvasGrid cols={3} rows={3} size={20} scale={1}/>
          </Container>
        </Stage>
      )}
    </div>
  );
};
export default CanvasComponent;
