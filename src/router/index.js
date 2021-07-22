import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },

  { path: '/cinemas', component: () => import('../views/Cinemas.vue') },
  { path: '/tickets', component: () => import('../views/Tickets.vue') },
  { path: '/movies/:id', component: () => import('../views/Movie.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
