<template>
  <div 
    style="height:280px;"
    class="overflow-auto p-4 md:mt-0 mt-6 bg-white bg-opacity-50"
  >
    <div>
      <div class="mb-4">
        <h1 class="text-2xl font-bold text-gray-700 inline md:mr-10 mr-2">
          Country
        </h1>
        <input
          class="border inline md:text-xl pl-2 rounded bg-white bg-opacity-50"
          type="text"
          name="city"
          :value="city"
          placeholder="Type a country"
          @change="getCity($event.target.value)"
        >
      </div>

      <div v-if="result.name">
        <h1 class="text-2xl font-bold">
          {{ result.altSpellings.slice(-1)[0] }}
        </h1>
        <ul class="list-disc ml-4">
          <li>Capital city: {{ result.capital }}</li>
          <li>Region: {{ result.region }} </li>
          <li>Sub region: {{ result.subregion }} </li>
          <li>Population: {{ Number(result.population).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} </li>
          <li>Area: {{ Number(result.area).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} </li>
        </ul>
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
            result: {
              name: "1",
              altSpellings: ["Type a country"],
              capital: "",
              region: "",
              subregion: "",
              population: "",
              area: ""
            },
            city: "",
        }
    },
    methods: {
        getCity(city) {
            this.result = {};
            this.http.get(`https://restcountries.eu/rest/v2/name/${city}?fullText=true`)
            .then( (response) => this.result = response.data[0])
            .catch( (error) => this.result = {
              name: "Not found",
              altSpellings: ["Not found"],
              capital: "",
              region: "",
              subregion: "",
              population: "",
              area: ""
            })
            this.city = city
        }
    }
}
</script>