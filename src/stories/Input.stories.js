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
  content: '',
  placeholder: 'Entrez votre texte ici',
  disabled: false,
  label: 'Champ de texte',
  backgroundColor: 'var(--color-background-section)',
  color: 'var(--color-text-tertiary)',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  ...Default.args,
  label: '',
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
  label: 'Mot de passe',
};

export const Email = Template.bind({});
Password.args = {
  ...Default.args,
  type: 'email',
  placeholder: 'Entrez votre email',
};



