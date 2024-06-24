import { createRouter, createWebHistory } from 'vue-router';
import WeatherWidget from '../components/WeatherWidget.vue';

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/tugas1', redirect: () => { window.open('https://fatih-project-cv.netlify.app'); } },
  { path: '/tugas2', redirect: () => { window.open('https://fatih-project-tugas2.netlify.app'); } },
  { path: '/tugas3', redirect: () => { window.open('https://tugas3-pbk-2420640.netlify.app'); } },
  { path: '/tugas4', redirect: () => { window.open('https://github.com/pathannnn/tugas4-pbk-2420640'); } },
  { path: '/tugas5', redirect: () => { window.open('https://tugas5-2420640-fatihmasrukhan.netlify.app'); } },
  { path: '/tugas6', redirect: () => { window.open('https://tugas6-2420640-fatihmasrukhan.netlify.app'); } },
  { path: '/tugas7', redirect: () => { window.open('https://tugas7-pbk-2420640.netlify.app'); } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
