import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ConfigView from './views/ConfigView.vue';
import ProjectCreate from './views/ProjectCreate.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/config', name: 'Config', component: ConfigView },
  { path: '/projects/create', name: 'ProjectCreate', component: ProjectCreate }
];

export default createRouter({ history: createWebHistory(), routes });