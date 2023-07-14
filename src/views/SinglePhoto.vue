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
  <div class="single-image">
    <div class="container">
      <div class="header">
        <div class="author">
          <div class="image" :style="{ backgroundImage: 'url(' + this.$store.getters.getPhoto.user.profile_image.large + ')' }">

          </div>
          <div class="author--info">
            <h2 class="m-0">{{ this.$store.getters.getPhoto.user.name }}</h2>
            <h5>@{{ this.$store.getters.getPhoto.user.instagram_username }}</h5>
          </div>
        </div>
        <div class="tools">
          <button v-if="isFavorite" @click="makeFavorite" type="button" class="btn btn-light btn-lg text-dark me-3 like">
            <i class="bi bi-heart-fill text-danger"></i>
          </button>
          <button v-else @click="makeFavorite" type="button" class="btn btn-light btn-lg text-dark me-3 like">
            <i class="bi bi-heart"></i>
          </button>
          <a target="_blank" :href="this.$store.getters.getPhoto.urls.raw" download="myimage" type="button" class="btn btn-warning btn-lg text-dark">
            <i class="bi bi-download me-md-2"></i>
            <span class="download">Download</span>
          </a>
        </div>
      </div>
      <img :src="this.$store.getters.getPhoto.urls.raw" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePhoto',
  data() {
    return {
    };
  },
  computed: {
    isFavorite() {
      if (this.$store.getters.getFavours.some(e => e.id === this.$store.getters.getPhoto.id)){
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    makeFavorite() {
      this.isFavorite = !this.isFavorite
      this.$store.commit('addToFav', { id: this.$store.getters.getPhoto.id, url: this.$store.getters.getPhoto.urls.raw})
    }
  }
};
</script>

<style scoped>
.author {
  display: flex;
  align-items: center;
}
.image {
  width: 55px;
  height: 55px;
  border: 1px solid white;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.header {
  margin-bottom: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.single-image {
  padding: 43px;
  background: url("../assets/images/bg-about-photo-page.png");
  background-repeat: no-repeat;
  background-size: contain;
}
img {
  max-width: 100%;
  max-height: 60vh;
  margin: 0 auto;
  display: block;
}

nav {
  background: black;
  padding: 37px 0;
}
.link {
  cursor: pointer;
}
.author--info {
  color: white;
}
@media screen and (max-width: 768px) {
  .single-image {
    padding: 43px;
    background: none;
  }
  .author--info {
    color: black;
  }
  .author--info h5 {
    color: darkgrey;
  }
  .like {
    border: 1px solid darkgrey;
  }
  .download, .header-text {
    display: none;
  }
  .navbar i {
    font-size: 30px;
  }
}
</style>
