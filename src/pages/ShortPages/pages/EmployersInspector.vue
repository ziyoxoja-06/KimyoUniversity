<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";

const layoutStore = useLayoutStore()
const router = useRouter()
const route = useRoute()
const pagesList = {
  "info-analitical": {
    title: 'Info reserching',
    phone:'(71) 262 - 76 - 89',
    description: ' This section organizes library and electronic library work. A resource center and library fund provide opportunities for employees to use information resources in their studies.',
    user: [
      {
        name: 'Bazarbaeva M.E',
        role: 'bibliotekachi',
        img: 'src/static/img/Manage-one.jpg'
      },
      {
        name: 'Bazarbaeva M.E',
        role: 'bibliotekachi',
        img: 'src/static/img/Manage-one.jpg'
      }
    ]
  },
  "info-resurse-center": {
    title: 'Info save center',
    description: 'This section organizes library and electronic library work. A resource center and library fund provide opportunities for employees to use information resources in their studies.',
    phone:'(71) 262 - 76 - 89',
    user: [
      {
        name: 'Bazarbaeva M.E',
        role: 'bibliotekachi',
        img: 'src/static/img/Manage-one.jpg'
      }
    ]
  },
}
const updateScreenSize = () => {
  screenSize.value = {width: window.innerWidth, height: window.innerHeight};
};
console.log('roe')
const screenSize = ref({width: window.innerWidth, height: window.innerHeight});
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  layoutStore.newRoute(route.path.split('/')[1])
  layoutStore.pageLoader = false;
});
onUnmounted(()=>{
  layoutStore.pageLoader = true
})
</script>

<template>
  <div class="user">
    <q-img width="340px"  src="/src/static/img/Manage-one.jpg"/>
    <div class="q-pl-lg">
      <p class="text-h5 text-weight-bold q-pl-xl">Personnel inspector</p>
      <p>Senior Inspector of the Personnel Department is <b>Djarenova Matluba Maripovna. Phone:</b> (71) 262-76-89</p>
      <p>The number of employees is 131: 51 of them are Scientific Researchers, 0 is an academician, 11 are Doctors of Sciences,
        11 are Candidates of Sciences. 3 Doctors of Sciences (DSc), 3 - PhD, more than 20 masters and 40 bachelors have been trained over the past three years.</p>
  </div>
  </div>
</template>

<style lang="scss" scoped>

.user {
  padding: 50px;
  display: flex;
  font-size: 16px;
}
</style>
