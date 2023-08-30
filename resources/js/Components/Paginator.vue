<template>
    <div class="w-full text-center space-x-2">
        <div v-for="(link, i) in links" :key="i" class="inline">
            <Link v-if="link.url" :href="link.url" v-html="link.label" />
            <span: v-else v-html="link.label" class="text-gray-500"></span:>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        links:Array,
    }
}
</script>

<style>

</style>
