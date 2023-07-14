<script setup>
defineProps({

})
</script>

<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand">
        <router-link to="/"><img src="../assets/logo.svg"></router-link>
      </a>
      <router-link to="/favourites">
        <div class="text-white link"><i class="bi bi-heart me-2"></i>Избранное</div>
      </router-link>

    </div>
  </nav>
</template>

<style scoped>
  nav {
    background: black;
    padding: 37px 0;
  }
  .link {
    cursor: pointer;
  }
</style>
