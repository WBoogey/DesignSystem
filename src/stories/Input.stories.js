import { components } from 'storybook/internal/components';
import Input from '../components/Input.vue';
import '../style.css';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter text here',
  label: 'Label:',
  disabled: false,
  errorMessage: '',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMessage: 'Error message',
};

export const Password = Template.bind({});
Password.args = {
  ...Default.args,
  type: 'password',
  label: 'Password:',
  placeholder: 'Enter your password',
};

export const Email = Template.bind({});
Email.args = {
  ...Default.args,
  type: 'email',
  label: 'Email:',
  placeholder: 'Enter your email',
};