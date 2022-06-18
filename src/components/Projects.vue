<template>
<div class="flex flex-wrap flex-row text-center overflow-auto">
    <!-- Card repos -->
    <div v-if="repos.length" v-for="repo in repos" :key="repo" class="flex-shrink px-4 sm:w-1/2 md:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <!-- service block -->
        <div class="rounded-lg py-8 px-12 mt-5 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">{{ repo?.reposName }}</h3>
            <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
        </div>
        <!-- end service block -->
    </div>
    <!-- End of card repos -->

    <!-- Skeleton loading -->
    <div v-else v-for="num in [ ...Array(12).keys() ]" :key="num" class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <div class="rounded-lg lg:w-80 py-8 px-6 mt-5 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <Skeleton :rows="1" />
        </div>

    </div>
    <!-- End of skeleton loading -->
</div>
</template>

<script>

import Skeleton from "./SkeletonLoading.vue"

export default {
    name: "Projects",
    components: {
        Skeleton
    },
    data() {
        return {
            repos: []
        }
    },
    async mounted() {
        // /github
        await this.$store.dispatch("getGithub")
        setTimeout(() => {
            this.repos = this.$store.getters["gitRepos"]
        }, 1500)
        console.log(this.$store.state.gitRepos)
        // this.http.get("https://api.github.com/users/rijalBinHusen/events")
        // .then( (response) => this.github = response.data )
        // .catch(function (error) {
        // });
    },
}
</script>