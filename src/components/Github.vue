<template>
  <div 
    style="height:300px;" 
    class="overflow-auto p-4 md:mt-0 mt-6 bg-white bg-opacity-50 border-2 rounded rounded-xl border-gray-400"
  >
    <div class="p-4">
      <div class="">
        <div class="mb-4">
          <h1 class="text-2xl font-bold text-gray-700">
            My Github
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
              class="border-b-2 pb-2 border-white"
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
          <!-- Skeleton loading -->
          <div v-else> 
            <Skeleton :rows="3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "./SkeletonLoading.vue"
export default {
    name: "Github",
    components: {
      Skeleton,
    },
    data() {
        return {
            github: [],
        }
    },
    mounted() {
        // /github
        this.http.get("https://api.github.com/users/rijalBinHusen/events")
        .then( (response) => this.github = response.data )
        .catch(function (error) {
            console.log(error);
        });
    },
}
</script>