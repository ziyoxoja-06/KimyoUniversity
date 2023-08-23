<template>
 <div>
   <p>
     <a href="src/assets/pdf/namlangan_gruntlarda_zhojlashgan_quvurlarning_dinamik__ustuvorligi.pdf" download="download">Mexanika muammolari №1_2018</a>
   </p>
   <p>
     <a href="src/assets/pdf/namlangan_gruntlarda_zhojlashgan_quvurlarning_dinamik__ustuvorligi.pdf" download="download">Mexanika muammolari №1_2018</a>
   </p>
   <p>
     <a href="src/assets/pdf/namlangan_gruntlarda_zhojlashgan_quvurlarning_dinamik__ustuvorligi.pdf" download="download">Mexanika muammolari №1_2018</a>
   </p>
   <p>
     <a href="src/assets/pdf/namlangan_gruntlarda_zhojlashgan_quvurlarning_dinamik__ustuvorligi.pdf" download="download">Mexanika muammolari №1_2018</a>
   </p>
 </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";

const storeLayout = useLayoutStore()

onMounted(()=>{
  storeLayout.pageLoader = false
})

onUnmounted(()=>{
  storeLayout.pageLoader = true
})
</script>

<style scoped>

</style>
