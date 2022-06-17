<template>
<!-- <div class="rounded rounded-xl md:flex flex-col md:flex-row md:min-h-screen w-full"> -->
  <div class="md:min-h-screen sidebar flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 bg-opacity-50 flex-shrink-0 md:rounded-r-md rounded-b-md mr-6">
    <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
      <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Rijal Bin Husen</a>
      
      <!-- Burger button -->
      <button  @click="open = !open" class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline" >
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path v-if="open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path v-else fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <!-- Burger button -->

    </div>

    <!-- In mobile view hide it, but can toggle active or not -->
    <nav v-if="open" class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
      <router-link :to="{ name: 'page', params: { page: link?.name } }" v-for="link in links" :key="link.id" :class="['cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline', active === link.id ? 'bg-gray-200' : '' ]" @click="active = link.id">
        {{ link.judul }}
      </router-link> 

    </nav>
    <!-- In mobile view hide it, but can toggle active or not -->

  </div>
<!-- </div> -->
</template>

<script>
export default {
    name: "Sidebar",
    data() {
      return {
        links: [
          { id: 1, judul: "Projects", name: "projects"},
          { id: 2, judul: "Blogs", name: "blogs"},
          { id: 3, judul: "Timeline & projects", name: "timeline"},
          { id: 4, judul: "Connect", name: "connect"},
          { id: 5, judul: "About", name: "about"},
        ],
        active: 0,
        mobileView: false,
        open: true,
      }
    },
    methods: {
      checkScreen() {
        if(window.innerWidth <= 750) {
            this.mobileView = true;
            this.open = false
            return
        }
            this.mobileView = false;
            this.open = true
      },
    },
    created() {
      // add event listener to window on resize
      window.addEventListener("resize", this.checkScreen);
      // run this function after component created
      this.checkScreen()
    },
}
</script>

<style scoped>
  .sidebar {
    background: rgb(255, 255, 255);
    /* background: linear-gradient(121deg, rgb(153, 225, 239) 0%, rgba(140,226,255,1) 39%, rgb(162, 208, 255) 100%);  */ 
  }
</style>