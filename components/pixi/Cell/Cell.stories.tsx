import React from 'react';
import { Container, Stage } from '@inlet/react-pixi';
import { useState, useEffect } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Cell } from './Cell';

export default {
  title: 'Cell',
  component: Cell,
} as ComponentMeta<typeof Cell>;

const CellTemplate: ComponentStory<typeof Cell> = (args) => {
  const [renderClient, setRenderClient] = useState<boolean>(false);

  useEffect(() => {
    setRenderClient(true);
  }, []);

  return (
    <div>
      {renderClient && (
        <Stage>
          <Container
            {...{
              width: 300,
              height: 300,
              x: 10,
              y: 10,
              scale: 1,
            }}
          >
            <Cell {...args} />
          </Container>
        </Stage>
      )}
    </div>
  );
};

export const CanvasCell = CellTemplate.bind({});

CanvasCell.args = {
  x: 0,
  y: 0,
  size: 10,
  color: 0xffffff,
  scale: 1,
};
