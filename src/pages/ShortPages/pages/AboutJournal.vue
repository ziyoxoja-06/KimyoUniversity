<script setup>
import {onMounted,onUnmounted, ref} from "vue";
import {useLayoutStore} from "../../../stores/layout";
const layoutStore = useLayoutStore();
onMounted(() => {
  layoutStore.pageLoader = false
})
onUnmounted(()=>{
  layoutStore.pageLoader = true
})
const data = [
  {
    title: '',
    newLine: false,
    description: ['The founder of the scientific Uzbek journal "Problems of Mechanics" is the Academy of Sciences of the ' +
    'Republic of Uzbekistan. The journal is published since 1992, re-registered on December 22, 2006 by the Information' +
    ' and Communication Agency of the Republic of Uzbekistan(certificate No. 0050, ISSN 2010-7250).']
  },
  {
    title: '',
    newLine: false,
    description: ['The journal traditionally publishes the papers on mechanics: general mechanics, mechanics of ' +
    'deformable rigid body, mechanics of fluid, plasma and gas, soil mechanics and application of mechanics in various' +
    ' fields (engineering, water problems, mechanics of textile and agricultural machinery, motor transport, including' +
    ' railroad transport), industrial enterprises, etc.']
  },

  {
    title: 'Languages of publication:',
    newLine: false,
    description: ['Uzbek, Russian and English.']
  },
  {
    title: '',
    newLine: false,
    description: ['The aim of the journal is to contribute to the development of science, to bring new ideas, research ' +
    'results, achievements and news in the field of mechanics and its applications to a wide range of scientists, ' +
    'specialists, researchers, masters, doctoral students and specialists from related fields of science and ' +
    'technology.']
  },
  {
    title: 'The main goals are:',
    newLine: true,
    description: [
      '- reflection of results of scientific, research, practical and experimental activities of domestic and foreign ' +
      'scientists in the field of mechanics and its applications;',
      '- acquaintance with results of research of the teaching staff of universities, research institutes and industrial enterprises;',
      '- formation of a scientific component of the environment and promotion of main achievements of science in Uzbekistan;',
      '- exchange of experience and achievements in science among colleagues from far and near foreign countries of the world;',
      '- bringing to the journal authoritative authors - the specialists of the highest level;',
      '- expansion of the editorial board and reviewers by well-known Russian and foreign experts;',
      '- inclusion into international databases;',
      '- Increasing the accessibility and openness of the journal in Uzbekistan and abroad.',
    ]
  },
  {
    title: 'Speciality: ',
    newLine: true,
    description: ['The journal publishes original scientific papers in the field of mechanics and its applications.']
  },
  {
    title: 'Speciality: ',
    newLine: true,
    description: [
      'The journal covers all main directions of research and development in mechanics and its applications (general mechanics, mechanics of deformable rigid body, mechanics of fluid, plasma and gas, the application of mechanics in various fields - engineering, water problems, transport, including railroad transport, etc.). Papers on recommendations for assessing the risk reduction for emergencies of anthropogenic and natural character (flood, fires, earthquakes, etc.) are also published in the journal. The journal publishes only new scientifically significant results obtained in well-known scientific institutes in the cities of the Republic of Uzbekistan, Central Asia, the Caucasus and other countries (USA, Japan, Mexico, Philippines, China, Turkey, etc.). The publication of special issues and reviews devoted to individual scientific and technical problems on the subject of the journal, as well as materials of international congresses, symposiums and conferences is practiced. Materials of young scientists, brief communications, news reports in mechanics (chronicle) and obituaries are published under a separate rubric. The journal is the main Uzbek scientific publication in the field of mechanics, which publishes articles by candidates for academic degrees in technical, physical and mathematical sciences.',
      'Regions of dissemination are all regions of the Republic of Uzbekistan. Sources of funding - the journal is licensed and functions on the principle of self-sufficiency.',

    ]
  },
]
</script>

<template>
  <p class="text-h5 text-weight-bold text-center">About journal</p>

  <q-img alt="img" class=" float-left q-mr-md q-mt-sm q-pa-md" height="200px"
         src="src/assets/img/tashkiliy_tuzilma.jpg" width="150px"/>
  <p v-for="item in data" class=""><span class="text-subtitle1 text-weight-bold">{{ item.title }}</span><br
    v-if="item.newLine"> <span v-for="text in item.description">" {{ text}}</span></p>

</template>

<style scoped>

</style>
