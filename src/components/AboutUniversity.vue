<script setup>

</script>

<template>
  <div class="about__container">
    <h6 class="text-weight-bold text-h4 text-center">O‘ZBEKISTON RESPUBLIKASI
      FANLAR AKADEMIYASI
      UMUMIY VA NOORGANIK
      KIMYO INSTITUTI</h6>
    <q-img width="400px" height="50%" src='../static/img/carusel_1.jpg' class="about__img q-ml-none q-ml-md-lg" />
    <p class="about__text text-weight-medium text-h6">
      1933-yil Toshkentda Kimyo instituti nomi bilan tashkil etilgan. 1998-yildan shu nomda. Institut negizida bir
      qancha ixtisoslashtirilgan ilmiy tadqiqotlar institutlari, jumladan, institutning alkaloidlar kimyosi, gʻoʻza kimyosi
      hamda polimerlar kimyosi va fizik kimyo laboratoriyalari asosida Oʻzbekiston Fanlar akademiyasi Oʻsimlik moddalari
      kimyosi instituti ajralib chiqdi (1956), 1959-yilda Paxta sellyulozasi kimyosi va texnologiyasi instituti, 1965-yilda
      neft kimyosi laboratoriya asosida Oʻrta Osiyo Neftni qayta ishlash instituti (hozirgi A. Sultonov nomidagi Oʻzbekiston
      Kimyofarmatsevtika instituti) tashkil etildi. Institut olimlari tomonidan 1934-yilda aromatik uglevodorodlarni spirtlar
      bilan alkillash reaksiyasi ochildi. 1938-yilda kislotaasos nazariyasi eʼlon qilindi (M.I. Usanovich). Institutda soʻnggi
      yillarda olib borilgan ilmiy tadqiqotlar natijalari, jumladan, neft va neft mahsulotlarini suyultiruvchi moddalar, gaz
      kondensatlari asosida erituvchilar, "K9" preparati, suvda va moyda eruvchi sirt faol moddalar olish texnologiyasi,
      chigitni tozalash, koʻp maqsadli katalizatorlar, gʻovakli vermukulit, neft va gidrotermal suvlardan yod ajratib olish,
      Markaziy Qizilqum fosforitlaridan oddiy superfosfat, tarkibida fosfor, kaltsiy, azot saklovchi murakkab va organomineral
      oʻgʻitlar ("Azobiokom" va boshqalar), "Hosil" turkumidagi stimulyatorlar, "Sihat", "Sardor" defoliantlari ishlab
      chiqarish texnologiyalari kimyo, neftni qayta ishlash, oziqovqat sanoatlarida, yogʻmoy zavodlarida, burgʻilash
      texnikasida, qishloq xoʻjaligida, qurilish materiallari ishlab chiqarish korxonalarida amaliyotga joriy qilindi.
    </p>

  </div>
</template>

<style scoped lang="scss">
  .about__container{
    min-height: 60vh;
    margin: 80px;
    padding-bottom: 150px;
  }
  @media screen and (max-width: 850px){
    .about{

      &__container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px;
      }
      &__img{
        float: bottom;
       }
    }
  }
  @media screen and (min-width: 850px){
    .about{
      &__img{
        float: right;
      }
    }
  }
</style>
