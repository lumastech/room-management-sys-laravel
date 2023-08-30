<template>
    <Head title="Dashboard"></Head>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a href="/admin" class="bg-teal-100 rounded-md p-4 shadow-sm hover:shadow-lg uppercase">
            <div class="flex justify-between text-teal-800">
                <i class="fas fa-home text-4xl self-center text-teal-500"></i>
                <div class="text-center self-center">
                    <p class="truncate">houses</p>
                    <span class="md:text-4xl text-xl">{{ houses.data.length }}</span>
                </div>
            </div>
        </a>

        <a href="/admin" class="bg-green-100 rounded-md p-4 shadow-sm hover:shadow-lg uppercase">
            <div class="flex justify-between text-teal-800">
                <i class="fas fa-home text-4xl self-center text-green-500"></i>
                <div class="text-center self-center">
                    <p class="truncate">occupied</p>
                    <span class="md:text-4xl text-xl">{{ occupied }}</span>
                </div>
            </div>
        </a>

        <a href="/admin" class="bg-orange-100 rounded-md p-4 shadow-sm hover:shadow-lg uppercase">
            <div class="flex justify-between text-teal-800">
                <i class="fas fa-home text-4xl self-center text-orange-500"></i>
                <div class="text-center self-center">
                    <p class="truncate">avairable</p>
                    <span class="md:text-4xl text-xl">{{ available }}</span>
                </div>
            </div>
        </a>

        <a href="/admin/users" class="bg-purple-100 rounded-md p-4 shadow-sm hover:shadow-lg uppercase">
            <div class="flex justify-between text-teal-800">
                <i class="fas fa-users text-4xl self-center text-purple-500"></i>
                <div class="text-center self-center">
                    <p class="truncate">users</p>
                    <span class="md:text-4xl text-xl">{{ users.data.length }}</span>
                </div>
            </div>
        </a>
    </div>


    <div class="grid md:grid-cols 4 gap-4 my-7  overflow-x-auto rounded">
        <div class="md:col-span-3">
            <HousesTable :houses="houses"/>
        </div>
    </div>

    <div class="grid md:grid-cols 4 gap-4 my-7  overflow-x-auto rounded">
        <div class="md:col-span-3">
            <UsersTable :users="users" />
        </div>
    </div>

</template>

<script>
import AdminApp from './AdminApp.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import HousesTable from './Shared/HousesTable.vue';
import UsersTable from './Shared/UsersTable.vue';

export default {
    props:{
        houses:Object,
        users:Object,
        occupied:Number,
        available:Number,
    },
    components: { AdminApp, Head, Link, HousesTable, UsersTable },
    layout: AdminApp,
}
</script>

<style>

</style>
