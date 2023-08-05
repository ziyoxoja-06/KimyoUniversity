import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    responsive: false,
    shortRout: '',
    pageLoader: false,
    baseLoader: false
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
      console.log('change-3')
},
    pageLoaderChanger(){
      this.pageLoader = !this.pageLoader
      console.log(this.pageLoader)
    }
  },
});
