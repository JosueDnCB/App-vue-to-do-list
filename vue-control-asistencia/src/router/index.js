import { createRouter, createWebHistory } from 'vue-router';
import VistaPrincipal from '../components/plataforma/BarraLateral.vue'; // Ruta a tu vista principal

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: VistaPrincipal
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

