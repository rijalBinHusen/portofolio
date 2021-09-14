<template>
  <div>
    <!-- Creaet Blog Portfolio By Joker Banny -->
    <header class="h-screen bg-opacity-40 bg-white p-6 grid">
      <!-- Navbar Menu -->
      <nav class="w-full grid justify-end font-bold">
        <ul class="hidden md:flex space-x-8">
          <li>
            <span class="mr-2">
              <font-awesome-icon :icon="['fab', 'telegram-plane']" /> 
            </span>
            <a href="https://t.me/RijalBinHusen">Telegram</a>
          </li>
          <li>
            <span class="mr-2">
              <font-awesome-icon :icon="['fab', 'github']" /> 
            </span>
            <a href="https://github.com/rijalBinHusen/">Github</a>
          </li>
        </ul>
      </nav>

      <!-- Section Hero  -->
      <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
        <div class="grid justify-center items-center order-1 col-span-1">
          <img
            class="lg:h-80 md:h-64 h-40 rounded-full"
            src="../assets/14441415832_86d55370be_o.jpg"
            alt=""
          >
        </div>
        <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
            Hi, I am Rijal, VueJS Enthusiast
          </h1>
          <p class="text-xl text-gray-800 text-center md:text-left">
            It’s so glad to have you here, This page would tell you about me.<br>
            So... just continue you scroll.
          </p>
        </div>
      </div>
    </header>

    <!-- Main -->
    <div class="md:gap-4 p-6 md:grid md:bg-white md:bg-opacity-50">
      <div class="grid grid-cols-2 justify-between lg:px-40 pb-2 mb-2 border-b-2 border-white ">
        <h1 class="justify-start md:text-left text-2xl font-bold">
          Api Consume
        </h1>
      </div>
      <div 
        class="md:grid grid-cols-2 gap-2 lg:px-40 md:h-screen"
      >
        <Github />
        <RandomUser
          @country="changeCountry($event)"
          @city="changeCity($event)"
        />
        <City :country-user="country" />
        <Weather :city-user="city" />
      </div>
      <!-- End of activity -->

      <!-- SkILL -->
      <div class="mt-6 rounded p-4 bg-white bg-opacity-50 md:text-center md:text-3xl text-2xl px-6">
        <Skill />
      </div>
    </div>
    <!-- Main -->
    <footer class="bg-white mx-6 p-3 rounded bg-opacity-50 md:text-center md:mt-20 mb-6 ">
      <p class="text-3xl mb-3">
        This page was build with:
      </p>
      <div class="md:grid grid-cols-3 gap-4  px-10 items-center justify-around max-md text-3xl">
        <div class="mb-4">
          <font-awesome-icon :icon="['fab', 'vuejs']" /> 
          <a
            href="https://vuejs.org/"
            target="blank"
          >
            VueJS
          </a>
        </div>
        <div class="mb-4">
          <font-awesome-icon :icon="['fab', 'css3']" /> 
          <a
            href="https://tailwindcss.com/"
            target="blank"
          >
            Tailwindcss
          </a>
        </div>
        <div class="mb-4">
          <font-awesome-icon :icon="['fab', 'github']" /> 
          <a
            href="https://api.github.com/"
            target="blank"
          >
            Github Api
          </a>
        </div>
        <div class="mb-4">
          <font-awesome-icon icon="user" />
          <a
            href="https://randomuser.me/"
            target="blank"
          >
            Random users Api
          </a>
        </div>
        <div class="mb-4">
          <font-awesome-icon icon="globe-europe" />
          <a
            href="https://restcountries.eu/"
            target="blank"
          >
            Country Api
          </a>
        </div>
        <div class="mb-4">
          <font-awesome-icon icon="cloud-rain" />
          <a
            href="https://openweathermap.org/"
            target="blank"
          >
            Weater Api
          </a>
        </div>
      </div>
      <p class="text-center my-10 text-lg">
        No copyright ©2021
      </p>
    </footer>
  </div>
</template>
<script>
import Github from "./Github.vue";
import Weather from "./Weather.vue";
import City from "./City.vue";
import RandomUser from "./RandomUser.vue"
import Skill from "./Skill.vue"

export default {
    components: {
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