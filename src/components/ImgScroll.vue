<script setup>
import {defineProps, computed, ref} from "vue";
const slide = ref(1)
const  props = defineProps({
  autoplay: {
    type:  Boolean,
    default: false
  },
  imgSrc: {
    type:  Array,
    default: () => []
  }
})
</script>

<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    autoplay
    arrows
    transition-prev="jump-right"
    transition-next="jump-right"

    style="height: 100%"
  >
    <q-carousel-slide v-for="(item,i) in imgSrc" :name="i" style="filter: brightness(100%)" :img-src="item" />
  </q-carousel>
</template>



<style scoped>

</style>
