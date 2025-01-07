import { Placeholder } from 'storybook/internal/components';
import input from '../components/Input.vue';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Input',
  component: input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const Default = {
  args: {
    primary: true,
    placeholder: 'string',
  },
};