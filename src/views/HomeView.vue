<template>
  <main>
    <Search @submit="doSearch" />
    <PhotoList :photos="result" ref="photoList" />
  </main>
</template>

<script>
  import { createApi } from 'unsplash-js';

  import PhotoList from '@/components/PhotoList.vue';
  import Search from '@/components/Search.vue';

  const unsplash = new createApi({
  accessKey: '6EDa9a-3_m4AAlY1VrW6DT1GBBqG2eJ8KUtxcY_bfS4',
});

  export default {
  name: 'TheSearchForm',
  components: { Search, PhotoList },
  data() {
  return {
  result: [],
  currentPage: 1,
  query: '',
};
},
  methods: {
  async doSearch(searchText) {
  this.result = [];

  const result = await unsplash.search.getPhotos({
  query: searchText,
  perPage: 20,
});

  if (result.status === 200) {
  this.result = result.response.results;

  this.currentPage++;
  this.query = searchText;
}
},

  async loadMore() {
  const result = await unsplash.search.getPhotos({
  query: this.query,
  perPage: 10,
  page: this.currentPage,
});

  if (result.status === 200) {
  result.response.results.forEach((item) => {
  this.result.push(item);
});

  this.currentPage++;
}
},
},
  mounted() {
  const listElm = this.$refs.photoList.$el;
  listElm.addEventListener('scroll', () => {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
  this.loadMore();
}
});
},
};
</script>


<style scoped>

</style>