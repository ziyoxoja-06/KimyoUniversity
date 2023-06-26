<script setup>
const data = [
  { title: 'Naumov Sergey Nikolaevich (1874-1933), Doctor of Chemical Sciences, Professor, Organic Chemistry.',
    date: '1933'
  },
  { title: 'Kolosovsky Nikolai Aleksandrovich (1886-1978), Doctor of Physical and Chemical Sciences at the University of Liege, professor, organic chemistry.',
    date: "1933-1935"
  },
  { title: 'Usanovich Mikhail Ilyich (1894-1981), Doctor of Chemical Sciences, Professor, Academician of the Academy of Sciences of the Kazakh SSR (1962), physical chemistry.',
    date: "1935-1942"
  },
  { title: 'Tashpulatov Yulchi Tashpulatovich (1905-1956), doctor of technical sciences, chemistry of silicates.',
    date: "1942-1946"
  },
  { title: 'Sadykov Abid Sadykovich (1913 - 1987), Doctor of Chemical Sciences, Professor, Academician of the Academy of Sciences of the USSR and the Academy of Sciences of the Republic of Uzbekistan, organic and bioorganic chemistry.',
    date: "1946-1949"
  },
  { title: 'Yunusov Sabir Yunusovich (1909-1995), doctor of chemical sciences, professor, academician of the Academy of Sciences of the Republic of Uzbekistan, chemistry of plant substances.',
    date: "1949-1952"
  },
  { title: 'Usmanov Khamdam Usmanovich (1916-1994), doctor of technical sciences, professor, academician of the Academy of Sciences of the Republic of Uzbekistan, chemistry and technology of cotton cellulose, radiation chemistry of polymers and synthesis of medical polymers.',
    date: "1952-1956"
  },
  { title: 'Aliev Yakub Yusupovich (1911-1965), Doctor of Chemical Sciences, organic catalysis.',
    date: "1956-1965"
  },
  { title: 'Akhmedov Karim Sadykovich (1914-2003), Doctor of Chemical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan, colloid chemistry, physical and chemical mechanics and physical chemistry of polymers.',
    date: "1965-1972"
  },
  { title: 'Askarov Mirkhozhi Askarovich (born in 1931), Doctor of Technical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan, polymer chemistry, synthesis of new monomers and polymers, use of polymers.',
    date: "1972-1982"
  },
  { title: 'Beglov Boris Mikhailovich (born in 1938), Doctor of Technical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan, technology of inorganic substances.',
    date: "1982-1989"
  },
  { title: 'Salimov Zokirzhon Salimovich (born in 1940), Doctor of Technical Sciences, Professor, Academician of the Academy of Sciences of the Republic of Uzbekistan, processes and apparatuses of chemical technology, oil and gas chemistry.',
    date: "1990-2010"
  },
  { title: 'Zakirov Bakhtiyor Sobirzhanovich (born in 1946), Doctor of Chemical Sciences, technology of inorganic substances, chemicalization of agro-industrial production.',
    date: "December 21, 2010 to present"
  },
]
</script>

<template>
  <h4 class="text-center text-weight-bold">Directors of the Institute</h4>
<div class="text-h6 text-center text-weight-bold" v-for="item in data">
  <p>{{item.date}}</p>
  <p>{{item.title}}</p>
  <q-separator class="q-my-md" inset/>
</div>
</template>

<style scoped>

</style>
