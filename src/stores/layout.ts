import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    responsive: false,
    shortRout: '',
  }),
  getters: {
    getShortRout: (state) => state.shortRout
  },
  actions: {
    change() {
      this.responsive = !this.responsive;
    },
    newRoute(item='dynamic') {
      console.log('change-2')
      this.shortRout = item
}
  },
});
