<script setup>
function openNewTab(link) {
  window.open(link, '_blank');
}
const linkData = [
  {
    title: 'DTM',
    link: 'https://dtm.uz',
    img_src: '../static/img/links/DTM.jpg'
  },
  {
    title: 'Edu.uz',
    link: 'https://edu.uz/uz',
    img_src: '../static/img/links/eduuz.jpg'
  },
  {
    title: 'Lex.uz',
    link: 'https://lex.uz/uz',
    img_src: '../static/img/links/lexuz.jpg'
  },
  {
    title: 'Yoshlar itfoqi',
    link: 'https://yi.uz',
    img_src: '../static/img/links/yoshlar.jpg'
  },
  {
    title: 'Ziyonet.uz',
    link: 'https://ziyonet.uz',
    img_src: '../static/img/links/ziyonet.jpg'
  },
  {
    title: 'Yagona ishonch portali',
    link: 'https://ziyonet.uz',
    img_src: '../static/img/links/yagona.png'
  }
]
</script>

<template>
    <div class="q-pa-md q-gutter-sm flex justify-center">
      <q-avatar v-for="link in linkData" size="200px" font-size="52px" color="indigo-2" @click="openNewTab(`${link.link}`)" class="cursor-pointer" text-color="white" >
        <q-img :src="link.img_src" :alt="link.title" />
      </q-avatar>

    </div>
</template>

<style scoped>

</style>
