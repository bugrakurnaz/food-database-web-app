import { createRouter, createWebHistory } from 'vue-router';
import ItemTypesView from '../components/ItemTypesView.vue';
import ItemsView from '../components/ItemsView.vue';

const routes = [
  { path: '/item-types', component: ItemTypesView },
  { path: '/items', component: ItemsView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
