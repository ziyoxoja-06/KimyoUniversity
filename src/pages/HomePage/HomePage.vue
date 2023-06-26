<script setup>
import {onMounted, ref} from "vue";
import BaceCard from "src/components/BaceCard.vue";
import ImgScroll from "src/components/ImgScroll.vue";
import PartnerScroll from "src/components/PartnersScroll.vue";
import AboutUniversity from 'src/components/AboutUniversity.vue'
import UsefulLink from 'src/components/UsefulLink.vue'
import {cardDatas, images} from "./module";
import {useLayoutStore} from "../../stores/layout";

const store = useLayoutStore()
const preferred = ref('')
const options = [
  {
    label: 'News',
    value: 'news'
  },
  {
    label: 'Anouncement',
    value: 'anouncement'
  },
  {
    label: 'Events',
    value: 'event'
  },
]
const screenSize = ref({width: window.innerWidth, height: window.innerHeight});
const updateScreenSize = () => {
  screenSize.value = {width: window.innerWidth, height: window.innerHeight};
};
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});
</script>

<template>
  <div class="home">
    <section class="home__scroll">
      <ImgScroll :autoplay="true" :img-src="images" :slide-page="1"/>
      <div class="home__action">
        <q-btn class="home__btn" color="primary" href="#about" label="Batafsil bilish"></q-btn>
      </div>
    </section>
<!--     About University  -->
    <section id="about" class="about__university">
      <AboutUniversity/>
    </section>
<!--     Banner  -->
    <section class="banner">
      <q-img src="src/static/img/banner.png"/>
    </section>
<!--     News  -->
    <section id="news" class="news">
      <div class="flex justify-center text-h5 text-weight-bold q-py-md">
        <div>
          <q-option-group
            v-model="preferred"
            :options="options"
            :style="screenSize.width < 600?'font-size: 50%;':'font-size: 70%;'"
            color="primary"
            inline
            name="preferred_genre"
          />
        </div>
      </div>
      <div class="row news__card">
        <BaceCard v-for="cardData in cardDatas.slice(0, 5 )"
                  :data="cardData"
                  class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm"/>
      </div>
      <div class="full-width flex justify-end q-ma-lg q-pr-xl">
        <div class="text-weight-bold cursor-pointer color__blue-deep" @click="$router.push('/all-news')">
          Barchasini ko'rish
          <q-icon class="text-weight-bold" name="fa-solid fa-right-long" size="15px"/>
        </div>
      </div>
    </section>
<!--   Tizer Video  -->
    <section class="tizer">
      <video autoplay loop muted src="../../static/video/tizer.mp4" style=" width: 100%; border-radius: 10px"/>
    </section>
<!--    Usefull Link -->
    <section id="links">
      <div class="flex justify-center text-h5 text-weight-bold q-pt-md q-pb-xl q-mt-xl">Foydali ilovalar</div>
      <UsefulLink class="q-mb-xl"/>
    </section>
    <section id="links">
      <div class="flex justify-center text-h5 text-weight-bold q-pt-md q-pb-xl q-mt-xl">Hamkorlar</div>
      <PartnerScroll class="q-mb-xl"/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "src/css/Home";
</style>
