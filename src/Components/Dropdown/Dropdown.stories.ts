import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs']
} as Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
  args: {
    kind: 'isSingleSelect',
    options: []
  }
};

export const MultiSelect: Story = {
  args: {
    kind: 'isMultiSelect',
    options: []
  }
};
