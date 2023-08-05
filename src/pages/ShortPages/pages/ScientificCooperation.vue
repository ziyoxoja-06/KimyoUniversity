<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";
const layoutStore = useLayoutStore();
onMounted(() => {
  layoutStore.pageLoader = false
})
onUnmounted(()=>{
  layoutStore.pageLoader = true
})
</script>

<template>
  <div>
    <p class="text-center q-py-md text-h5 text-weight-bold">SCIENTIFIC COUNCIL OF THE INSTITUTE</p>
    <p style="font-size: 16px;">
      A joint Russia-Uzbekistan international grant MRU-FA-58/2017 "Acoustic barriers for seismic protection:
      development
      of concepts, mathematical models and numerical algorithms" is conducted in the Institute. In 2018 a cooperation
      agreement with the University - Industrial Cooperation Center of the "Sun Moon" University of South Korea and
      Almaty
      University of Kazakhstan was concluded. For several years, the institute has scientific ties with the University
      of California in Berkeley (USA) and research centers in Russia, Ukraine, Kazakhstan, Kyrgyzstan, etc.
    </p>
  </div>
</template>

<style scoped>

</style>
