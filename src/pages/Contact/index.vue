<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useLayoutStore} from "src/stores/layout";
const layoutStore = useLayoutStore();
onMounted(() => {
  layoutStore.pageLoader = false
})
onUnmounted(()=>{
  layoutStore.pageLoader = true
})
const alert__one = ref(false);
const alert__two = ref(false);

function openNewTab(link) {
  window.open(link, '_blank');
}
</script>

<template>
  <div class="content">
    <p class="text-h5 text-center">O'zbekiston Respublikasi Fanlar Akademiyasi qabulxonasi</p>

    <div class="sub_content q-mt-xl">
      <q-avatar size="170px" color="primary" class="text-white">
      U
    </q-avatar>
      <div class=" base q-mt-lg q-ml-xl ">
        <p class="text-h4 title">O'zbekiston Respublikasi Fanlar Akademiyasi qabulxonasi</p>
        <div class="row">
          <div class="col">
            <div class="flex items-center q-mt-md">
              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fa-solid fa-phone" round/>
              <div class="cursor-pointer">
                <span class="cursor-pointer text__hover"
                      @click="openNewTab('tel:+998-71-262-56-60')">+998-71-262-56-60</span>
                <br>
                <span class="cursor-pointer text__hover"
                      @click="openNewTab('tel:+998-71-262-79-90')">+998-71 262-79-90</span>
              </div>
            </div>
            <div class="q-mt-md" @click="openNewTab('mailto:ionx@academy.uz')">

              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fas fa-at" round/>
              <span class="cursor-pointer text__hover">ionx@academy.uz</span>
            </div>
          </div>
          <div class="col">
            <div class=" flex items-center q-mt-md">
              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fas fa-calendar-alt" round/>
              <span class="cursor-pointer text__hover">Понедельник - пятница с 09:00 до 17:00</span>
              <q-dialog v-model="alert__one">
                <q-card>
                  <q-card-section class="q-mt-md">

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Директор института ОБЩЕЙ И НЕОРГАНИЧЕСКОЙ ХИМИИ АКАДЕМИИ НАУК РЕСПУБЛИКИ УЗБЕКИСТАН (С 2022 года по настоящее время).
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn v-close-popup color="primary" flat label="OK"/>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
           
          </div>
        </div>
      </div>

    </div>
    <div class="sub_content q-mt-xl">
      <q-avatar size="170px" color="primary" class="text-white">
      U
    </q-avatar>
      <div class=" base q-mt-lg q-ml-xl ">
        <p class="text-h4 title">O'zbekiston Respublikasi Fanlar Akademiyasi qabulxonasi</p>
        <div class="row">
          <div class="col">
            <div class="flex items-center q-mt-md">
              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fa-solid fa-phone" round/>
              <div class="cursor-pointer">
                <span class="cursor-pointer text__hover"
                      @click="openNewTab('tel:+998-71-262-56-60')">+998-71-262-56-60</span>
                <br>
                <span class="cursor-pointer text__hover"
                      @click="openNewTab('tel:+998-71-262-79-90')">+998-71 262-79-90</span>
              </div>
            </div>
            <div class="q-mt-md" @click="openNewTab('mailto:ionx@academy.uz')">

              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fas fa-at" round/>
              <span class="cursor-pointer text__hover">ionx@academy.uz</span>
            </div>
          </div>
          <div class="col">
            <div class=" flex items-center q-mt-md">
              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fas fa-calendar-alt" round/>
              <span class="cursor-pointer text__hover">Понедельник - пятница с 09:00 до 17:00</span>
              <q-dialog v-model="alert__one">
                <q-card>
                  <q-card-section class="q-mt-md">

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Директор института ОБЩЕЙ И НЕОРГАНИЧЕСКОЙ ХИМИИ АКАДЕМИИ НАУК РЕСПУБЛИКИ УЗБЕКИСТАН (С 2022 года по настоящее время).
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn v-close-popup color="primary" flat label="OK"/>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: 90%;
  min-height: 40vh;
  margin: 20px auto 40px auto;
  box-shadow: 0 0 10px 10px rgba(131, 131, 131, 0.2);
  padding: 20px;
  border-radius: 10px;
  .base{
    width: 70%;
  }
  .title {
    font-size: 20px;
    line-height: 16px;
    font-weight: bold;
    font-family: -apple-system -700 "Harlow Solid Italic", BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
}

.sub_content{
  display: flex;
}
@media screen and (max-width: 1030px) {
  .sub_content{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.btn {
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  margin-right: 10px;
}

.img {
  width: 200px;
  border-radius: 20px;
  float: right;
}

.text__hover:hover {
  text-decoration: underline;
  transition: .5s ease all;
  color: #1976D2;
}

</style>
