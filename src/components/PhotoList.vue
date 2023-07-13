<template>
  <div class="wrapper container" v-dragscroll="true">
    <div class="photos" >
      <PhotoItem
        v-for="photo in photos"
        :key="photo.id"
        :alt="photo.alt_description"
        :image-url="photo.urls.thumb"
      />
    </div>
  </div>
</template>

<script>
import PhotoItem from './PhotoItem.vue';
import { dragscroll } from 'vue-dragscroll'
export default {
  directives: {
    dragscroll
  },
  components: { PhotoItem },
  props: ['photos'],
};
</script>

<style scoped>
.wrapper {
  height: 600px;
  overflow-y: auto;
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
