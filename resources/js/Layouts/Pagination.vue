<template>
  <div class="w-full text-center space-x-2">
    <div class="inline mx-auto">
        <Link v-for="(link, i) in links" :key="i" :href="link.url" v-html="link.label" />
    </div>
    </div>
</template>

<script>
export default {
    props:{link:Array}
}
</script>

<style>

</style>
