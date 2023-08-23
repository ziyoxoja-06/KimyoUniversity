<template>
  <div>
    <p class="text-h5 text-center text-weight-bold">Rules to write the papers</p>
    <p>The volume of the article should be no more than 4-5 pages of typewritten text. The text of the article should be
      submitted in electronic version - in the Microsoft Word editor, in A4 format. Left margins: 2 cm; right, top,
      bottom: 2.5 cm. The text of the article is printed in single spacing,
      font Times New Roman, font size 11 pt; with 2 copies in print. At the end of each copy of the article there should
      be the authors' signature.</p>
    <p>
      The article is accompanied by: a list of references, abstracts in Uzbek, Russian, English (3-4 lines). The title
      page should contain the UDC, initials and surname (or surnames) of the author (s), then the title of the article
      in capital letters. Under the list of literature indicate the institution or organization that submitted the
      article, and the date of its submission. Also on a separate page indicate information about authors, their contact
      numbers and e-mail addresses.

      For each article submitted, there should be: an act of expertise; resolution of the laboratory (department)
      seminar or of organization where the author works. An official covering letter of the head of the organization to
      the editor-in-chief, Academician T.R. Rashidov, which indicates possible options for funding the article, is also
      necessary.
    </p>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import {useLayoutStore} from '../../../stores/layout'

const layoutStore = useLayoutStore()

onMounted(() => {
  layoutStore.pageLoader = false
})
onUnmounted(() => {
  layoutStore.pageLoader = true
})

</script>

<style scoped>

</style>
