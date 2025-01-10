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
      description: "Type d'entrée (texte, mot de passe, email, nombre)",
    },
    placeholder: {
      control: 'text',
      description: 'Texte affiché en guise d’indication dans le champ',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactiver le champ d’entrée',
    },
    label: {
      control: 'text', 
      description: 'Texte de l’étiquette associée au champ',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte affiché pour indiquer une erreur',
    },
  },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" />', 
  }),
};

export const Default = {
  args: {
    type: 'text',
    placeholder: 'Enter text here',
    label: 'Label:',
    disabled: false,
    errorMessage: '', 
  },
};

export const WithError = {
  args: {
    ...Default.args, 
    errorMessage: 'Error message', 
  },
};

export const Password = {
  args: {
    ...Default.args,
    type: 'password', 
    label: 'Password:',
    placeholder: 'Enter your password',
  },
};

export const Email = {
  args: {
    ...Default.args,
    type: 'email', 
    label: 'Email:',
    placeholder: 'Enter your email',
  },
};
