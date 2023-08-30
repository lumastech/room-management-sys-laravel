<template>
  <div class="max-w-7xl mx-auto px-2 mt-16">
        <div class="text-center md:text-left md:flex gap-3 my-4">
            <h2 class="text-xl md:text-4xl text-teal-500 flex-auto uppercase font-bold">Search Properties</h2>
            <input type="search" name="search" class="rounded border-teal-500" placeholder="Search properties">
        </div>

        <form @submit.prevent="filterHouse" class="flex flex-col md:flex-row gap-2 bg-white px-2 py-4 shadow-sm rounded">
            <div class="grow md:self-center border-b md:border-r md:border-b-0">
                <p class="text-teal-600 font-bold">Area</p>
                <input type="text" v-model="form.area" class="w-full p-0 border-0 border-b border-teal-500 focus:border-b-2 focus:ring-0" placeholder="Area name" required>
            </div>
            <div class="grow md:self-center border-b md:border-r md:border-b-0">
                <p class="text-teal-600 font-bold">When</p>
                <input type="date" v-model="form.when" class="w-full p-0 border-0 border-b border-teal-500 focus:border-b-2 focus:ring-0" placeholder="Date" required>
            </div>
            <div class="grow md:self-center border-b md:border-r md:border-b-0">
                <p class="text-teal-600 font-bold">Max Price</p>
                <input type="number" v-model="form.price" class="w-full p-0 border-0 border-b border-teal-500 focus:border-b-2 focus:ring-0" placeholder="1500" required>
            </div>
            <div class="md:self-center border-b md:border-r md:border-b-0">
                <p class="text-teal-600 font-bold">Type</p>
                <select v-model="form.type" class="w-full p-0 border-0 border-b border-teal-500 focus:border-b-2 focus:ring-0" required >
                    <option value="Standlone">Standlone</option>
                    <option value="Semidtouched">Semidtouched</option>
                    <option value="Inside Room">Inside Room</option>
                    <option value="Bedsitter">Bedsitter</option>
                </select>
            </div>
            <div class="self-center">
                <button class="p-1 rounded shadow bg-teal-500 text-white">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';

export default {
    setup(){
        const form = useForm({
            area: '',
            when: '',
            price: '',
            type: '',
        })

        const filterHouse = () => {
            if(form.area || form.when || form.price || form.type){
                // form.post('/')
                console.log(form)
            }
        }

        return { form, filterHouse}
    }
}
</script>

<style>

</style>
