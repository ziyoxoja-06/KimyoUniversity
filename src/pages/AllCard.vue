<script setup>
import BaceCard from '../components/BaceCard.vue'
import {cardDatas} from "./HomePage/module";
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

console.log(route)

</script>

<template>
  <div class="container ">
    <div class="row">
     <BaceCard v-for="data in cardDatas"
               :data="data"
               class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm"
     />
      <span v-if="[1].length === 0" class="text-h5">No Cards</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  padding: 20px 0 30px 0;
}
</style>
