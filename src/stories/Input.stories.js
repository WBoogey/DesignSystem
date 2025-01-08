import Input from '../components/Input.vue';

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
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
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
  placeholder: 'Entrez votre texte ici',
  disabled: false,
  backgroundColor: 'var(--color-background-section)',
  color: 'var(--color-text-tertiary)',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  ...Default.args,
  type: 'password',
  placeholder: 'Entrez votre mot de passe',
};

export const Email = Template.bind({});
Password.args = {
  ...Default.args,
  type: 'email',
  placeholder: 'Entrez votre email',
};



