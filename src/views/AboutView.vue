<template>
  <div class="single-image">
    <div class="container">
      <div class="header">
        <div class="author">
          <div class="image" :style="{ backgroundImage: 'url(' + this.$store.getters.getPhoto.user.profile_image.large + ')' }">

          </div>
          <div class="text-white">
            <h2 class="m-0">{{ this.$store.getters.getPhoto.user.name }}</h2>
            <h5>@{{ this.$store.getters.getPhoto.user.instagram_username }}</h5>
          </div>
        </div>
        <div class="tools">
          <button v-if="isFavorite" @click="makeFavorite" type="button" class="btn btn-light btn-lg text-dark me-3"><i class="bi bi-heart-fill text-danger"></i></button>
          <button v-else @click="makeFavorite" type="button" class="btn btn-light btn-lg text-dark me-3"><i class="bi bi-heart"></i></button>
          <a target="_blank" :href="this.$store.getters.getPhoto.urls.raw" download="myimage" type="button" class="btn btn-warning btn-lg text-dark"><i class="bi bi-download me-2"></i>Download</a>
        </div>
      </div>
      <img :src="this.$store.getters.getPhoto.urls.raw" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      isFavorite: false
    };
  },
  methods: {
    makeFavorite() {
      this.isFavorite = !this.isFavorite
      this.$store.commit('addToFav', { id: this.$store.getters.getPhoto.id, url: this.$store.getters.getPhoto.urls.raw})

    }
  },
  mounted() {

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
@media (min-width: 1024px) {

}
</style>
