<template>
    <div class="uk-offcanvas-content">
        <dockview-vue
        @ready="onReady"
      >
      </dockview-vue>
    </div>
  </template>
  
  <script>
    import ItemTypesView from './ItemTypesView.vue';
    export default {
        name: 'DockView',
        components: ItemTypesView,
        methods: {
            onReady(event) {
                event.api.addPanel({
                    id: 'ItemTypes',
                    component: 'ItemTypesView'
                });
            }
        }
        };
  </script>
  
  <style scoped>

  </style>
  