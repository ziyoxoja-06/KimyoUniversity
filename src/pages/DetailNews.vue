<script setup>
import {useRouter, useRoute} from "vue-router";
import {ref, onBeforeMount, onUnmounted} from "vue";
import {cardDatas} from "./HomePage/module";
import {useLayoutStore} from "../stores/layout";

const layoutStore = useLayoutStore();
const router = useRouter()
const route = useRoute()
const {id} = route.params
const data = ref(null)
onBeforeMount(()=>{
  data.value = cardDatas.find(item => item.id === parseInt(id))
  layoutStore.pageLoader = false
})
onUnmounted(()=>{
  layoutStore.pageLoader = true
})

</script>

<template>
  <div class="container"><h2 class="title text-center">{{data.title}}</h2>
    <div class="detail__img ">
      <q-img class="bg-blue " width="100%" height="100%" :src="`http://localhost:9000/${data.img_src}`" />
      <p class="text-center text-weight-bold text-h6">{{data.date.split('/').join('-')}}</p>
    </div>

    <p class="text-h5">{{data.description}}</p>
  </div>
</template>

<style scoped lang="scss">
.container{
  width: 90%;
  min-height: 100vh;
  margin: 20px auto;
  box-shadow: 0 0 10px 10px rgba(131, 131, 131, 0.2);
  padding: 20px;
  border-radius: 10px;

  .title{
    padding-top: 10px;
  }
}
.detail__img{
  width: 300px;
  height: 300px;
  float: left;
  padding: 10px 20px 20px 0;
}
</style>
