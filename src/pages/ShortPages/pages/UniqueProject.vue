<script setup>
const imgs =['../../static/img/unique-project/one.jfif','../../static/img/unique-project/two.jfif']
</script>

<template>
  <div class="q-pa-xl">
    <p class="text-h5 text-weight-bold text-center">Unique project</p>
    <p style="font-size: 16px">
      Engineering and seismometric observation stations operate in a standby mode on the basis of individual power supply and are designed to record the impact of earthquakes on buildings and their earth foundations during earthquakes of intensity 3 points and higher. The modernization of the engineering seismometric observation station is being carried out on the basis of computer technology with mathematical software to process seismic signals.
    </p>
  <div class="flex justify-around wrap q-pt-lg ">
    <q-img width="40%" v-for="img in imgs" :src="img" alt="None" />
  </div>
  </div>
</template>

<style scoped>

</style>
