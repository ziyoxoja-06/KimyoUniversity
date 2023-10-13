<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useLayoutStore } from "../../../stores/layout";
const layoutStore = useLayoutStore();
onMounted(() => {
  layoutStore.pageLoader = false;
});
onUnmounted(() => {
  layoutStore.pageLoader = true;
});
const data = [
  {
    title: "",
    newLine: false,
    description: [
      'Учредителем научного Узбекского журнала "Проблемы механики" является Академия наук Республики Узбекистан. Журнал издается с 1992 г, перерегистрирован 22 декабря 2006 г. Агентством информации и связи Республики Узбекистан (сертификат №0050, ISSN 2010-7250).',
    ],
  },
  {
    title: "",
    newLine: false,
    description: [
      "В журнале традиционно публикуются статьи по механике: общая механика, механика деформируемого твердого тела, механика жидкости, плазмы и газа, механика грунтов и применение механики в различных отраслях (строительство, водные проблемы, механика текстильных, сельскохозяйственных машин, автотранспорт, в том числе железнодорожный), промпредприятий и др.",
    ],
  },

  {
    title: "Язык издания:",
    newLine: false,
    description: ["узбекский, русский и английский."],
  },
  {
    title: "Цель журнала:",
    newLine: false,
    description: [
      "– способствовать развитию науки, ознакомление и распространение новых достижения, идей, результаты исследований, и новостей в области механики и ее приложений широкому кругу научного общества, специалистов и инженеров-работников, магистров, докторантов и специалистов из смежных областей науки и техники.",
    ],
  },
  {
    title: "Основные задачи:",
    newLine: true,
    description: [
      "- reflection of results of scientific, research, practical and experimental activities of domestic and foreign " +
        "scientists in the field of mechanics and its applications;",
      "- acquaintance with results of research of the teaching staff of universities, research institutes and industrial enterprises;",
      "- formation of a scientific component of the environment and promotion of main achievements of science in Uzbekistan;",
      "- exchange of experience and achievements in science among colleagues from far and near foreign countries of the world;",
      "- bringing to the journal authoritative authors - the specialists of the highest level;",
      "- expansion of the editorial board and reviewers by well-known Russian and foreign experts;",
      "- inclusion into international databases;",
      "- Increasing the accessibility and openness of the journal in Uzbekistan and abroad.",
    ],
  },
  {
    title: "Speciality: ",
    newLine: true,
    description: [
      "The journal publishes original scientific papers in the field of mechanics and its applications.",
    ],
  },
  {
    title: "Speciality: ",
    newLine: true,
    description: [
      "The journal covers all main directions of research and development in mechanics and its applications (general mechanics, mechanics of deformable rigid body, mechanics of fluid, plasma and gas, the application of mechanics in various fields - engineering, water problems, transport, including railroad transport, etc.). Papers on recommendations for assessing the risk reduction for emergencies of anthropogenic and natural character (flood, fires, earthquakes, etc.) are also published in the journal. The journal publishes only new scientifically significant results obtained in well-known scientific institutes in the cities of the Republic of Uzbekistan, Central Asia, the Caucasus and other countries (USA, Japan, Mexico, Philippines, China, Turkey, etc.). The publication of special issues and reviews devoted to individual scientific and technical problems on the subject of the journal, as well as materials of international congresses, symposiums and conferences is practiced. Materials of young scientists, brief communications, news reports in mechanics (chronicle) and obituaries are published under a separate rubric. The journal is the main Uzbek scientific publication in the field of mechanics, which publishes articles by candidates for academic degrees in technical, physical and mathematical sciences.",
      "Regions of dissemination are all regions of the Republic of Uzbekistan. Sources of funding - the journal is licensed and functions on the principle of self-sufficiency.",
    ],
  },
];
</script>

<template>
  <p class="text-h5 text-weight-bold text-center">About journal</p>

  <q-img
    alt="img"
    class="float-left q-mr-md q-mt-sm q-pa-md"
    height="200px"
    src="src/assets/img/tashkiliy_tuzilma.jpg"
    width="150px"
  />
  <p v-for="item in data" class="">
    <span class="text-subtitle1 text-weight-bold">{{ item.title }}</span
    ><br v-if="item.newLine" />
    <span v-for="text in item.description">" {{ text }}</span>
  </p>
</template>

<style scoped></style>
