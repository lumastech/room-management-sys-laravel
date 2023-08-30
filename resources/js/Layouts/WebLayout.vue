<template>
    <Head title="Home" />
    <div class="home bg-teal-50">
        <Topbar />

        <div class="pt-12 md:py-16">
            <slot></slot>
        </div>

        <!-- send us a quick email -->
        <div class="mx-4 my-24">
            <div class="max-w-7xl rounded-md bg-teal-500 p-4 mx-2 mb-12 md:!mx-auto text-white">
                <h2 class="text-2xl uppercase">Get more updates</h2>
                <p class="my-4">Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.</p>
                <form action="subscribe" method="post" class="flex gap-4">
                    <div class="relative flex-auto ">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="text" name="email" required class="!bg-teal-400 border border-teal-600 text-white text-sm rounded-lg focus:!ring-teal-600 focus:border-teal-600 block w-full pl-10 p-2.5" placeholder="someone@email.com">
                    </div>
                    <button class="self-center rounded-md border border-teal-600 !bg-teal-50 p-2 text-teal-500 uppercase placeholder-gray-100 transition">Subscribe</button>
                </form>
            </div>
        </div>

        <!-- footer -->
        <div class="bg-teal-500 text-white py-24">

            <footer class="p-4 max-w-7xl mx-auto">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="text-4xl font-bold">RMS</a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm  sm:mb-0 ">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
                <span class="block text-sm sm:text-center">2023 © <a href="#" class="hover:underline">RMS</a>. All Rights Reserved. <i>Designed by: Lumas</i>
                </span>
            </footer>

        </div>
    </div>
</template>

<script >
import { Head, Link } from '@inertiajs/inertia-vue3';
import Topbar from '../Pages/Shared/Topbar.vue';
export default {
    components: { Head, Link, Topbar },
}
</script>

<style>

</style>
