<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";

const layout = useLayoutStore()
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
        img: '../static/img/Manage-one.jpg'
      },
      {
        name: 'Bazarbaeva M.E',
        role: 'bibliotekachi',
        img: '../static/img/Manage-one.jpg'
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
        img: '../static/img/Manage-one.jpg'
      }
    ]
  },
  "admin-economic": {
    title: 'Administrative-economic service',
    description: 'This section organizes library and electronic library work. A resource center and library fund provide' +
      ' opportunities for employees to use information resources in their studies.',
    phone:'(71) 262 - 76 - 89',
    user: [
      {
        name: 'Head of AES - Makhamadiyev Kh.B',
        role: '',
        img: '/src/static/img/Manage-one.jpg'
      }
    ]
  },
}
const updateScreenSize = () => {
  screenSize.value = {width: window.innerWidth, height: window.innerHeight};
};
const screenSize = ref({width: window.innerWidth, height: window.innerHeight});
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  layout.newRoute(route.path.split('/')[1])
});
</script>

<template>
    <div class="user">
      <q-img width="220px"  :src="pagesList[layout.shortRout]?.user[0].img"/>
      <div class="q-pl-lg">
        <p class="text-h5 text-weight-bold q-pl-xl">{{ pagesList[layout.shortRout]?.title }}</p>
        <p><b>Main tasks:</b> {{ pagesList[layout.shortRout]?.description }}</p>
        <div class="user__info">
            <span v-for="item in pagesList[layout.shortRout]?.user">
              <span class="text-weight-bold">{{ item.name }}</span>
            <span v-if="item.role!==''"> - {{item.role}}</span><br>
            </span>
          <b>Phone:</b><span>{{pagesList[layout.shortRout]?.phone}}</span>
        </div>
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
