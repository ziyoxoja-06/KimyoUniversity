<script setup>

const linkData = [
  {
    title: 'Academy of sciences of the Republic of Uzbekistan',
    link: 'https://academy.uz/',
    img_src: '../static/img/partners/fanalar-academy.png',
    width: 150,
    height: 180,
  },
  {
    title: 'Namangan Engineering and Technology Institute',
    link: 'https://nammti.uz/uz/',
    width: 170,
    height: 170,
    img_src: '../static/img/partners/technology.png',
  },
  {
    title: 'Namangan Civil Engineering Institute',
    link: 'https://nammqi.uz/',
    width: 170,
    height: 170,
    img_src: '../static/img/partners/civil.png'
  },
  {
    title: 'Tashkent State Transport University',
    link: 'https://tstu.uz/',
    width: 170,
    height: 170,
    img_src: '../static/img/partners/transport.png'
  },
  {
    title: 'Samarkand State Architectural and Civil-Engineering Institute',
    link: 'https://samdaqi.edu.uz/en',
    width: 170,
    height: 170,
    img_src: '../static/img/partners/architectural.png'
  },
  // {
  //   title: 'Tashkent State Technical University',
  //   link: 'http://tdtu.uz/en/home-2-2/',
  //   width: 170,
  //   height: 170,
  //   img_src: '../static/img/partners/tashkent-tech.png'
  // },
  // {
  //   title: 'Tashkent Institute of Irrigation and Agricultural Mechanization Engineers',
  //   link: 'https://ziyonet.uz',
  //   width: 120,
  //   height: 170,
  //   img_src: '../static/img/partners/irrigation.png'
  // }
]
function openNewTab(link) {
  window.open(link, '_blank');
}
</script>

<template>
  <div class="q-pa-md q-gutter-sm flex justify-center slide-track">
    <div v-for="link in linkData" class="slide">
      <div @click="openNewTab(link.link)" class="img__conatainer cursor-pointer flex justify-center items-center bg-indigo-2">
        <q-img :alt="link.title" :height="`${link.height}px`" :src="link.img_src"
               :width="`${link.width}px`" class="rounded-borders"/>
      </div>
      <p class="text-weight-bold text__title">{{ link.title }}</p>
    </div>

  </div>
</template>

<style scoped>
.text__title{
  margin-top: 15px;
}
.img__conatainer{
  width: 100%;
  height: 200px;
  border-radius: 20px;
}
.slide-track {
  display: flex;
  width: 100%;
  justify-content: center;
}

.slide {
  width: 240px;
  height: fit-content;
  padding: 20px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% + 300px));
  }
}

</style>
