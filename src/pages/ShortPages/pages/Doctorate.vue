<script setup>
import {useRoute, useRouter} from "vue-router";
import {onUnmounted, onMounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";

const layoutStore = useLayoutStore()
const router = useRouter()
const route = useRoute()
const pagesList = {
  "course-dsc": {
    title: 'Doctorate course (DSc)',
    description: 'Admission of applicants to the doctorate course (DSc) of the Institute and the training of ' +
      'specialists is done in the following fields of study (training period is 3 years):',
    courses: [
      {
        title: '- Mechanics of a deformable rigid body;',
      },
      {
        title: '- Technological machines. Robots, mechatronics and robotic systems;',
      },
      {
        title: '- Theory of mechanisms and machines. Machine science and machine parts;',
      },
      {
        title: '- Machines in agriculture and melioration. Mechanization of agriculture and melioration;',
      },
      {
        title: '- Foundations, bases and underground structures. Bridges and transport tunnels. Roads, subways;',
      },
    ]
  },
  "course-phd": {
    title: 'Basic Doctorate course (PhD)',
    description: 'Admission of applicants to the basic doctorate course (PhD) of the institute and the training of ' +
      'specialists is done in the following fields of study (training period is 3 years):',
    courses: [
      {
        title: '- Mechanics of a deformable rigid body;',
      },
      {
        title: '- Technological machines. Robots, mechatronics and robotic systems;',
      },
      {
        title: '- Theory of mechanisms and machines. Machine science and machine parts;',
      },
      {
        title: '- Machines in agriculture and melioration. Mechanization of agriculture and melioration;',
      },
      {
        title: '- Foundations, bases and underground structures. Bridges and transport tunnels. Roads, subways;',
      },
      {
        title: '- Mathematical modeling. Numerical methods and program systems.',
      },
    ]
  },
  "course-ind": {
    title: 'Independent competition for academic degree',
    description: 'Admission to the independent competition (PhD, DSc) of the institute and the training of specialists ' +
      'is done in the following fields of study (training period is 3 years):',
    courses: [
      {
        title: '- Mechanics of a deformable rigid body;',
      },
      {
        title: '- Fluid and gas mechanics;',
      },
      {
        title: '- Technological machines. Robots, mechatronics and robotic systems;',
      },
      {
        title: '- Theory of mechanisms and machines. Machine science and machine parts;',
      },
      {
        title: '- Foundations, bases and underground structures. Bridges and transport tunnels. Roads, subways.',
      },
    ]
  },
}
const updateScreenSize = () => {
  screenSize.value = {width: window.innerWidth, height: window.innerHeight};
};
const screenSize = ref({width: window.innerWidth, height: window.innerHeight});
onUnmounted(()=>{
  layoutStore.pageLoader = true
})
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  layoutStore.newRoute(route.path.split('/')[1])
  layoutStore.pageLoader = false
});
</script>

<template>
  <div class="user">
    <p class="text-h5 text-center text-weight-bold">{{pagesList[layoutStore.shortRout]?.title}}</p>
    <p>{{pagesList[layoutStore.shortRout]?.description}}</p>
    <p v-for="page in pagesList[layoutStore.shortRout]?.courses" :key="page.title">{{page?.title}}</p>
  </div>
</template>

<style lang="scss" scoped>

.user {
  padding: 50px;
  font-size: 16px;
}
</style>
