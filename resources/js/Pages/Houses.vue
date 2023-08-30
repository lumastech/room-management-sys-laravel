<template>
    <Head title="Home" />
    <div class="home bg-teal-50">
        <Topbar />

        <!-- carousel -->
        <Slider />

        <!-- Search br -->
        <FilterForm />

        <!-- card carousel -->
       <Alike :houses="houses.data.slice(0,4)"/>

    <!-- divider -->
    <hr class="border-t-1 border-teal-300 max-w-7xl mx-auto my-16">

    <!-- listing -->
    <div class="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
        <HouseList :houses="houses.data" />
    </div>

  </div>
</template>

<script >
import { Head, Link } from '@inertiajs/inertia-vue3';
import WebLayout from '../Layouts/WebLayout.vue';
import Alike from './Shared/Alike.vue';
import FilterForm from './Shared/FilterForm.vue';
import HouseList from './Shared/HouseList.vue';
import Slider from './Shared/Slider.vue';
import Topbar from './Shared/Topbar.vue';
// import { initModals } from 'flowbite'
export default {
    layout:WebLayout,
    components: { Head, Link, HouseList, Alike, Topbar, Slider, FilterForm },
    props:{
        houses:Array
    }
}
</script>

<style>

</style>
