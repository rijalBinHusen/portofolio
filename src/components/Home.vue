<template>
  <div class="md:flex">
    <Sidebar />
    <skill class="w-full" />
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue"
import Github from "./Github.vue";
import Weather from "./Weather.vue";
import City from "./City.vue";
import RandomUser from "./RandomUser.vue"
import Skill from "./Skill.vue"

export default {
    components: {
      Sidebar,
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