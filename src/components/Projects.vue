<template>
<div class="text-center mt-10">
    <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-2/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <!-- service block -->
        <div class="rounded-lg py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <!-- <div class="inline-block text-gray-900 mb-4"> -->
                <!-- icon
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
            </div> -->
            <h3 class="text-lg leading-normal mb-2 font-semibold text-black">SEO Services</h3>
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
        return {}
    },
    mounted() {
        // /github
        this.$store.dispatch("getGithub")
        // this.http.get("https://api.github.com/users/rijalBinHusen/events")
        // .then( (response) => this.github = response.data )
        // .catch(function (error) {
        //     console.log(error);
        // });
    },
}
</script>