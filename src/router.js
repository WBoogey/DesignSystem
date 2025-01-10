import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './view/SignUp.vue';
import UpdatePassword from './view/UpdatePassword.vue'; // Use the correct import

const routes = [
  {
    path: '/', // Root path for the SignUp page
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/update-password', // Lowercase and hyphen-separated
    name: 'UpdatePassword',
    component: UpdatePassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
