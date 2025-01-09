import Form from '../components/Form.vue';
import '../style.css';

export default {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' }
  },
};

const Template = (args) => ({
  components: { Form },
  setup() {
    const handleSubmit = (formData) => {
      console.log('Form submitted:', formData);
      args.onSubmit(formData);
    };

    return { args, handleSubmit };
  },
  template: '<Form v-bind="args" @submit="handleSubmit" />',
});

export const DefaultForm = Template.bind({});
DefaultForm.args = {
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
    }
  ],
  button: {
    text: 'Envoyer',
    variant: 'primary',
  }
};

export const LoginForm = Template.bind({});
LoginForm.args = {
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
    }
  ],
  button: {
    text: 'Se connecter',
    variant: 'primary',
  }
};

export const ChangePasswordForm = Template.bind({});
ChangePasswordForm.args = {
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
    }
  ],
  button: {
    text: 'Changer le mot de passe',
    variant: 'secondary',
  }
};

