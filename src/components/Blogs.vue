<template>
    <div v-for="post in blogPosts" :key="post.id" class="flex-shrink px-4 w-screen md:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
        <div class="rounded-lg py-8 px-9 mt-5 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 w-full">
            <h3 class="text-lg leading-normal mb-3 font-semibold text-black">
                {{ post?.title }}
            </h3>
            <p class="mb-3">Description: <span class="text-gray-500 ">{{ post.description }}</span></p>
            <p class="text-sm"> Writed: 
                <span class="text-gray-500">{{ post.date }} </span>
            </p>
        </div>
    </div>
</template>

<script>
// blog posts lists
import posts from "../posts/index"

export default {
    name: "Blogs",
    data() {
        return {
            blogPosts: posts
        }
    },
}
</script>