<template>
  <div class="md:flex overflow-hidden md:max-h-screen">
    <Sidebar />
    <component :is="$route.params.page ? $route.params.page : 'about'"></component>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue"
import Blogs from "./Blogs.vue"
import Hero from "./Hero.vue"
import Projects from "./Projects.vue"
import Github from "./Github.vue";
import Weather from "./Weather.vue";
import City from "./City.vue";
import RandomUser from "./RandomUser.vue"
import Skill from "./Skill.vue"

export default {
    components: {
      blogs: Blogs,
      Sidebar,
      about: Hero,
      projects: Projects,
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
    },
}
</script>