import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');

//module.exports = {
//    staticDirs: ['public'],
//    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
//    addons: [
//      '@storybook/addon-links',
//      '@storybook/addon-essentials',
//    ],
//    framework: '@storybook/vue3',
//  };