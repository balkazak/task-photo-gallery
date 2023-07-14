import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    selectedPhoto : '',
    favourites: []
  },

  actions: {

  },

  mutations: {
    setPhoto(state, { selectedPhoto }) {
      state.selectedPhoto = selectedPhoto
    },
    addToFav: (state, picture) => {
      if (state.favourites.some(e => e.id === picture.id)){
        function removeObjectWithId(arr, id) {
          return arr.filter((obj) => obj.id !== id);
        }
        state.favourites = removeObjectWithId(state.favourites, picture.id);
      } else {
        state.favourites.push(picture)
      }
    }
  },

  getters: {
    getPhoto(state) {
      return state.selectedPhoto
    },
  }

})

export default store