<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";
const layoutStore = useLayoutStore();
onMounted(() => {
  layoutStore.pageLoader = false
})

</script>

<template>
  <h3 class="text-center text-weight-bold">Structure</h3>
  <q-img width="100%"  class=" q-pa-md" src="src/assets/img/tashkiliy_tuzilma.jpg" alt="img" />
</template>

<style scoped>

</style>
