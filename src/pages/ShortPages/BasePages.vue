<script setup>
import {useRouter, useRoute} from "vue-router";
import {ref, onMounted, computed, defineAsyncComponent} from "vue";
import {useLayoutStore} from "../../stores/layout";
import ArchivePage from "./pages/ArchivePage.vue";

const Structure = defineAsyncComponent(() => import("./pages/Structure.vue"));
const Managment = defineAsyncComponent(() => import("./pages/Managment.vue"));
const Directors = defineAsyncComponent(() => import("./pages/Directors.vue"));
const Labaratories = defineAsyncComponent(() => import("./pages/LabaratoriesTypePages.vue"));
const Information = defineAsyncComponent(() => import("./pages/Information.vue"));
const UniqueProject = defineAsyncComponent(() => import("./pages/UniqueProject.vue"));
const EmployersInspector = defineAsyncComponent(() => import("./pages/EmployersInspector.vue"));
const Doctorate = defineAsyncComponent(() => import("./pages/Doctorate.vue"));
const ScintificActivity = defineAsyncComponent(() => import("./pages/ScintificActivity.vue"));
const ScintificCouncil = defineAsyncComponent(() => import("./pages/ScientificCouncil.vue"));
const ScientificSeminars = defineAsyncComponent(() => import("./pages/ScientificSeminars.vue"));
const ScientificGrants = defineAsyncComponent(() => import("./pages/ScientificGrants.vue"));
const ScientificCooperation = defineAsyncComponent(() => import("./pages/ScientificCooperation.vue"));
const YoungScientists = defineAsyncComponent(() => import("./pages/YoungScientists.vue"));
const ScientificDegrees = defineAsyncComponent(() => import("./pages/ScientificDegrees.vue"));
const SeminarScientific = defineAsyncComponent(() => import("./pages/SeminarScientific.vue"));
const ThesisDissertation = defineAsyncComponent(() => import("./pages/ThesisDissertations.vue"));
const AboutJournal = defineAsyncComponent(() => import("./pages/AboutJournal.vue"));
const RulesWrite = defineAsyncComponent(() => import("./pages/RulesWrite.vue"));

const layout = useLayoutStore()
const router = useRouter()
const route = useRoute()
const pageHtml = computed(()=>
{
  layout.pageLoader = false;
  return pagesList.value[route.path.split('/')[1]?route.path.split('/')[1]: 'Not Found Page']
})
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
  "archive": ArchivePage,
  "rules-write": RulesWrite
})
onMounted(()=> {
  // layout.pageLoader = false
  //   console.log('page loaded')
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
  min-height: 40vh;
  margin: 20px auto 40px auto;
  box-shadow: 0 0 10px 10px rgba(131, 131, 131, 0.2);
  padding: 20px;
  border-radius: 10px;
}
</style>
