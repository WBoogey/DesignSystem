import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

module.exports = {
    staticDirs: ['public'],
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
    ],
    framework: '@storybook/vue3',
  };
  