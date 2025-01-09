import Form from '../components/Form.vue';
import '../style.css';

export default {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
  
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

};

export const connexionForm = Template.bind({});
connexionForm.args = {

};

export const forgetPasswordForm = Template.bind({});
forgetPasswordForm.args = {

};


