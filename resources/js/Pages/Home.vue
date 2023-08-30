<template>
    <Head title="Home" />
    <div class="home bg-teal-50">
        <!-- carousel -->
        <Slider :houses="$page.props.houses.slice(0, 20)" />

        <!-- Search br -->
        <filter-form />

        <!-- card carousel -->
        <TopSelling :houses="$page.props.houses.slice(0, 4)" />

    <!-- divider -->
    <hr class="border-t-1 border-teal-300 max-w-7xl mx-auto my-16">

    <!-- listing -->
    <div class="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
        <HouseList :houses="$page.props.houses" />
    </div>
  </div>
</template>

<script >
import { Head, Link } from '@inertiajs/inertia-vue3';
import HouseList from './Shared/HouseList.vue';
import MailForm from './Shared/MailForm.vue';
import Topbar from './Shared/Topbar.vue';
import FilterForm from './Shared/FilterForm.vue';
import Slider from './Shared/Slider.vue';
import WebLayout from '../Layouts/WebLayout.vue';
import { initModals } from 'flowbite'
import TopSelling from './Shared/TopSelling.vue';
export default {

    layout: WebLayout,
    components: { Head, Link, MailForm, Topbar, HouseList, FilterForm, Slider, TopSelling },
    mounted(){
        initModals();
    }
}
</script>
