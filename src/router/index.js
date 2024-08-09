import { createRouter, createWebHistory } from 'vue-router';
import ItemTypesView from '@/components/ItemTypesView.vue';
import StoredItemsView from '@/components/StoredItemsView.vue';
import ItemsView from '@/components/ItemsView.vue';

const routes = [
  { path: '/item-types', component: ItemTypesView },
  { path: '/items', component: ItemsView },
  { path: '/stored-items', component: StoredItemsView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
