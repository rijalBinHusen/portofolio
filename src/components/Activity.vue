<template>
  <div class="md:gap-4 p-6 md:grid md:bg-white md:bg-opacity-50">
    <div class="grid grid-cols-2 justify-between lg:px-40 pb-2 mb-2 border-b-2">
      <h1 class="justify-start md:text-left text-2xl font-bold">
        Activity
      </h1>
    </div>
    <div 
      style="max-height:300px;" 
      class="md:grid grid-cols-2 gap-6 lg:px-40"
    >
      <div 
        style="max-height:300px;" 
        class="overflow-auto"
      >
        <div class="p-4 bg-opacity-50">
          <div class="">
            <div class="mb-4">
              <h1 class="text-2xl font-bold text-gray-700">
                Github
              </h1>
            </div>

            <div class="h-full">
              <span
                v-if="github.length > 0"
                class="text-lg text-gray-700"
              >
                <div
                  v-for="act in github "
                  :key="act.id"
                  class="border-b-2"
                >
                  <!-- Date -->
                  <b>{{ new Date(act.created_at).toISOString().slice(0, 10) }}</b>
                  <br>
                  <!-- actor and activity -->
                  {{ " @" + act.actor.login }} 
                  <!-- activity -->
                  <b> {{ " " + act.type.replace("Event", "") }} </b>
                  <!-- repo name -->
                  {{ " repository " + act.repo.name }}
                  <!-- if activity is push, show the commit -->
                  <div 
                    v-if="act.type === 'PushEvent'"
                    class=""
                  >
                    <b> Commit list:</b>
                    <ul class="list-disc ml-4">
                      <li
                        v-for="commit in act.payload.commits"
                        :key="commit.sha"
                      >
                        {{ commit.message }}
                      </li>
                    </ul>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white bg-opacity-50 p-4 md:mt-0 mt-6">
        <div>
          <div class="mb-4">
            <h1 class="text-2xl font-bold text-gray-700 inline mr-10">
              Weather
            </h1>
            <input
              class="border inline text-xl pl-2"
              type="text"
              name="city"
              :value="city"
              placeholder="Input city"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Activity",
    data() {
        return {
            github: [],
            weather: {},
            city: "London",
        }
    },
    mounted() {
        // /github
        this.http.get("https://api.github.com/users/rijalBinHusen/events")
        .then( (response) => this.github = response.data )
        .catch(function (error) {
            console.log(error);
        });

        // weateher
        this.getWeather(this.city)
    },
    methods: {
        getWeather(city) {
            this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15d44f1a44552bfddc3a735c06c66344&units=metric`)
            .then( (response) => this.weather = response.data)
            .catch( (error) => {
            console.log(error)
            })
            this.city = city
        }
    },
}
</script>