<template>
  <div class="h-full fixed w-full">
    <!-- /top bar -->
    <top-bar  @toggleNav="toggleNav"/>
    <div class="flex h-full relative">
        <!-- side bar -->
        <div @click="toggleNav"  ref="navbar" class="absolute md:static transition  h-full w-72 z-30 -top-1 bg-white overflow-x-hidden overflow-y-auto shadow-md -translate-x-full md:translate-x-0">
            <button class="rounded-full px-3 py-1 text-2xl shadow bg-red-500/40 absolute right-2 top-2 md:hidden hover:shadow-lg hover:bg-red-500 hover:text-white transition"> <i class="fas fa-close"></i></button>
            <side-nav />
        </div>
        <!-- main -->
        <div class="flex-auto pb-24 p-4 bg-gray-100 text-teal-500 overflow-y-auto">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
import SideNav from './includes/SideNav.vue'
import TopBar from './includes/TopBar.vue'
import { ref } from '@vue/reactivity';

export default {
  components: { SideNav, TopBar},
    name: 'AdminApp',
    setup(){
        const navbar = ref("navbar")
        const toggleNav = () => {
            navbar.value.classList.toggle("-translate-x-full")
        }

        return{
            toggleNav, navbar
        }
    }
}
</script>

<style>

</style>
