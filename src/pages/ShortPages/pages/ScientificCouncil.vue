<script setup>
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";

const layout = useLayoutStore()
const router = useRouter()
const route = useRoute()
const pagesList = {
  "seismodinamic": {
    title: "Laboratory \"Seismodynamics of underground structures, foundations and bases\"",
    description: "Conducting periodic assessments of technical condition of buildings and structures (life support systems, etc.), generalization and analysis of damage in relation to types and sizes of structures.\n" +
      "Assessment of damage and specific accident rate of buildings and structures depending on soil conditions, embedding, material, intensity of the earthquake impact.\n" +
      "Development of methods to ensure seismic protection of buildings and structures.\n" +
      "Development of new algorithms and software system to study the stress-strain state and stability of structures interacting with surrounding medium.\n" +
      "Proposal of recommendations to ensure seismic stability of structures to supplement the clauses of regulatory documents on seismic resistant construction of underground structures.",
    teacher: {
      full_name: "Nishonov Nematilla Asatillaevich",
      degree: 'Doctor of philosophy in technical sciences (PhD), Senior Research Fellow',
      number: "(71)262 78 34",
      email: "nematilla81@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "dynamic": {
    title: "Laboratory \"Dynamics and stability of spatial structures\"",
    description: "The development of the theory of plates, shells under the influence of external effects, taking into account the design features and mechanical properties of materials.\n" +
      "Development of dynamic models, applied methods to solve the problems and programs for calculating seismic resistance of buildings and hydrotechnical structures. Development of the methods for" +
      " dynamic calculation of buildings equipped with an active seismic protection system. Preparation " +
      "of recommendations to ensure seismic safety of buildings and hydrotechnical structures during earthquakes.",
    teacher: {
      full_name: "Usarov Mahamatali Koraboyevich",
      degree: 'Doctor of Physical and Mathematical Sciences, Senior Researcher',
      number: "(71)262 78 34",
      email: "umakhamatali@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "experimental": {
    title: "Laboratory \"Experimental studies of structural strength and seismic stability of structures\"",
    description: "Experimental study of physico-mechanical properties of building and earth material, the strength of structural elements and their parts, the study of the patterns of deformation and interaction of structures with soil, the determination of dynamic characteristics and seismic resistance of structures.",
    teacher: {
      full_name: "Yuvmitov Anvar Sayfullaevich",
      degree: 'PhD in Technical Sciences, Senior Researcher',
      number: "(71) 262-73-55",
      email: "imssan@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "mechanic": {
    title: "Laboratory \"Dynamics of Soil Structures\"",
    description: "Development of the methods to study the dynamic properties of deformable rigid bodies and media, evaluation of their strength and stability, and strain indices under dynamic (seismic) effects.\n" +
      "Development of modern methods for assessing the seismic stability of above-ground and underground structures for various purposes.\n" +
      "Development of the methods to calculate the strength and stability of deformable rigid bodies and media, including earth structures, taking into account the complex strain characteristics.\n" +
      "Development of strength theory of textile yarns as complex deformable bodies taking into account structural features and tensile breakage.",
    teacher: {
      full_name: "Khusanov Bakhtiyar Ergashbayevich",
      degree: 'Doctor of Engineering Sciences, Professor',
      number: "(71)262 24 22;      (71)268 13 48;",
      email: "khusanov@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "modeling": {
    title: "Laboratory \"Dynamics and stability of spatial structures\"",
    description: "The development of the theory of plates, shells under the influence of external effects, taking into account the design features and mechanical properties of materials.\n" +
      "Development of dynamic models, applied methods to solve the problems and programs for calculating seismic resistance of buildings and hydrotechnical structures. Development of the methods for" +
      " dynamic calculation of buildings equipped with an active seismic protection system. Preparation " +
      "of recommendations to ensure seismic safety of buildings and hydrotechnical structures during earthquakes.",
    teacher: {
      full_name: "Usarov Mahamatali Koraboyevich",
      degree: 'Doctor of Physical and Mathematical Sciences, Senior Researcher',
      number: "(71)262 78 34",
      email: "umakhamatali@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "theory": {
    title: "Laboratory \"Theory of Mechanisms and Machines\"",
    description: "Designing new generations of mechanisms and machines based on modern achievements in mechanics and computer technologies, taking into account the properties and characteristics of the processed local raw materials.\n" +
      "Creation of roller technological machines of new generation (for the primary processing of cotton and leather semi-finished product) using mechatronics with the least material-energy consumption and environmental safety.\n" +
      "Creating software products for the optimal design of machines and their patenting.",
    teacher: {
      full_name: "Abdukarimov Abdusalam",
      degree: 'Candidate of Engineering Sciences, Senior Researcher',
      number: "(71)262 73 55",
      email: "aabdusalam54@gmail.com",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "prosses": {
    title: "Laboratory \"Dynamics of machines and problems of technological processes\"",
    description: "Development of the fundamentals of the theory of cotton picking machines, harvesting apparatus and " +
      "other agricultural machinery, based on the fundamental laws of the mechanics of rigid bodies, of the systems of " +
      "interconnected bodies, the theory of mechanisms and machines.\n" +
      "Studies of the dynamics and processes of functioning of the working bodies of cotton harvesting machines, the " +
      "system of cotton transporting into the bunker, determining the optimal operating modes of machines " +
      "and developing the fundamental basis - the performance of technological machines, including cotton harvesting ones.\n" +
      "Development of recommendations on energy and resource-saving parameters of machines for the design of their rational structures.",
    teacher: {
      full_name: "Rizaev Anvar Abdullayevich",
      degree: 'Doctor of Technical Sciences, Professor',
      number: "(71) 262 71 32; (71) 214 43 22;",
      email: "rizayev52@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "gas": {
    title: "Laboratory \"Mechanics of Fluids, Gas and Drive Systems\"",
    description: "The development of the theory of multiphase media, the study of the processes of rheology and turbulence." +
      " Development of effective models of turbulence and numerical algorithms for solving applied problems in fluid and gas mechanics.\n" +
      "Development of modern optimal methods for calculating and designing hydraulic drives for mobile machines and equipment based on the theory of nonlinear oscillations.",
    teacher: {
      full_name: "Malikov Zafar Mamatkulovich",
      degree: 'Doctor of Engineering Sciences',
      number: "(94)650 99 51",
      email: "malikov.z62@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  },
  "not-found": {
    title: "No data",
    description: '',
    teacher: {
      full_name: "Malikov Zafar Mamatkulovich",
      degree: 'Doctor of Engineering Sciences',
      number: "(94)650 99 51",
      email: "malikov.z62@mail.ru",
      img: 'src/assets/img/Manage-one.jpg'
    }
  }
}
const pageHtml = computed(()=> {
  return pagesList[layout.shortRout]
})
const columns = [
  {name: 'id', label: '№', field: 'id', align: 'left', sortable: true, style: 'width: 20px'},
  {
    name: 'name',
    required: true,
    label: 'Full name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true,
    style: 'width: 100px'
  },
  {name: 'degree', label: 'Scientific degree, scientific title', field: 'degree', align: 'left', sortable: true},
  {name: 'position', label: 'Position', field: 'position', align: 'left', sortable: true},
]

const rows = [
  {
    id: 1,
    name: 'Mardonov Botir Mardonovich',
    degree: 'Doctor of Physical and Mathematical Sciences, Professor',
    position: 'Leading researcher',
    contact: '+998 71 262 78 34',
    email: 'batsam@list.ru',
  },
  {
    id: 2,
    name: 'Xojmetov Gʼoibnazar Xadievich',
    degree: 'Doctor of Technical Sciences, Professor',
    position: 'Leading researcher',
    contact: '+998 71 262 78 34',
    email: 'instmech@academy.uz',
  },
  {
    id: 3,
    name: 'Bekmirzaev Diyorbek Аbdugapporovich',
    degree: 'Doctor of Technical Sciences (DSc)',
    position: 'Leading researcher',
    contact: '+998 71 262 78 34',
    email: 'diyorbek_84@mail.ru',
  },
]

const screenSize = ref({width: window.innerWidth, height: window.innerHeight});
const updateScreenSize = () => {
  screenSize.value = {width: window.innerWidth, height: window.innerHeight};
};
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  layout.newRoute(route.path.split('/')[1])
  layout.pageLoader = false
  pageHtml.value = pagesList[route.path.split('/')[1] ? route.path.split('/')[1] : 'not-found']
});
onUnmounted(()=>{
  layout.pageLoader = true
})
</script>

<template>
  <div class="lab">
    <p class="text-center text-h5 text-weight-bold">SCIENTIFIC COUNCIL OF THE INSTITUTE</p>
    <p class="unique__title">Academy of Sciences of the Republic of Uzbekistan Composition of the Scientific Council of the Institute of Mechanics and Seismic Stability of Structures named after M.T. Urazbaev</p>
      <div class="q-pt-sm">
        <q-table
          table-header-class="bg-green-5"
          :columns="columns" :filter="filter"
          :grid="screenSize.width < 1250"
          :hide-header="screenSize.width < 750"
          :rows="rows"
          bordered
          class="q-mt-md"
          flat
          row-key="name"
        >
          <template #body-cell-degree="props">
            <q-td :props="props" key="degree">
              {{ props.row.degree.length>35 ? props.row.degree.slice(0,35)+'...' : props.row.degree }}
            </q-td>
          </template>
        </q-table>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.unique__title{
  font-size: 20px;
  line-height: 44px;
  text-align: center;
}
.lab {
  padding: 20px;

  &__description {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
