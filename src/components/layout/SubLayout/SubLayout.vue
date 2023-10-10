<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {options} from 'src/components/layout/SubLayout/Sublayout.ts';
import {useLayoutStore} from "../../../stores/layout";
import {useRouter} from "vue-router";

const router = useRouter();
const {t, locale} = useI18n()
const menu = computed(() => {
  return [
    // First dropdown
    {
      title: t('subLayout.about'),
      path: '#',
      options: [
        {
          title: t('subLayout.about_item.organize'),
          path: 'structure',
          options: []
        },
        {
          title: t('subLayout.about_item.about_institute'),
          path: '#',
          options: []
        },
        {
          title: t('subLayout.about_item.leadership'),
          path: 'managment',
          options: []
        },
        {
          title: t('subLayout.about_item.institute_directors'),
          path: 'directors',
          options: []
        },

        // {
        //   title: t('subLayout.about_item.important_results'),
        //   path: '#',
        //   options: []
        // },
        // {
        //   title: t('subLayout.about_item.scientific_research'),
        //   path: '#',
        //   options: []
        // },
        // {
        //   title: t('subLayout.about_item.academics'),
        //   path: '#',
        //   options: []
        // },
      ]
    },
    // Second dropdown
    {
      title: t('subLayout.department'),
      path: '#',
      options: [
        {
          title: t('subLayout.labaratories'),
          path: '#',
          options: [
            {
              title: t('subLayout.labaratories_item.one'),
              path: 'seismodinamic',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.two'),
              path: 'dynamic',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.three'),
              path: 'experimental',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.four'),
              path: 'mechanic',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.five'),
              path: 'theory',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.six'),
              path: 'prosses',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.seven'),
              path: 'gas',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.eight'),
              path: '#',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.nine'),
              path: '#',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.ten'),
              path: '#',
              options: []
            },
            {
              title: t('subLayout.labaratories_item.eleven'),
              path: '#',
              options: []
            },
          ]
        },
        {
          title: t('subLayout.information_anlys'),
          path: 'info-analitical',
          options: []
        },
        {
          title: t('subLayout.information_base'),
          path: 'info-resurse-center',
          options: []
        },
        {
          title: t('subLayout.unique_objects'),
          path: 'unique-project',
          options: []
        },
        {
          title: t('subLayout.personnel_department'),
          path: 'personnel-inspector',
          options: []
        },
        {
          title: t('subLayout.economic_service'),
          path: 'admin-economic',
          options: []
        }
      ]
    },
    // Third dropdown
    {
      title: t('subLayout.activities'),
      path: '#',
      options: [
        {
          title: t('subLayout.scientific_activity'),
          path: 'scientific-activity',
          options: []
        },
        {
          title: t('subLayout.scientific_council'),
          path: 'scientific-council',
          options: []
        },
        {
          title: t('subLayout.scientific_grants'),
          path: "scientific-grants",
          options: []
        },
        {
          title: t('subLayout.scientific_cooperation'),
          path: 'scientific-cooperation',
          options: []
        },
        {
          title: t('subLayout.young_scientists'),
          path: 'young-scientists',
          options: []
        },
        {
          title: t('subLayout.trade_union'),
          path: 'institute-trade-union',
          options: []
        },
        {
          title: t('subLayout.photo'),
          path: 'all-photos',
          options: []
        }
      ]
    },
    // Fourth dropdown
    {
      title: t('subLayout.special_council'),
      path: '#',
      options: [
        {
          title: t('subLayout.scientific_degrees'),
          path: 'scientific-degrees',
          options: []
        },
        {
          title: t('subLayout.scientific_seminars'),
          path: 'seminar-scientific',
          options: []
        },
        {
          title: t('subLayout.dissertations'),
          path: 'thesis-dissertations',
          options: []
        },

      ]
    },
    // Fifth dropdown
    {
      title: t('subLayout.doctarate_coure'),
      path: '#',
      options: [
        {
          title: t('subLayout.course_dsc'),
          path: 'course-dsc',
          options: []
        },
        {
          title: t('subLayout.course_phd'),
          path: 'course-phd',
          options: []
        },
        {
          title: t('subLayout.course_ind'),
          path: 'course-ind',
          options: []
        },
      ]
    },
    // Sixth dropdown
    {
      title: t('subLayout.journal'),
      path: '#',
      options: [
        {
          title: t('subLayout.journal_about'),
          path: 'about-journal',
          options: []
        },
        {
          title: t('subLayout.write'),
          path: 'rules-write',
          options: []
        },
        {
          title: t('subLayout.archive'),
          path: 'archive',
          options: []
        },
      ]
    },
    //seven
    {
      title: t('subLayout.collactive'),
      path: '#',
      options: []
    },
    //eigth
    {
      title: t('subLayout.contact'),
      path: '#',
      options: []
    },
  ]
})
const store = useLayoutStore()

function darkMode() {
  $q.dark.toggle();
  localStorage.setItem("darkMode", $q.dark.isActive ? "true" : "false");
}

const screenSize = ref({width: window.innerWidth, height: window.innerHeight});
const model = ref('')
const updateScreenSize = () => {
  screenSize.value = {width: window.innerWidth, height: window.innerHeight};
};

function langChange(item) {
  locale.value = item.value
  model.value = item.label
}

function newRoute(check, item) {
  if ((!check || item.path !== '#') && store.shortRout !== item.path) {
    store.pageLoader = true
    store.newRoute(item.path)
    router.push({path: `/${item.path}`})
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
  <div :style="store.responsive || screenSize.width>1034 ?'display:flex':'display:none'" class="sub__container ">
    <div :style="store.responsive || screenSize.width>1034?$q.dark.isActive &&screenSize.width<1034 ?'display:flex; background-color: black; color:white; ':'display:flex;':'display:none' "
         class="sub__menu__group ">
      <div class="btn">
        <div class=" btn__group flex">
          <div class=" btn__animation">
            <span class="cursor-pointer text-capitalize">{{ model }}</span>
            <q-menu>
              <q-list>
                <q-item v-for="item in options" v-close-popup clickable @click="langChange(item)">
                  <q-item-section>
                    <q-item-label >{{ item.label }}</q-item-label>
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
          <q-btn class="cursor-pointer q-mr-xl" dense flat icon="close" rounded size="20px" @click="store.change()"/>
        </div>
      </div>
      <div v-for="item in menu" class="cursor-pointer sub__menu">
        {{ item.title }}
        <q-icon v-if="item.options.length>0" name="arrow_drop_down" size="15px"/>
        <q-menu v-if="item.options.length>0">
          <q-list v-for="item2 in item.options">
            <q-item v-close-popup="item2.options.length<0" clickable @click="newRoute(true,item2)">
              <q-item-section><span>{{ item2?.title }}</span></q-item-section>
              <q-item-section side>
                <q-badge v-if="item2.path === '#' && item2.options.length===0" color="red">test</q-badge>
              </q-item-section>
              <q-item-section side>
                <q-icon v-if="item2.options.length>0" name="keyboard_arrow_right"/>
              </q-item-section>
              <q-menu anchor="top end" self="top start">
                <q-list v-for="item3 in item2.options">
                  <q-item v-close-popup="item3.options.length>0" clickable
                          @click="newRoute(item3.options.length<0,item3)">
                    <q-item-label>{{ item3?.title }}</q-item-label>
                  </q-item>
                </q-list>
              </q-menu>
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/components/layout/SubLayout/SubLayout.scss";
</style>
