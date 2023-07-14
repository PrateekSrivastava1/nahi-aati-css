import type { Meta, StoryObj } from '@storybook/react';

import Input  from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button: Story = {
  args: {
    type: 'button',
    value: "Button"
  },
};

export const Checkbox: Story = {
  args: {
    type: 'checkbox'
  },
};

export const Color: Story = {
    args: {
      type: 'color'
    },
  };
  export const Date: Story = {
    args: {
      type: 'date'
    },
  };
  export const Datetime: Story = {
    args: {
      type: 'datetime-local'
    },
  };
  export const Email: Story = {
    args: {
      type: 'email'
    },
  };
  export const File: Story = {
    args: {
      type: 'file'
    },
  };
  export const Hidden: Story = {
    args: {
      type: 'hidden'
    },
  };
  export const Image: Story = {
    args: {
      type: 'image'
    },
  };
  export const Month: Story = {
    args: {
      type: 'month'
    },
  };
  export const Number: Story = {
    args: {
      type: 'number'
    },
  };
  export const Password: Story = {
    args: {
      type: 'password'
    },
  };
  export const Radio: Story = {
    args: {
      type: 'radio'
    },
  };
  export const Range: Story = {
    args: {
      type: 'range'
    },
  };
  export const Reset: Story = {
    args: {
      type: 'reset'
    },
  };
  export const Search: Story = {
    args: {
      type: 'search'
    },
  };
  export const Submit: Story = {
    args: {
      type: 'submit',
      value: "Submit"
    },
  };
  export const Tel: Story = {
    args: {
      type: 'tel'
    },
  };
  export const Text: Story = {
    args: {
      type: 'text'
    },
  };
  export const Time: Story = {
      args: {
      type: 'time'
    },
  };
  export const Url: Story = {
    args: {
      type: 'url'
    },
  };
  export const Week: Story = {
    args: {
      type: 'week'
    },
  };
