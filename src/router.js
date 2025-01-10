import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './Views/SignU.vue';
import ForgotPassword from './Views/UpdatePassword.vue';

const routes = [
  {
    path: '/', 
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/UpdatePassword',
    name: 'UpdatePassword',
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
