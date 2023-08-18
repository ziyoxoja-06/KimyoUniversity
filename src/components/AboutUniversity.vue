<script setup>
import {useI18n} from 'vue-i18n';

const { t , locale} = useI18n()
</script>

<template>
  <div class="about__container">
    <h6 class="text-weight-bold text-h4 text-center" v-html="t('mainLayout.nameUniver')"></h6>
    <q-img width="400px" height="50%" src='../assets/img/carusel_1.jpg' class="about__img q-ml-none q-ml-md-lg" />
    <p class="about__text text-weight-medium text-h6">
      {{t('home_page.about_description')}}
    </p>

  </div>
</template>

<style scoped lang="scss">
  .about__container{
    min-height: 55vh;
    margin: 80px 80px 0 80px;
    padding-bottom: 100px;
    .about__img{
      margin: 0 10px 0 10px;
    }
  }
  @media screen and (max-width: 850px){
    .about{

      &__container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px;
      }
      &__img{
        float: bottom;
       }
    }
  }
  @media screen and (min-width: 850px){
    .about{
      &__img{
        float: right;
      }
    }
  }
</style>
