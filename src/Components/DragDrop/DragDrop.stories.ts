import type { Meta, StoryObj } from '@storybook/react';

import DragDrop from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/DragDrop',
  component: DragDrop,
  tags: ['autodocs'],
} as Meta<typeof DragDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

