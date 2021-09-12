<template>
  <div 
    style="height:300px;"
    class="overflow-auto p-4 md:mt-0 mt-6 bg-white bg-opacity-50 border-2 rounded rounded-xl border-gray-400"
  >
    <div>
      <div class="mb-4">
        <h1 class="text-2xl font-bold text-gray-700 inline md:mr-10 mr-2">
          Weather
        </h1>
        <input
          class="border inline md:text-xl pl-2 rounded bg-white bg-opacity-50"
          type="text"
          name="city"
          :value="city"
          placeholder="Type a city"
          @change="getWeather($event.target.value)"
        >
      </div>

      <div v-if="weather.name">
        <span class="block mb-4 text-xl font-bold">
          {{ weather.name }}
          <sup> {{ weather.sys.country }} </sup>
        </span>
        <div class="text-lg text-6xl text-gray-700">
          {{ weather.main.temp }} 
          <sup> o </sup>C
        </div>
        <p>Gambar awan</p>
        <p> {{ weather.weather[0].description }}</p>
      </div>

      <!-- Skeleton loading -->

      <div v-else>
        <Skeleton :rows="3" />
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "./SkeletonLoading.vue"

export default {
    name: "Weather",
    components: {
        Skeleton,
    },
    data() {
        return {
            weather: {
              name: "Type a city",
              sys: { country: ""},
              main: {temp: ""},
              weather: [
                { description: "" }
              ]},

            city: "",
        }
    },
    methods: {
        getWeather(city) {
            this.weather = ""
            this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15d44f1a44552bfddc3a735c06c66344&units=metric`)
            .then( (response) => this.weather = response.data)
            .catch( (error) => this.weather = {
              name: "Not found",
              sys: { country: ""},
              main: {temp: ""},
              weather: [
                { description: "" }
              ]
            })
            this.city = city
        }
    }
}
</script>