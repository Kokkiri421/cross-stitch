import React, { useState, useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Canvas from '.';

const CanvasTemplate: React.FC = () => {
  const [renderClient, setRenderClient] = useState<boolean>(false);

  useEffect(() => {
    setRenderClient(true);
  }, []);

  return <div>{renderClient && <Canvas />}</div>;
};

export default {
  title: 'Canvas',
  component: CanvasTemplate,
} as ComponentMeta<typeof CanvasTemplate>;

const CanvasStoryTemplate: ComponentStory<typeof CanvasTemplate> = () => (
  <CanvasTemplate />
);

export const CanvasStory = CanvasStoryTemplate.bind({});
