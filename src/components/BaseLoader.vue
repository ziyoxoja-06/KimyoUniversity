<script setup>
  import {useLayoutStore} from "../stores/layout";
  const layoutStore = useLayoutStore()
</script>

<template>
  <div v-if="layoutStore.baseLoader" class="flex justify-center items-center" style="height: 100vh">
    <q-spinner-ios color="red" size="40px" />
  </div>
</template>

