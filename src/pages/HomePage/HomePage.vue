<script setup>
import BaceCard from "src/components/BaceCard.vue";
import BaseScroll from "src/components/BaseScroll.vue";
import AboutUniversity from 'src/components/AboutUniversity.vue'
import UsefulLink from 'src/components/UsefulLink.vue'
import {images} from "./module";


</script>

<template>
<div class="home">
  <div class="home__scroll">
    <BaseScroll :autoplay="true"  :slide-page="1" :img-src="images"  />
    <div class="home__action">
      <q-btn class="home__btn" href="#about" label="Batafsil bilish" color="primary" > </q-btn>
    </div>
  </div>
  <section id="about" class="about__university">
    <AboutUniversity/>
  </section>
  <q-separator inset />
  <section class="news" id="news" >
    <div class="flex justify-center text-h5 text-weight-bold q-py-md">Yangiliklar</div>
    <div class="row news__card">
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :img_src="'src/static/img/carusel_1.jpg'" />
    </div>
    <div class="full-width flex justify-end q-ma-lg q-pr-xl">
      <div class="text-weight-bold cursor-pointer color__blue-deep">Barchasini ko'rish <q-icon class="text-weight-bold" size="15px" name="fa-solid fa-right-long" /> </div>
    </div>
  </section>
  <section>
    <div class="flex justify-center text-h5 text-weight-bold q-py-md q-mt-xl">E'lonlar</div>
    <div class="row news__card  ">
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :announcement="true" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :announcement="true" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :announcement="true" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :announcement="true" :img_src="'src/static/img/carusel_1.jpg'" />
      <BaceCard class="col-12 col-sm-5 col-md-2 col-lg-2 col-xl-2 q-mx-sm q-my-sm" :announcement="true" :img_src="'src/static/img/carusel_1.jpg'" />
    </div>
    <div class="full-width flex justify-end q-ma-lg q-pr-xl q-mb-xl">
      <div class="text-weight-bold cursor-pointer color__blue-deep">Barchasini ko'rish <q-icon class="text-weight-bold" size="15px" name="fa-solid fa-right-long" /> </div>
    </div>
  </section>
  <section class="tizer">
    <video src="src/static/video/tizer.mp4" autoplay loop muted style=" width: 100%" />
  </section>
  <section id="statistic">
    <div class="flex justify-center text-h5 text-weight-bold q-pt-md q-pb-xl q-mt-xl">Foydali ilovalar</div>
    <UsefulLink class="q-mb-xl" />
  </section>
</div>
</template>


<style scoped lang="scss">
.color__blue-deep{
  color: #040460;
}
.tizer{
  width: 100%;
  min-height: fit-content;
}
.home{
  width: 100%;

  &__scroll{
    width: 100%;
    height: 76vh;
    position: relative;
  }
  &__action{
    position: absolute;
    bottom: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__btn{
    box-shadow: #1976D2 0 0 3px;
    transition:all 2s;
    animation: homeBtn ease-in 2s infinite;

  }

  @keyframes homeBtn {
    0%{
      box-shadow: #1976D2 0 0 6px;
    }
    20%{
      box-shadow: #1976D2 0 0 9px;

    }
    40%{
      box-shadow: #1976D2 0 0 12px;
    }
    60%{
      box-shadow: #1976D2 0 0 9px;
    }
    80%{
      box-shadow: #1976D2 0 0 6px;
    }
    100%{
      box-shadow: #1976D2 0 0 3px;
    }
  }
}
.about__university{
  height: fit-content;
}
.news{
  margin: 20px ;
  height: fit-content;
  &__card{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
.statistic{
  height: fit-content;
}
</style>
