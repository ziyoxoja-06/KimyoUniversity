<template>
<div class="card relative-position">
  <div class="card__radio" :style="$q.dark.mode?'background-color: #626262':'background-color: white;'">
    <q-option-group
      :options="title"
      size="45px"
      type="radio"
      v-model="color.title"
      inline
    />
  </div>
  <q-separator class="q-mt-xl card__seperator" />
  <div class="card__sections">
    <div class="card__item">
      <slot name="big-card"></slot>
    </div>
    <div class="card__item">
      <slot name="small-cards"></slot>
    </div>
  </div>
</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue';
import { useQuasar } from 'quasar'
const $q = useQuasar()
const color = reactive({
  title: '',
  model: ''
});
const  props = defineProps({
  title: {
    type:  Array,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.card{
  width: 82%;
  height: fit-content;
  position: relative;
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: rgba(128, 128, 128, 0.59) 0 10px 30px;
  z-index: 99;
  &__sections{
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
  }
  &__item{
    width: 49%;
    height:fit-content;
  }
  &__item:first-child{
    width: 49%;
    height: 200px;

    padding-left: 15px;
  }
  &__radio{
    min-width: 40%;
    height: 40px;
    display: flex;
    padding: 0 2%;
    padding-right: 2.5%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 17px;
    left: 29%;
    border-radius: 25px;
    z-index: 1;
  }
  &__seperator{

    width: 100%;
    position: absolute;
    top: -10px;
  }
}
</style>
