import SvgIcon from '../components/SvgIcon.vue';

export default {
  title: 'Components/SvgIcon',
  component: SvgIcon,
  argTypes: {
    name: { control: 'text' },
    customClass: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { SvgIcon },
  setup() {
    return { args };
  },
  template: '<SvgIcon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: 'eye-open', // This references the id in the sprite
  customClass: 'custom-class',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  name: 'eye-open',
  customClass: 'custom-class',
};
