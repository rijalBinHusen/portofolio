<template>
<div class="text-center mt-10">
    <div v-for="repo in repos" :key="repo" class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-2/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <!-- service block -->
        <div class="rounded-lg py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">{{ repo?.reposName }}</h3>
            <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
        </div>
        <!-- end service block -->
    </div>
   </div>
</template>

<script>

export default {
    name: "Projects",
    components: {},
    data() {
        return {
            repos: []
        }
    },
    async mounted() {
        // /github
        await this.$store.dispatch("getGithub")
        this.repos = this.$store.getters["gitRepos"]
        // this.http.get("https://api.github.com/users/rijalBinHusen/events")
        // .then( (response) => this.github = response.data )
        // .catch(function (error) {
        // });
    },
}
</script>