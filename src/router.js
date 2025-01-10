import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './view/SignUp.vue';
import ForgotPassword from './view/UpdatePassword.vue';

const routes = [
  {
    path: '/', // Root path for SignUp page
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
