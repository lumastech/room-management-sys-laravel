<template>
    <div class="relative">
        <button @click="toggleDropdown">
            <span>{{ title }}</span>
            <svg class="w-6 h-6 inline" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div ref="dropdown" @mouseleave="closeDropdown" class="fixed bg-teal-500 text-teal-500 w-32 shadow-xl rounded z-30 right-4 hidden">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props:{title:String},
    setup(){
        const dropdown = ref(null)
        const toggleDropdown = ()=>{
            dropdown.value.classList.toggle("hidden")
        }
        const closeDropdown = ()=>{
            dropdown.value.classList.add("hidden")
        }
        return{
            toggleDropdown, dropdown, closeDropdown
        }
    }
}

</script>