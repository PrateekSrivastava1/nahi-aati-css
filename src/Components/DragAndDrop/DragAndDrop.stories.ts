import type { Meta, StoryObj } from '@storybook/react';

import DragAndDrop from './DragAndDrop';

const meta = {
  title: 'Components/DragAndDrop',
  component: DragAndDrop,
  tags: ['autodocs']
} as Meta<typeof DragAndDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
