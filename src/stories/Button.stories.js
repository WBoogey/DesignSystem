import Button from '../components/Button.vue';
import { fn } from '@storybook/test';
import '../style.css';

export default {
  title: 'Components/Button',
  component: Button, 
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' }, 
      options: ['primary', 'secondary', 'tertiary'], 
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }, 
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }; 
    },
    template: '<Button v-bind="args" />', 
  }),
  args: {
    onClick: fn(),
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label:"Primary Button",
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const Danger = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary Button',
  },
};
