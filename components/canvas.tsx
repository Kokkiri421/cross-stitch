import React, { useEffect, useRef, useState } from 'react';
import { Container, Stage } from '@inlet/react-pixi';
import { observer } from 'mobx-react-lite';
import CanvasGrid from './pixi/grid';
import useCanvasCamera from '../hooks/useCanvasCamera';
import cameraStore from '../stores/cameraStore';

const CanvasComponent = observer(() => {
  const [renderClient, setRenderClient] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useCanvasCamera(ref);

  useEffect(() => {
    setRenderClient(true);
  }, []);

  return (
    <div ref={ref}>
      {renderClient && (
        <Stage width={300} height={300} raf={false} renderOnComponentChange>
          <Container
            {...{
              width: 300,
              height: 300,
              x: 10,
              y: 20,
              scale: cameraStore.cameraProperties.zoom,
            }}
          >
            <CanvasGrid
              cols={3}
              rows={3}
              size={20}
              scale={cameraStore.cameraProperties.zoom}
            />
          </Container>
        </Stage>
      )}
    </div>
  );
});
export default CanvasComponent;
