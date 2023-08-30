<template>
    <nav class="flex gap-2 px-2 shadow-md py-2 text-gray-500 z-50">
        <Link href="/vendor" class="text-2xl text-teal-500 self-center md:w-72">RMS</Link>
        <button class="bg-teal-100 rounded-full pr-2 py-1 w-16 self-center"><i class="fa-solid fa-search text-teal-500 text-xl"></i></button>
        <div class="flex-auto"></div>
        <div v-if="$page.props.user" class="flex gap-1 self-center">
            <img src="/assets/h.jpg" class="w-7 h-7 rounded-full shadow ring ring-teal-500 mr-2" alt="">
            <Dropdown :title="$page.props.user.name.split(' ')[0]" >
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <Link href="/dashboard" class="block px-4 py-2 hover:bg-teal-600">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="#" class="block px-4 py-2 hover:bg-teal-600">Settings</Link>
                    </li>
                    <li>
                        <Link href="/vendor/comingsoon" class="block px-4 py-2 hover:bg-teal-600">Earnings</Link>
                    </li>
                    <li class="border-t border-teal-400">
                        <Link :href="route('logout')" method="post" as="button" class="block w-full px-4 py-2 hover:bg-teal-600"> <i class="fas fa-lock mr-2"></i> Sign out</Link>
                    </li>
                </ul>
            </Dropdown>
        </div>
        <button @click="$emit('toggleNav')" class="self-center"><i class="fa-solid fa-bars text-teal-500 text-2xl"></i></button>
    </nav>
</template>

<script>
import Dropdown from '../Shared/Dropdown.vue';

export default {
    setup() {
        const nav = () => {
        };
        return {
            nav,
        };
    },
    components: { Dropdown }
}
</script>

<style>

</style>
