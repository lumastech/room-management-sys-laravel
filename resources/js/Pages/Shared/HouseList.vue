<template>
    <HouseItem v-for="house in houses" :key="house.id" :house="house" />
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

<style>

</style>
