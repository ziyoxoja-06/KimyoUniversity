<script setup>
import {useRouter, useRoute} from "vue-router";
import {ref, onBeforeMount, watch, onMounted, computed} from "vue";
import Structure from "./pages/Structure.vue";
import Managment from "./pages/Managment.vue";
import Directors from "./pages/Directors.vue";
import Labaratories from "./pages/Labaratories.vue";
import Information from "./pages/Information.vue";
import UniqueProject from "./pages/UniqueProject.vue";
import EmployersInspector from "./pages/EmployersInspector.vue";
import Doctorate from "./pages/Doctorate.vue";
import {useLayoutStore} from "../../stores/layout";

const layout = useLayoutStore()
const router = useRouter()
const route = useRoute()
const pageHtml = computed(()=>pagesList.value[route.path.split('/')[1]?route.path.split('/')[1]: 'Not Found Page'])
const pagesList = ref({
  "structure": Structure,
  "managment": Managment,
  "directors": Directors,
  "seismodinamic": Labaratories,
  "dynamic": Labaratories,
  "experimental": Labaratories,
  "mechanic": Labaratories,
  "modeling": Labaratories,
  "theory": Labaratories,
  "prosses": Labaratories,
  "gas": Labaratories,
  "info-analitical": Information,
  "info-resurse-center": Information,
  "unique-project": UniqueProject,
  "personnel-inspector": EmployersInspector,
  "admin-economic": Information,
  "course-dsc": Doctorate,
  "course-phd": Doctorate,
  "course-ind": Doctorate,

})

onMounted(()=> {
  layout.newRoute(route.path.split('/')[1])
})

</script>

<template>
  <div class="container">
    <component :is="pageHtml"/>
  </div>

</template>

<style scoped lang="scss">
.container{
  width: 90%;
  min-height: 80vh;
  margin: 20px auto 40px auto;
  box-shadow: 0 0 10px 10px rgba(131, 131, 131, 0.2);
  padding: 20px;
  border-radius: 10px;
}
</style>
