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
const data = [
  {
    title: "Scientific directions of the Institute:",
    description:[
      '- mechanics of deformable rigid body, soil mechanics, experimental mechanics;',
      '- seismic stability of buildings and structures;',
      '- fluid and gas mechanics;',
      '- theory of mechanisms and machines, the dynamics and strength of structures.'
    ]
  },
  {
    title: "Research objectives:",
    description:['Development of scientific grounds of the mechanics of deformable rigid body, soil mechanics, fluid and gas mechanics, experimental mechanics methods, theory of mechanisms and machines, dynamics and strength of structures, problems of seismic resistance of structures and preparation of recommendations for ensuring their seismic safety, methods of their active seismic protection, developing a seismic risk reduction strategy for life support systems.']
  },
  {
    title: "Research problems:",
    description:[
      '- creation and development of scientific grounds of seismodynamics of underground structures, foundations and bases that take into account soil conditions, nonlinear properties and types of seismic effects;',
      '- realization of research on the laws of deformation, strength and seismic stability of bodies, soil media and structures, taking into account their structural and engineering features under dynamic loads;',
      '- realization of research on the dynamics and seismic stability of hydrotechnical structures;',
      '- development of the theory of plates and shells, taking into account the design features and mechanical properties of material;',
      '- conducting model and field experiments to study the stress-strain state of structures and their interaction with soil;',
      '- research and determination of behavior features of structural materials under simple and complex loading, the determination of regularities of their deformation, the development of the theory of elastoplastic processes of deformable media;',
      '- preparation of recommendations to ensure seismic safety of buildings and structures, methods for their active seismic protection, development of a strategy for reducing the seismic risk of life support systems;',
      '- study of the problems of fluid and gas mechanics, rheology, multiphase media and hydraulic drive systems with the provision of technical solutions for their efficient operation;',
      '- study of the problems of the dynamics of machines, the creation of the methods to optimize their functioning in terms of resource saving;',
      '- development of calculation methods, creation of new generations of machines and mechanisms;',
      '- realization of research to solve the problems of confinement of harmful emissions in the gas, oil and mining-metallurgical industries.'
    ]
  },
]
</script>

<template>
<div>
  <p class="text-h4 text-center text-weight-bold q-pt-xl q-pb-sm">Scientific activity</p>
  <div class="scintific" v-for="item in data" :key="item.title">
    <p class=" text-weight-bold q-pa-md">{{ item.title }}</p>
    <p v-for="description in item.description" :key="description">{{ description }}</p>
  </div>
</div>
</template>

<style scoped>
.scintific{
  font-size: 18px;
}
</style>
