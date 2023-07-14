<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand">
        <router-link to="/"><img src="../assets/logo.svg"></router-link>
      </a>
      <div class="d-flex">
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <div class="text-white  me-3"><i class="bi bi-search me-2"></i><span class="header-text">Поиск</span></div>
        </router-link>
        <router-link to="/favourites" style="text-decoration: none; color: inherit;">
          <div class="text-white "><i class="bi bi-heart me-2"></i><span class="header-text">Избранное</span></div>
        </router-link>
      </div>

    </div>
  </nav>
  <div class="wrapper container" v-dragscroll="true">
    <h1 class="text-center">Избранное</h1>

    <div class="photos" >
      <div class="photo"  v-for="photo in getFavours">
        <img
            :key="photo.id"
            :src="photo.url"
        />
      </div>

    </div>
  </div>
</template>

<script>
import {dragscroll} from 'vue-dragscroll'
import { mapGetters } from 'vuex';

export default {
  directives: {
    dragscroll
  },
  props: ['photos'],
  methods: {
    goToSinglePage(photo) {
      this.$store.commit('setPhoto', {selectedPhoto: photo})
    }
  },
  computed: {
    ...mapGetters(['getFavours']),
  },
};
</script>

<style scoped>
.wrapper {
  height: 600px;
  overflow-y: auto;
  padding-top: 114px;
}

.photos {
  column-count: 1;
}
.photo {
  margin-bottom: 5px;
}

img {
  width: 100%;
  border-radius: 5px;
}
nav {
  background: black;
  padding: 37px 0;
}
.link {
  cursor: pointer;
}
h1 {
  margin-bottom: 100px;
  font-size: 50px;
  font-weight: bold;
  color: black;
}
@media screen and (min-width: 576px) {
  .photos {
    column-count: 3;
  }
}
@media screen and (max-width: 768px) {
  .wrapper {
    padding-top: 40px;
  }
  .header-text {
    display: none;
  }
  .navbar i {
    font-size: 30px;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
  }
}
</style>
