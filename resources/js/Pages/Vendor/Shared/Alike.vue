<template>
    <div class="bg-teal-500 py-9 mt-4">
        <div class="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
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
