<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useLayoutStore} from "../stores/layout";

const layoutStore = useLayoutStore();
const images = [
  "src/static/img/tashkiliy_tuzilma.jpg",
  "src/static/img/carusel_1.jpg",
  "src/static/img/carusel_2.jpg",
  "src/static/img/carusel_3.jpg",
]
const screenSize = ref({width: window.innerWidth, height: window.innerHeight});
const updateScreenSize = () => {
  screenSize.value = {width: window.innerWidth, height: window.innerHeight};
};
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  layoutStore.pageLoader = false;
});
onUnmounted(()=>{
  layoutStore.pageLoader = true
})
</script>

<template>
  <div class="row justify-center q-my-lg"  style="width: 100%">
    <div class="col-12 col-sm-5 col-md-3 col-lg-2 col-xl-2 q-mx-sm q-my-sm img" v-for="image in images">
      <q-img class="img" :src="image" width="100%" height="230px" />
    </div>
  </div>
</template>

<style scoped>
.left{
  width: 80%;
  margin-left: 10%;
}
.img{
  border-radius: 10px;
  border: 1px solid grey;
}
</style>
