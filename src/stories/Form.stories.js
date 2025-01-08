import Form from '../components/Form.vue';
import '../style.css';

export default {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    inputBackgroundColor: { control: 'color' },
    inputColor: { control: 'color' },
    buttonDisabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { Form },
  setup() {
    return { args };
  },
  template: '<Form v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  inputBackgroundColor: 'var(--color-background-section)',
  inputColor: 'var(--color-text-tertiary)',
  buttonDisabled: true,
};

export const EnabledButton = Template.bind({});
EnabledButton.args = {
  inputBackgroundColor: 'var(--color-background-section)',
  inputColor: 'var(--color-text-tertiary)',
  buttonDisabled: false,
};


