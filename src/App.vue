<template>
  <div v-if="layoutStore.baseLoader" class="flex justify-center items-center" style="height: 100vh">
      <q-spinner-ios color="red" size="40px" />
  </div>
  <router-view />
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useLayoutStore} from "stores/layout";

const layoutStore = useLayoutStore();

onMounted(() => {
  layoutStore.baseLoader = true
})
</script>
