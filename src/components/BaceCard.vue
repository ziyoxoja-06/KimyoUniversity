<script setup>
import {defineProps, ref} from 'vue';
import { useQuasar } from 'quasar'
const flatCard = ref(true)

// get configured status
const props = defineProps(['img_width', 'img_height', 'img_src','announcement'])
function change() {
  flatCard.value = !flatCard.value
}
</script>

<template>
  <q-card bordered class="card" :flat="flatCard" @mouseenter="change" @mouseleave="change" style="transition: all .5s">
    <q-img
      :height="img_height"
      :width="img_width"
      :src="img_src"

    />
    <q-card-section>
      <q-card-section class="q-pa-sm">
        <div class="text-h5 q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </div>
      </q-card-section>
      <div class="card__date"> <div :class="announcement?'card__announcement':''"><q-icon name="fa-solid fa-calendar-days"/> 16/05/2023</div> <q-btn color="orange" flat dense>Ya'na...</q-btn></div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.card{
  color: #040460;
  &__date{
    position: relative;
    top: 0;
    padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  &__announcement{
    position: absolute;
    top: -140px;
    right: -10px;
    background-color: orange;
    color: white;
    padding: 5px;
  }
  &__date> i{
    padding-right: 3px;
  }
}
</style>
