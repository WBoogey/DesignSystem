import Form from '../components/Form.vue';
import '../style.css';

export default {
  title: 'Components/Form',
  component: Form,          
  tags: ['autodocs'],        
  argTypes: {
    onSubmit: { action: 'submitted' }, 
  },
  render: (args) => ({
    components: { Form },
    setup() {
      return { args };
    },
    template: '<Form v-bind="args" />', 
  }),
};

export const DefaultForm = {
  args: {
    fields: [
      {
        name: 'name',
        label: 'Nom',
        type: 'text',
        placeholder: 'Entrez votre nom',
      },
      {
        name: 'email',
        label: 'Adresse e-mail',
        type: 'email',
        placeholder: 'Entrez votre adresse e-mail',
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Entrez votre message',
      },
    ],
    button: {
      label: 'Envoyer',
      variant: 'primary',
    },
  },
};

export const LoginForm = {
  args: {
    fields: [
      {
        name: 'email',
        label: 'Adresse e-mail',
        type: 'email',
        placeholder: 'Entrez votre adresse e-mail',
      },
      {
        name: 'password',
        label: 'Mot de passe',
        type: 'password',
        placeholder: 'Entrez votre mot de passe',
      },
    ],
    button: {
      label: 'Se connecter',
      variant: 'primary',
    },
  },
};

export const ChangePasswordForm = {
  args: {
    fields: [
      {
        name: 'currentPassword',
        label: 'Mot de passe actuel',
        type: 'password',
        placeholder: 'Entrez votre mot de passe actuel',
      },
      {
        name: 'newPassword',
        label: 'Nouveau mot de passe',
        type: 'password',
        placeholder: 'Entrez votre nouveau mot de passe',
      },
      {
        name: 'confirmNewPassword',
        label: 'Confirmer le nouveau mot de passe',
        type: 'password',
        placeholder: 'Confirmez votre nouveau mot de passe',
      },
    ],
    button: {
      label: 'Changer le mot de passe',
      variant: 'secondary',
    },
  },
};
