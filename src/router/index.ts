import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import DrivingGame from '../views/DrivingGame.vue';
import ApproachGame from '../views/ApproachGame.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/driving-game', component: DrivingGame },
  { path: '/approach-game', component: ApproachGame }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;