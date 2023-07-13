<template>
  <div class="search">
    <div class="container">
      <div class="col-lg-6 offset-lg-3">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Поиск" v-model="searchText" @input="getSearchText">
          <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  emits: ['submit'],
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    getSearchText(evt) {
      const input = evt.target;

      let handle = input.dataset.handle;
      if (handle) {
        clearTimeout(handle);
      }

      handle = setTimeout(() => {
        if (this.searchText) {
          this.$emit('submit', this.searchText);
        }
      }, 1000);

      input.dataset.handle = handle;
    },
  },
};
</script>

<style scoped>

.form-control {
  border-right: none;
}
.search {
  padding: 100px 0;
  background: url("../assets/images/background-main.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
input:focus, input:active {
  outline: none !important;
  box-shadow: none;
}
</style>
