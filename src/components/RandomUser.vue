<template>
  <div 
    style="height:300px;"
    class="overflow-auto p-4 md:mt-0 mt-6 bg-white bg-opacity-50 border-2 rounded rounded-xl border-gray-400"
  >
    <div>
      <div v-if="result.gender">
        <span :class="[result.name.first ? 'text-xl absolute' : 'text-9xl']">
          <font-awesome-icon
            class="cursor-pointer"
            icon="sync"
            @click="getUser"
          />
          <p v-if="!result.name.first" class="text-3xl inline">
            Get random users
            </p>
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
    emits: ["country", "city"],
    data() {
        return {
            result: {
                gender: "n",
                picture: {
                    large: "",
                    },
                name: {
                    title: "",
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
                this.result = response.data.results[0];
                this.$emit("country", response.data.results[0].location.country)
                this.$emit("city", response.data.results[0].location.city)
            })
            .catch( (error) => console.log(error))
        }
    },
}
</script>