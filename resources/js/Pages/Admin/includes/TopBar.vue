<template>
    <nav class="flex gap-2 px-2 shadow-md py-2 text-gray-500 z-50">
        <Link href="/admin" class="text-2xl text-teal-500 self-center md:w-72">RMS</Link>
        <button class="bg-teal-100 rounded-full pr-2 py-1 w-16 self-center"><i class="fa-solid fa-search text-teal-500 text-xl"></i></button>
        <div class="flex-auto"></div>
        <div v-if="$page.props.user" class="flex gap-1 self-center">
            <img src="/assets/h.jpg" class="w-7 h-7 rounded-full shadow ring ring-teal-500 mr-2" alt="">
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="inline-flex self-center hover:text-teal-500 transition" type="button">{{ $page.props.user.name.split(" ")[0] }} <svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <Link href="/dashboard" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                    <Link href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                </li>
                <li>
                    <Link href="/admin/comingsoon" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                </li>
                <li>
                    <Link :href="route('logout')" method="post" as="button" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
                </ul>
            </div>
        </div>
        <button @click="$emit('toggleNav')" class="self-center"><i class="fa-solid fa-bars text-teal-500 text-2xl"></i></button>
    </nav>
</template>

<script>
export default {
    setup(){
        const nav = () => {

        }

        return {
            nav,
        }
    }
}
</script>

<style>

</style>
