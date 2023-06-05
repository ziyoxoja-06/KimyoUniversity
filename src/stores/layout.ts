import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('counter', {
  state: () => ({
    responsive: false,
  }),
  getters: {
  },
  actions: {
    change() {
      console.log('change');
      if(this.responsive) {
        this.responsive = false
      } else {
        this.responsive = true
      }
    },
  },
});
