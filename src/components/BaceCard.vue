<script setup>
import {defineProps, ref} from 'vue';
import {useRouter} from 'vue-router';
const flatCard = ref(true)
const router = useRouter()
// get configured status
const props = defineProps(
  ['data']
)

function change() {
  flatCard.value = !flatCard.value
}
function moreInfo(data) {
  router.push('/news/' + data.id)
}
</script>

<template>
  <q-card :flat="flatCard" :style="!flatCard?'':' transform: translateY(10px); margin-bottom: 10px;'" bordered
          class="card"
          style="transition: all .5s;" @mouseenter="change" @mouseleave="change">
    <q-img
      :src="data.img_src"
      height="150px"

    />
    <q-card-section>
      <q-card-section class="q-pa-sm">
        <div class="text-h5 q-mb-xs">{{ data.title }}</div>
        <div class="text-caption text-grey">
          {{ data.description.split('').slice(0, 80).join('') + '...' }}
        </div>
      </q-card-section>
      <div class="card__date">
        <div class="flex items-center">
          <q-icon name="fa-solid fa-calendar-days"/>
          {{ data.date }}
        </div>
        <q-btn color="orange" @click="moreInfo(data)" dense flat>Ya'na...</q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.card {
  color: #0606a6;

  &__date {
    position: relative;
    top: 0;
    padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  &__announcement {
    position: absolute;
    top: -140px;
    right: -10px;
    background-color: orange;
    color: white;
    padding: 5px;
  }

  &__date > i {
    padding-right: 3px;
  }
}
</style>
