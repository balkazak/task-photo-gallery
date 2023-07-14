<template>
  <div class="wrapper container" v-dragscroll="true">
    <pre>{{this.$store.state}}</pre>
    <div class="photos"  v-for="photo in getFavours">
      <img
          :key="photo.id"
          :src="photo.url"
      />
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

@media screen and (min-width: 576px) {
  .photos {
    column-count: 3;
  }
}
</style>
