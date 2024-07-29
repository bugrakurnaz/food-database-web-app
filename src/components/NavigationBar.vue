<template>
  <div class="uk-offcanvas-content">
    <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-nav-primary">
      Open Navigation
    </button>

    <div id="offcanvas-nav-primary" uk-offcanvas="mode: reveal; overlay: true">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li class="uk-active"><a href="#">Active</a></li>
          <li class="uk-parent">
            <a href="#">Parent</a>
            <ul class="uk-nav-sub">
              <li><a href="#">Sub item</a></li>
              <li><a href="#">Sub item</a></li>
            </ul>
          </li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped>
.uk-offcanvas-bar {
  width: 250px;
}
</style>
