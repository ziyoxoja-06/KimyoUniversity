<script setup>
import {ref} from "vue";

const alert__one = ref(false);
const alert__two = ref(false);

function openNewTab(link) {
  window.open(link, '_blank');
}
</script>

<template>
  <div class="content">
    <p class="text-h5 text-center">Managment</p>

    <div class="sub_content q-mt-xl">
      <q-img alt="img" class="img q-mr-md" src="src/static/img/Manage-one.jpg"
             title="Ibragimov Aziz Bakhtiyarovich - Director of the Institute" width="200px"/>
      <div class=" base q-mt-lg q-ml-xl ">
        <p class="text-h4 title">Ibragimov Aziz Bakhtiyarovich - Director of the Institute</p>
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
              <span class="cursor-pointer text__hover">Monday - Friday from 9:00 a.m. to 5:00 p.m.</span>
              <q-dialog v-model="alert__one">
                <q-card>
                  <q-card-section class="q-mt-md">

                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Director of the INSTITUTE OF GENERAL AND INORGANIC CHEMISTRY OF THE ACADEMY OF SCIENCES OF THE REPUBLIC OF UZBEKISTAN (from 2022 to present day).
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn v-close-popup color="primary" flat label="OK"/>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
            <div class="q-mt-md">
              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fas fa-user" round/>
              <span class="cursor-pointer text__hover" @click="alert__one = true">Brief biography</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="sub_content q-mt-xl">
      <q-img alt="img" class="img q-mr-md" src="src/static/img/Manage-one.jpg"
             title="Ibragimov Aziz Bakhtiyarovich - Director of the Institute" width="200px"/>
      <div class=" base q-mt-lg q-ml-xl ">
        <p class="text-h4 title">Isamuhamatov Asadbek Zafar o'g'li - AKT xodimi</p>
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
              <q-dialog v-model="alert__two">
                <q-card>
                  <q-card-section>
                    <q-separator />
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Isamuhamatov Asadbek Zafar o'g'li - AKT xodimi
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn v-close-popup color="primary" flat label="OK"/>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
            <div class="q-mt-md">
              <q-btn class="bg-deep-purple-6 btn" color="purple" icon="fas fa-user" round/>
              <span class="cursor-pointer text__hover" @click="alert__two = true">Brief biography</span>
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
