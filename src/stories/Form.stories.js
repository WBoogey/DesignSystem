import Form from '../components/Form.vue';

export default {
  title: 'Example/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    formFields: {
      control: 'object',
      description: 'Array of input field configurations for the form',
    },
    button: {
      control: 'object',
      description: 'Configuration for the form submit button',
    },
    onSubmit: {
      action: 'submit',
      description: 'Function triggered when the form is submitted',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Form },
  setup() {
    return { args };
  },
  template: '<Form v-bind="args" @submit="args.onSubmit" />',
});

export const Default = Template.bind({});
Default.args = {
  formFields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      disabled: false,
      backgroundColor: '#f9f9f9',
      color: '#000',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      disabled: false,
      backgroundColor: '#f9f9f9',
      color: '#000',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      disabled: false,
      backgroundColor: '#f9f9f9',
      color: '#000',
    },
  ],
  button: {
    label: 'Submit',
    backgroundColor: '#007bff',
    color: '#fff',
    disabled: false,
  },
  onSubmit: (formData) => {
    alert(JSON.stringify(formData, null, 2));
  },
};
