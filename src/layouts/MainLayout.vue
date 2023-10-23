<script setup>
import SubLayout from "src/components/layout/SubLayout/SubLayout.vue";
import FooterLayout from "src/components/layout/FooterLayout.vue";
import { useLayoutStore } from "../stores/layout.ts";
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import TestLayout from "src/components/layout/TestLayout.vue";

const { t, locale } = useI18n();
const $q = useQuasar();
const layoutStore = useLayoutStore();
const text = ref("");
const model = ref("");
const options = [
  { label: "Uz", value: "uz-UZ" },
  { label: "Ru", value: "ru-RU" },
  { label: "En", value: "en-US" },
];
const screenSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
});

function langChange(item) {
  locale.value = item.value;
  model.value = item.label;
}

function darkMode() {
  $q.dark.toggle();
  localStorage.setItem("darkMode", $q.dark.isActive ? "true" : "false");
}

const updateScreenSize = () => {
  screenSize.value = { width: window.innerWidth, height: window.innerHeight };
};

const scrollTop = ref(false);
const floating = ref(false);

// Mounted hook
onMounted(() => {
  layoutStore.baseLoader = false;
  model.value = locale.value.split("-")[0];
  window.addEventListener("resize", updateScreenSize);
  $q.dark.set(localStorage.getItem("darkMode") === "true");
});

// scrolling
function scrolling() {
  100 < window.scrollY ? (scrollTop.value = true) : (scrollTop.value = false);
}
function change() {
  layoutStore.change();
}
</script>
<template>
  <q-layout view="lHh Lpr lFf" @scroll="scrolling($event)">
    <!--  HEADER  -->
    <q-header class="relative-position">
      <!--   contact nav   -->
      <q-toolbar
      class="q-p-none"
        :style="scrollTop ? 'position: fixed' : 'position: sticky;'"
      >
      <div style="width: 100%;">
        <TestLayout />
        <div
        class="nav__contact flex justify-between items-center q-py-sm"
        
      >
    <div class="q-ml-md">
          <span class="text-white">
            <q-icon class="q-mr-sm q-ml-sm" name="fas fa-at" />
            ionxanruz@mail.ru
          </span>
          <span>
            <q-icon class="q-mr-sm q-ml-md" name="fa-solid fa-phone" />
            +998712000036
          </span>
        </div>
         <div
          class="btn q-mr-md"
          :style="screenSize.width < 880 ? 'display:none;' : ''"
        >
          <q-input
            v-model="text"
            bg-color="white"
            dense
            label="Qidirish..."
            label-color="grey"
            outlined
          />
          <div class="btn__animation cursor-pointer" @click="darkMode">
            <q-icon class="q-px-sm" name="fas fa-search" size="16px" />
          </div>
          <div class="btn__animation">
            <span class="cursor-pointer text-capitalize">{{ model }}</span>
            <q-menu>
              <q-list>
                <q-item
                  v-for="item in options"
                  :key="item.label"
                  v-close-popup
                  clickable
                  @click="langChange(item)"
                >
                  <q-item-section>
                    <q-item-label>{{ item.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
          <div class="btn__animation cursor-pointer" @click="darkMode">
            <q-icon
              :name="$q.dark.mode ? 'fas fa-sun' : 'fas fa-moon'"
              size="16px"
            />
          </div>
        </div>
    </div>
      </div>
        
        
        
       
      </q-toolbar>

      <!--   main nav   -->
      <q-toolbar
        class="nav__main flex justify-between items-center q-py-sm shadow-1"
        :style="
          scrollTop
            ? 'background-color: #363636;'
            : 'background-color: #1976D2;'
        "
      >
        <div
          class="flex"
          :style="
            screenSize.width < 600
              ? 'width: 100%;'
              : screenSize.width < 1040
              ? 'width: 50%;'
              : 'width: 17%; '
          "
        >
          <div
            class="flex items-center justify-center cursor-pointer"
            :style="
              screenSize < 600 ? 'width: fit-content;' : 'width: fit-content; '
            "
          >
            <q-img
              class="q-mr-sm"
              :style="
                scrollTop
                  ? 'border-radius:0; '
                  : 'box-shadow: rgba(255,255,255,0.39) 0 10px 30px; border-radius: 50%'
              "
              :alt="$t(`mainLayout.nameUniver`)"
              :title="$t('mainLayout.nameUniver')"
              src="../assets/img/header_logo.png"
              style="max-width: 45px; min-width: 45px"
              @click="$router.push('/')"
            />
          </div>
          <div
            class="nav__main__text flex items-center cursor-pointer"
            @click="$router.push('/')"
            :style="
              scrollTop
                ? screenSize.width < 1100
                  ? 'color:white; margin-left: 10px'
                  : 'color:white'
                : 'color:#fff'
            "
          >
            {{ t("mainLayout.title") }}
          </div>
        </div>
        <div
          class="flex justify-end"
          :style="
            screenSize.width < 400
              ? 'width: fit-content; color: #fff'
              : 'min-width: 50%; color: #fff'
          "
        >
          <q-btn
            v-if="screenSize.width < 1040"
            flat
            round
            class="cursor-pointer"
            icon="fas fa-bars"
            @click="change()"
          />
          <sub-layout />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div :class="layoutStore.pageLoader ? 'loader' : 'loader__hide'">
        <q-spinner-ios color="red" size="40px" />
      </div>
      <div>
        <div :hidden="layoutStore.pageLoader">
          <router-view />
        </div>

        <q-fab
          v-if="scrollTop && screenSize.width > 1034"
          v-model="floating"
          label-position="left"
          color="blue"
          icon="menu"
          padding="5px"
          direction="up"
          style="position: fixed; top: 85%; right: 50px"
        >
          <q-fab-action
            color="primary"
            @click="darkMode"
            :icon="$q.dark.mode ? 'light_mode' : 'dark_mode'"
          />
          <q-fab
            direction="up"
            color="primary"
            hide-icon
            padding="7px"
            @click="floating.value = false"
            :label="model"
          >
            <q-fab-action
              v-for="(item, i) in options"
              color="purple"
              :key="i"
              @click="langChange(item)"
              :label="item.label"
            />
          </q-fab>
        </q-fab>
      </div>
    </q-page-container>
    <FooterLayout style="z-index: 2" />
  </q-layout>
</template>

<style lang="scss" scoped>
$bace-color: #363636;
.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  &__hide {
    display: none;
  }
}
.nav {
  &__contact {
    width: 100%;
    background-color: $bace-color;
    transition: all 2s ease;
  }
  &__main {
    position: sticky;

    &__text {
      width: 72%;
      font-weight: 700;
      font-size: 13px;
    }
  }
}

@media screen and (max-width: 400px) {
  .nav {
    &__contact {
      background-color: $bace-color;
      transition: all 2s ease;
    }
    &__main {
      position: sticky;

      &__text {
        width: 60%;
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
}
.btn {
  width: fit-content;
  display: flex;

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

.header {
  &__logo::before {
    content: "";
    position: absolute;
    top: 0;
    right: 80%;
    width: 0;
    height: 100%;
    background-color: $bace-color;
    animation: 1s header_img linear;
  }

  &__phone {
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
    font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial,
      sans-serif;
  }

  &__img {
    z-index: -1;
  }
}
</style>
