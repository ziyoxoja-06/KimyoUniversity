<script setup>
import {useRouter, useRoute} from "vue-router";
import {ref, onMounted, computed} from "vue";
import Structure from "./pages/Structure.vue";
import Managment from "./pages/Managment.vue";
import Directors from "./pages/Directors.vue";
import Labaratories from "./pages/LabaratoriesTypePages.vue";
import Information from "./pages/Information.vue";
import UniqueProject from "./pages/UniqueProject.vue";
import EmployersInspector from "./pages/EmployersInspector.vue";
import Doctorate from "./pages/Doctorate.vue";
import ScintificActivity from "./pages/ScintificActivity.vue";
import ScintificCouncil from "./pages/ScientificCouncil.vue";
import ScientificSeminars from "./pages/ScientificSeminars.vue";
import ScientificGrants from "./pages/ScientificGrants.vue";
import ScientificCooperation from "./pages/ScientificCooperation.vue";
import YoungScientists from "./pages/YoungScientists.vue";
import ScientificDegrees from "./pages/ScientificDegrees.vue";
import SeminarScientific from "./pages/SeminarScientific.vue";
import ThesisDissertation from "./pages/ThesisDissertations.vue";
import AboutJournal from "./pages/AboutJournal.vue";

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
  "scientific-activity": ScintificActivity,
  "institute-trade-union": Information,
  "scientific-council": ScintificCouncil,
  "scientific-seminars": ScientificSeminars,
  "scientific-grants": ScientificGrants,
  "scientific-cooperation": ScientificCooperation,
  "young-scientists": YoungScientists,
  "scientific-degrees": ScientificDegrees,
  "seminar-scientific": SeminarScientific,
  "thesis-dissertations": ThesisDissertation,
  "about-journal": AboutJournal,
})
onMounted(()=> {
  console.log('base')
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
  height: fit-content;
  margin: 20px auto 40px auto;
  box-shadow: 0 0 10px 10px rgba(131, 131, 131, 0.2);
  padding: 20px;
  border-radius: 10px;
}
</style>
