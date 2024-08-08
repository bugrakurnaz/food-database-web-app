<template>
  <aside class="uk-sidebar">
    <div class="uk-container">
      <h1 class="uk-text-center">Foot Database - Web Server</h1>
      <ul class="uk-nav uk-nav-default">
        <li><router-link to="/item-types" class="uk-nav-link">Item Types</router-link></li>
        <li><router-link to="/items" class="uk-nav-link">Items</router-link></li>
        <li><router-link to="/stored-items" class="uk-nav-link">Stored Items</router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped>
.uk-sidebar {
  width: 250px;
  background: #f8f9fa;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #dee2e6;
}

.uk-sidebar .uk-container {
  padding-top: 20px;
}

.uk-sidebar h1 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.uk-nav-default .uk-nav-link {
  font-size: 1.2rem;
  padding: 10px 20px;
  color: #007bff;
}

.uk-nav-default .uk-nav-link:hover {
  background: #e9ecef;
  color: #0056b3;
}
</style>
