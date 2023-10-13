<script setup lang="ts">
  import AboutUniversity from 'src/components/AboutUniversity.vue'
  import { onMounted, onUnmounted, ref } from "vue";
import { useLayoutStore } from "../../../stores/layout";
const layoutStore = useLayoutStore();
onMounted(() => {
  layoutStore.pageLoader = false;
});
onUnmounted(() => {
  layoutStore.pageLoader = true;
});
</script>

<template>
  <about-university />
</template>
