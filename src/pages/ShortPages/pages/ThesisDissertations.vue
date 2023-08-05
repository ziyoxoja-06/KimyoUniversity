<script setup>
import {onMounted, onUnmounted} from "vue";
import {useLayoutStore} from "../../../stores/layout";
const layoutStore = useLayoutStore();
onMounted(() => {
  layoutStore.pageLoader = false
})
onUnmounted(()=>{
  layoutStore.pageLoader = true
})
const bookNames = [
  'Namlangan gruntlardajoylashgan quvurlarning dinamik ustuvorligi',
  'Otib beruvchi barabanli arrali jinning resurstejamkor qismlarini ishlab chiqish',
  'Paxta tozalash mashinalari uchun arralararo qistirmalarning yangi konstruksiyasini ishlab chiqish va uning parametrlarini asoslash',
  'Qalin anizotrop plastinalarning bimomentli nazariyasi',
]


</script>

<template>
  <p class="text-h6 text-weight-bold text-center q-mb-xl">Thesis and dissertations</p>
  <div class="book__title q-py-md text-center text-weight-bold"  v-for=" name in bookNames " :key="name">
    {{name}}
  </div>
</template>

<style scoped lang="scss">
  .book__title {
    width: 100%;
    border-top: 2px solid grey;
    font-size: 16px;
  }
</style>
