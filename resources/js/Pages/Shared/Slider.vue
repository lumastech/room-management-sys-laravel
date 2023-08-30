<template>
    <Carousel :items-to-show="1" :itemsToScroll="1" :wrap-around="true" :autoplay="3000" :transition="1000">
        <slider>
            <div v-for="house in houses" :key="house.id" class="hidden duration-700 ease-in-out" data-carousel-item>
                <img :src="house.image_1" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                <div class="text-center px-4 bg-black/50 absolute text-white bottom-0 w-full">{{ house.area }}</div>
            </div>
        </slider>
    </Carousel>
    <div id="default-carousel" class="relative max-w-7xl px-2 mx-auto my-7" data-carousel="slide">
        <!-- Carousel wrapper 22061996 -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96 bg-teal-200">
            <!-- Item 1 -->
            <div v-for="house in houses" :key="house.id" class="hidden duration-700 ease-in-out" data-carousel-item>
                <img :src="house.image_1" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                <div class="text-center px-4 bg-black/50 absolute text-white bottom-0 w-full">{{ house.area }}</div>
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button v-for="i in houses" :key="i" type="button" class="w-3 h-3 rounded-full" aria-current="false" :aria-label="'Slide 1'+(--i)" :data-carousel-slide-to="--i"></button>
        </div>
        <!-- Slider controls -->
        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
    props:{
        houses:Object,
    },

    components: {
        Carousel, Slide, Pagination
    }

}
</script>

<style>

</style>
