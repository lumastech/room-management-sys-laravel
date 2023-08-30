<template>
    <div class="bg-teal-500 py-9 mt-4">
        <h2 class="text-2xl capitalize text-white px-2 font-bold">Most veiwed</h2>
        <div class="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7 border-t border-teal-300 pt-4">
            <HouseItem v-for="house in houses" :key="house.id" :house="house" />
        </div>
    </div>
</template>

<script>
import HouseItem from './HouseItem.vue';

export default {
    props: {
        houses: Array
    },
    components: { HouseItem }
}
</script>
