<script setup>
function openNewTab(link) {
  window.open(link, '_blank');
}
</script>

<template>
    <div class="q-pa-md q-gutter-sm flex justify-center">
      <q-avatar size="200px" font-size="52px" color="indigo-2" @click="openNewTab('https://dtm.uz')" class="cursor-pointer" text-color="white" >
        <q-img src="src/static/img/links/DTM.jpg" />
      </q-avatar>
      <q-avatar size="200px" font-size="52px" color="indigo-2" @click="openNewTab('https://edu.uz/uz')" class="cursor-pointer" text-color="white" >
        <q-img src="src/static/img/links/eduuz.jpg" />
      </q-avatar>
      <q-avatar size="200px" font-size="52px" color="indigo-2" @click="openNewTab('https://lex.uz/uz')" class="cursor-pointer" text-color="white" >
        <q-img src="src/static/img/links/lexuz.jpg" />
      </q-avatar>
      <q-avatar size="200px" font-size="52px" color="indigo-2" @click="openNewTab('https://yi.uz')" class="cursor-pointer" text-color="white" >
        <q-img src="src/static/img/links/yoshlar.jpg" />
      </q-avatar>
      <q-avatar size="200px" font-size="52px" color="indigo-2" @click="openNewTab('https://ziyonet.uz')" class="cursor-pointer" text-color="white" >
        <q-img src="src/static/img/links/ziyonet.jpg" />
      </q-avatar>
      <q-avatar size="200px" font-size="52px" color="indigo-2" @click="openNewTab('https://my.gov.uz')"  class="cursor-pointer" text-color="white" >
        <q-img src="src/static/img/links/yagona.png" />
      </q-avatar>

    </div>
</template>

<style scoped>

</style>
