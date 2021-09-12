<template>
  <div 
    style="height:280px;"
    class="overflow-auto p-4 md:mt-0 mt-6 bg-white bg-opacity-50 border-2 rounded rounded-xl border-gray-400"
  >
    <div>
      <div v-if="result.gender">
        <span class="absolute">
          <font-awesome-icon
            class="text-xl cursor-pointer"
            icon="sync"
            @click="getUser"
          />
        </span>
        <div class="grid justify-items-center">
          <img
            :src="result.picture.large"
            alt="User"
            style="width:170px"
            class="rounded-full"
          >
          <h1 class="text-2xl font-bold">
            {{ result.name.title + ". " + result.name.first + " " + result.name.last }}
          </h1>
          {{ result.location.street.name 
            + " Street " 
            + result.location.street.number
            + ", "
            + result.location.city
            + " - "
            + result.location.country
          }}
        </div>
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
    name: "RandomUser",
    components: {
        Skeleton,
    },
    emits: ["country"],
    data() {
        return {
            result: {
                gender: "no data",
                picture: {
                    large: "",
                    },
                name: {
                    title: "No data, click sync icon",
                    first: "",
                    last: "",
                },
                location: {
                    street: {
                        name: "",
                        number: ""
                    },
                    city: "",
                    country: "",
                }
            }
        };
    },
    methods: {
        getUser() {
            this.result = {};
            this.http.get("https://randomuser.me/api?gender=male")
            .then( (response) => {
                console.log(response)
                this.result = response.data.results[0];
            })
            .catch( (error) => console.log(error))
        }
    }
}
</script>