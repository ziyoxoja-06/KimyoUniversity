import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    responsive: false,
    shortRout: '',
    pageLoader: false,
    baseLoader: false,
  }),
  getters: {
    getShortRout: (state) => state.shortRout
  },
  actions: {
    change() {
      this.responsive = !this.responsive;
    },
    newRoute(item='dynamic') {
      this.shortRout = item
},
  },
});
