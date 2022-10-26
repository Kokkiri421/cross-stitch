import React, { useRef } from 'react';
import { Container, Stage } from '@inlet/react-pixi';
import { observer } from 'mobx-react-lite';
import Grid from '../Grid';
import useCanvasCamera from '../../../hooks/useCanvasCamera';
import cameraStore from '../../../stores/cameraStore';

export const Canvas = observer(() => {
  const ref = useRef<HTMLDivElement>(null);
  useCanvasCamera(ref);

  return (
    <div ref={ref}>
      <Stage
        width={300}
        height={300}
        raf={false}
        renderOnComponentChange
        options={{ autoStart: true }}
      >
        <Container
          {...{
            width: 300,
            height: 300,
            x: 10,
            y: 20,
            scale: cameraStore.cameraProperties.zoom,
          }}
        >
          <Grid
            cols={3}
            rows={3}
            size={20}
            scale={cameraStore.cameraProperties.zoom}
          />
        </Container>
      </Stage>
    </div>
  );
});
