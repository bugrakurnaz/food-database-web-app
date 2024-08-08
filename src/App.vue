<template>
  <div id="app" class="uk-grid uk-grid-collapse">
    <NavigationBar />
    <div class="uk-width-expand uk-padding" uk-height-viewport>
      <router-view />
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

import NavigationBar from './components/NavigationBar.vue';
import ItemTypesView from './components/ItemTypesView.vue';
import ItemsView from './components/ItemsView.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    ItemTypesView,
    ItemsView
  }
};


</script>

<style lang="less">
    @import "../node_modules/uikit/src/less/uikit.less";
</style>
