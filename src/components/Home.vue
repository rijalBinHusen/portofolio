<template>
  <div>
    <!-- Creaet Blog Portfolio By Joker Banny -->
    <header class="h-screen bg-opacity-40 bg-white p-6 grid">
      <!-- Navbar Menu -->
      <nav class="w-full grid justify-end font-bold">
        <ul class="hidden md:flex space-x-8">
          <li>
            <span class="mr-2">
              <font-awesome-icon :icon="['fab', 'telegram-plane']" /> 
            </span>
            <a href="https://t.me/RijalBinHusen">Telegram</a>
          </li>
          <li>
            <span class="mr-2">
              <font-awesome-icon :icon="['fab', 'github']" /> 
            </span>
            <a href="https://github.com/rijalBinHusen/">Github</a>
          </li>
        </ul>
        <!-- <div class="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-gray-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div> -->
      </nav>

      <!-- Section Hero  -->
      <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
        <div class="grid justify-center items-center order-1 col-span-1">
          <img
            class="lg:h-80 md:h-64 h-40 rounded-full"
            src="../assets/14441415832_86d55370be_o.jpg"
            alt=""
          >
        </div>
        <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
            Hi, I am Rijal, VueJS Enthusiast
          </h1>
          <p class="text-xl text-gray-800 text-center md:text-left">
            It’s so glad to have you here, This page would tell you about me.<br>
            So... just continue you scroll.
          </p>
        </div>
      </div>
    </header>

    <!-- Main -->
    <div class="md:gap-4 p-6 md:grid md:bg-white md:bg-opacity-50">
      <div class="grid grid-cols-2 justify-between lg:px-40 pb-2 mb-2 border-b-2 border-white ">
        <h1 class="justify-start md:text-left text-2xl font-bold">
          Activity
        </h1>
      </div>
      <div 
        class="md:grid grid-cols-2 gap-6 lg:px-40 md:h-screen"
      >
        <Github />
        <Weather />
        <!-- Country search -->
        <div 
          style="height:280px;"
          class="overflow-auto p-4 md:mt-0 mt-6 bg-white bg-opacity-50"
        >
          <Skeleton :rows="3" />
        </div>
        <!-- End of Country search -->

        <!-- Youtube -->
        <div 
          style="height:280px;"
          class="overflow-auto p-4 md:mt-0 mt-6 bg-white bg-opacity-50"
        >
          COuntry
        </div>
        <!-- End of youtube -->
      </div>
      <!-- End of activity -->

      <!-- SkILL -->
      <div class="mt-6 p-4 bg-white bg-opacity-50 md:text-center md:text-3xl text-2xl px-6">
        <div class="md:border-b border-black pb-6">
          <h1 class="mt-2 mb-6 font-bold">
            My Skill 
            <font-awesome-icon icon="trophy" />
          </h1>
          <div class="md:grid grid-cols-4 gap-6">
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                <font-awesome-icon icon="code" /> HTML
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon
                  class="text-gray-400"
                  icon="star"
                />
              </p>
            </div>
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                <font-awesome-icon :icon="['fab', 'css3']" /> CSS
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon
                  class="text-gray-400"
                  icon="star"
                /><font-awesome-icon
                  class="text-gray-400"
                  icon="star"
                />
              </p>
            </div>
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                <font-awesome-icon :icon="['fab', 'js']" /> JavaScript
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
              </p>
            </div>
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                <font-awesome-icon :icon="['fab', 'bootstrap']" /> Bootstrap
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                /><font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
              </p>
            </div>
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                <b>{W3}</b> W3css
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
              </p>
            </div>
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                <font-awesome-icon :icon="['fab', 'vuejs']" /> VueJS
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
              </p>
            </div>
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                <font-awesome-icon :icon="['fab', 'node-js']" /> NodeJS
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
              </p>
            </div>
            <div class="md:border-0 border-b pb-5 mb-4">
              <p class="">
                Tailwindcss
              </p>
              <p>
                <font-awesome-icon icon="star" />
                <font-awesome-icon icon="star" />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
                <font-awesome-icon
                  icon="star"
                  class="text-gray-400"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main -->
    <footer class="bg-white">
      <div class="flex mt-20 px-10 items-center justify-around max-md">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 text-gray-800 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 textgray-800e w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 text-gray-800 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 text-gray-800 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
      <p class="text-center my-10 text-lg">
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  </div>
</template>
<script>
import Github from "./Github.vue";
import Skeleton from "./SkeletonLoading.vue";
import Weather from "./Weather.vue"

export default {
    components: {
      Github,
      Skeleton,
      Weather,
    },
}
</script>