import Icon from '../components/Icon.vue';
import '../style.css';

export default {
  title: 'Components/Icon', 
  component: Icon,         
  tags: ['autodocs'],      
  argTypes: {
    name: {
      control: 'select',
      options: ['user', 'profil', 'eye-open', 'eye-slash'],
      description: "Nom de l'icône à afficher",
    },
    size: {
      control: { type: 'number', min: 16, max: 64, step: 4 },
      description: "Taille de l'icône en pixels",
    },
  },
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: '<Icon v-bind="args" />', 
  }),
};

export const Default = {
  args: {
    name: 'user',
    size: 24,     
  },
};

export const eyeSlash = {
  args: {
    name: 'eye-slash', 
    size: 48,       
  },
};
export const eyeOpen = {
  args: {
    name: 'eye-open', 
    size: 48,       
  },
};
