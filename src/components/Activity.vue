<template>
  <div class="md:gap-4 p-6 bg-blue-50 md:grid">
    <div class="grid grid-cols-2 justify-between lg:px-40 mb-4">
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
        <div class="bg-white p-4">
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

      <div class="bg-white p-4 md:mt-0 mt-6">
        <div>
          <div class="mb-4">
            <h1 class="text-2xl font-bold text-gray-700">
              Creating pixel perfect icons in Figma
            </h1>
            <p class="hidden">
              View all
            </p>
          </div>

          <div class="">
            <span class="block mb-4 text-xl">12 Feb 20 20 | Design, Pattern</span>
            <p class="text-lg text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
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
       }
    },
    mounted() {
        this.http.get("https://api.github.com/users/rijalBinHusen/events")
        .then( (response) => this.github = response.data )
        .catch(function (error) {
            console.log(error);
        })
    },
}
</script>