<template>
  <div class="md:flex">
    <Sidebar />
    <Hero />
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue"
import Hero from "./Hero.vue"
import Github from "./Github.vue";
import Weather from "./Weather.vue";
import City from "./City.vue";
import RandomUser from "./RandomUser.vue"
import Skill from "./Skill.vue"

export default {
    components: {
      Sidebar,
      Hero,
      Github,
      Weather,
      City,
      RandomUser,
      Skill,
    },
    data() {
      return {
        country: "",
        city: ""
      }
    },
    methods: {
      changeCountry(country) {
        this.country = country;
      },
      changeCity(city) {
        this.city = city
      }
    }
}
</script>