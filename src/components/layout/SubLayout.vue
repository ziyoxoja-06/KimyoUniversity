<script setup>
import { computed, watch,ref ,onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import {useQuasar} from "quasar";
import { options} from 'src/components/layout/Sublayout.ts';
import {useLayoutStore} from "../../stores/layout";
import {useRouter} from "vue-router";

const router = useRouter();
const { t, locale } = useI18n()
const $q = useQuasar();
const menu = computed(() => {
  return [
    {
      title:t('subLayout.about'),
      path:'#',
      options:[
        {
          title:t('subLayout.about_item.organize'),
          path:'structure',
          options:[]
        },
        {
          title:t('subLayout.about_item.about_institute'),
          path:'#',
          options:[]
        },
        {
          title:t('subLayout.about_item.leadership'),
          path:'managment',
          options:[]
        },
        {
          title:t('subLayout.about_item.institute_directors'),
          path:'directors',
          options:[]
        },
        {
          title:t('subLayout.about_item.manage_structure'),
          path:'#',
          options:[]
        },
        {
          title:t('subLayout.about_item.important_results'),
          path:'#',
          options:[]
        },
        {
          title:t('subLayout.about_item.scientific_research'),
          path:'#',
          options:[]
        },
        {
          title:t('subLayout.about_item.academics'),
          path:'#',
          options:[]
        },
      ]
    },
    {
      title:t('subLayout.labaratories'),
      path:'#',
      options:[
        {
          title:t('subLayout.labaratories'),
          path:'#',
          options:[
            {
              title:t('subLayout.labaratories_item.under_ears'),
              path:'seismodinamic',
              options:[]
            },
            {
              title:t('subLayout.labaratories_item.astranout'),
              path:'dynamic',
              options:[]
            },
            {
              title:t('subLayout.labaratories_item.construction'),
              path:'experimental',
              options:[]
            },
            {
              title:t('subLayout.labaratories_item.buildings'),
              path:'mechanic',
              options:[]
            },
            {
              title:t('subLayout.labaratories_item.mechanizm'),
              path:'theory',
              options:[]
            },
            {
              title:t('subLayout.labaratories_item.dinamics'),
              path:'prosses',
              options:[]
            },
            {
              title:t('subLayout.labaratories_item.fluid'),
              path:'gas',
              options:[]
            },
          ]
        },
        {
          title:t('subLayout.information_anlys'),
          path:'info-analitical',
          options:[]
        },
        {
          title:t('subLayout.information_base'),
          path:'info-resurse-center',
          options:[]
        },
        {
          title:t('subLayout.unique_objects'),
          path:'unique-project',
          options:[]
        },
        {
          title:t('subLayout.personnel_department'),
          path:'personnel-inspector',
          options:[]
        },
        {
          title:t('subLayout.economic_service'),
          path:'admin-economic',
          options:[]
        }
      ]
    },
    {
      title:t('subLayout.activities'),
      path:'#',
      options:[
        {
          title:t('subLayout.scientific_activity'),
          path:'scientific-activity',
          options:[]
        },
        {
          title:t('subLayout.scientific_council'),
          path:'scientific-council',
          options:[]
        },
        {
          title:t('subLayout.scientific_seminars'),
          path:'scientific-seminars',
          options:[]
        },
        {
          title:t('subLayout.scientific_grants'),
          path:"scientific-grants",
          options:[]
        },
        {
          title:t('subLayout.scientific_cooperation'),
          path:'scientific-cooperation',
          options:[]
        },
        {
          title:t('subLayout.young_scientists'),
          path:'young-scientists',
          options:[]
        },
        {
          title:t('subLayout.trade_union'),
          path:'institute-trade-union',
          options:[]
        },
        {
          title:t('subLayout.photo'),
          path:'all-photos',
          options:[]
        }
      ]
    },
    {
      title:t('subLayout.special_council'),
      path:'#',
      options: [
        {
          title:t('subLayout.scientific_degrees'),
          path:'scientific-degrees',
          options: []
        },
        {
          title:t('subLayout.scientific_seminars'),
          path:'seminar-scientific',
          options: []
        },
        {
          title:t('subLayout.dissertations'),
          path:'thesis-dissertations',
          options: []
        },

      ]
    },
    {
      title: t('subLayout.doctarate_coure'),
      path:'#',
      options: [
        {
          title: t('subLayout.course_dsc'),
          path:'course-dsc',
          options: []
        },
        {
          title: t('subLayout.course_phd'),
          path:'course-phd',
          options: []
        },
        {
          title: t('subLayout.course_ind'),
          path:'course-ind',
          options: []
        },
      ]
    },
    {
      title:t('subLayout.journal'),
      path:'#',
      options: [
        {
          title:t('subLayout.journal_about'),
          path:'about-journal',
          options: []
        },
        {
          title:t('subLayout.write'),
          path:'#',
          options: []
        },
        {
          title:t('subLayout.archive'),
          path:'#',
          options: []
        },
      ]
    },
  ]
})
const store = useLayoutStore()
function darkMode() {
  $q.dark.toggle();
  localStorage.setItem("darkMode", $q.dark.isActive ? "true" : "false");
}

const screenSize = ref({ width: window.innerWidth, height: window.innerHeight });
const model = ref('')
const updateScreenSize = () => {
  screenSize.value = { width: window.innerWidth, height: window.innerHeight };
};
function langChange(item) {
  locale.value = item.value
  model.value = item.label
  console.log(window.pageYOffset , document.documentElement.scrollTop , document.body.scrollTop , 0)
}
function newRoute(check,item) {
  if(!check || item.path!=='#'){
    store.newRoute(item.path)
    console.log('router',item.path,router)
    router.push({path:`/${item.path}`})
  }
}
onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
  model.value = locale.value.split('-')[0]
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>
<template>
<div class="sub__container " :style="store.responsive || screenSize.width>1034 ?'display:flex':'display:none'">
  <div class="sub__menu__group " :style="store.responsive || screenSize.width>1034?$q.dark.isActive &&screenSize.width<1034 ?'display:flex; background-color: black; color:white; ':'display:flex;':'display:none' ">
    <div class="btn">
      <div class=" btn__group flex">
        <div class=" btn__animation">
          <span class="cursor-pointer text-capitalize">{{ model }}</span>
          <q-menu>
            <q-list>
              <q-item v-for="item in options" v-close-popup clickable @click="langChange(item)">
                <q-item-section>
                  <q-item-label>{{ item.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <div class="btn__animation cursor-pointer" @click="darkMode">
          <q-icon :name="$q.dark.mode?'fas fa-sun':'fas fa-moon'" size="16px" style=""/>
        </div>
      </div>
      <div class="btn__close">
        <q-btn @click="store.change()" rounded flat icon="close" class="cursor-pointer q-mr-xl" dense size="20px" />
      </div>
    </div>
    <div class="cursor-pointer sub__menu" v-for="item in menu">
      {{ item.title }}
      <q-icon size="20px" name="arrow_drop_down" v-if="item.options.length>0" />
      <q-menu v-if="item.options.length>0">
        <q-list  v-for="item2 in item.options">
          <q-item clickable @click="newRoute(true,item2)" v-close-popup="item2.options.length<0" >
            <q-item-section>{{ item2?.title }}</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" v-if="item2.options.length>0" />
            </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list v-for="item3 in item2.options" >
                  <q-item clickable  @click="newRoute(item3.options.length<0,item3)" v-close-popup="item3.options.length>0">
                  <q-item-label>{{item3?.title}}</q-item-label>
                </q-item>
                </q-list>
              </q-menu>
          </q-item>
        </q-list>
      </q-menu>
    </div>

  </div>
  <div class="sub__background"></div>
</div>
</template>

<style scoped lang="scss">
$bace-color: #363636;
.btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 5px;

  &__animation {
    width: 42px;
    height: 42px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid grey;
    background-color: white;
    position: relative;
    overflow: hidden;
    color: $bace-color;

    span {
      color: $bace-color;
      font-weight: 600;
    }

    svg {
      color: $bace-color;
    }

    i {
      color: $bace-color;
    }

  }
}

  .sub{
    &__title__group{
      //width: 80%;
      width: 100%;
      margin: 30px auto;
    }
    &__title{
      width: 32%;
      font-size: 14px;
      line-height: 19px;
      font-weight: 500;
      text-align: center;
      letter-spacing: 1px;
      color: #626262;
      text-transform: uppercase;
      font-family: -apple-system-500, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    &__img{
      width: 32%;
      position: relative;
      overflow: unset;
    }
    &__img::before{
      content: '';
      position: absolute;
      left: 25%;
      bottom: 0;
      width: 50%;
      height: 50px;
      border-radius: 50%;
      background: #626262;
      filter: blur(1.5rem);
    }
    &__menu__group{
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0 0 0 50px;
      height: 50px;

    }
    &__menu{
      margin-right: 20px;
      font-size: 14px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }

  }

  @media screen and (min-width: 1034px) {
    .btn{
      display: none;
    }
    .sub{
      &__title__group{
        //width: 80%;
        width: 100%;
      }
      &__title{
        width: 32%;
        color: #626262;
      &__menu__group{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0 0 0 50px;
        height: 50px;

      }
      &__menu{
        margin-right: 20px;
        font-size: 14px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
      }

    }
  }}
  @media screen and (max-width: 1034px) {
    .sub{
      &__container{
        width: 100%;
        height: 100vh;
        position: absolute;
        color: black;
        top: 0;
        right: 0;
      }
      &__menu__group{
        width: 50%;
        height: 100%;
        align-items: end;
        justify-content: start;
        flex-direction: column;
        position: absolute;
        background-color: white;
        z-index: 99;
        top: 0;
        transform: translateX(103%);
      }

      &__menu{
        width: 100%;
        font-size: 15px;
        padding: 10px 30px;
      }
    }
  }
@media screen and (max-width: 473px) {
  .sub{
    &__container{
      width: 100%;
      height: 100vh;
      position: absolute;
      color: black;
      top: 0;
      right: 0;
    }
    &__menu__group{
      width: 70%;
      height: 100%;
      align-items: end;
      justify-content: start;
      flex-direction: column;
      position: absolute;

      z-index: 99;
      top: 0;
      transform: translateX(50%);
    }

    &__menu{
      width: 100%;
      font-size: 15px;
      padding: 10px 30px;
    }
  }
  .btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px 20px 5px;
    &__group{
      position: absolute;
      bottom: 70px;
      width: 100%;
    }
    &__close{
      position: absolute;
      top: 0;
      right: 10px;
    }
    &__animation {
      width: 42px;
      height: 42px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid grey;
      background-color: white;
      position: relative;
      overflow: hidden;
      color: $bace-color;

      span {
        color: $bace-color;
        font-weight: 600;
      }

      svg {
        color: $bace-color;
      }

      i {
        color: $bace-color;
      }

    }
  }
}

</style>
