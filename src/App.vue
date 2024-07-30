<template>
  <div id="app" class="uk-grid uk-grid-collapse">
    <NavigationBar />
    <div class="uk-width-expand uk-padding" uk-height-viewport>
      <DockView />
      <p>Hello</p>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

import NavigationBar from './components/NavigationBar.vue';
import DockView from './components/DockView.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    DockView
  }
};


</script>

<style lang="less">
    @import "../node_modules/uikit/src/less/uikit.less";
</style>
