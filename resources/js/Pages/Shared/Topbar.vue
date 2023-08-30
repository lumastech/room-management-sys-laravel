<template>
    <nav class="bg-white shadow fixed w-full top-0 z-40">
        <div class="max-w-7xl mx-auto relative flex gap-4 md:p-4 px-1 ">
            <a href="/" class="flex-auto md:flex-none text-teal-500 text-4xl font-bold py-1" >RMS</a>
            <div class="hidden md:inline flex-auto capitalize text-right py-1">
                <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">home</a>
                <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">rent</a>
                <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">buy</a>
                <a href="/" class="uppercase bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">sell</a>
            </div>
            <div v-if="!$page.props.user" class="flex py-1">
                <Link :href="route('login')" class="py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md">Login</Link>
                <Link :href="route('register')" class="py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md">Sign-up</Link>
            </div>
            <div v-else class="flex py-1">
                <Link href="/dashboard" class="py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md">Dashboard</Link>
                <Link :href="route('logout')" method="post" as="button" class="text-teal-500 p-2 bg-red-50 rounded-full"><i class="fas fa-lock"></i></Link>
            </div>

            <div class="flex md:hidden gap-2 py-1">
                <button @click="toggleSidenav" class="rounded"><i class="fa-solid fa-bars text-teal-500 text-2xl"></i></button>
            </div>
        </div>

        <!-- side nave -->
        <div ref="sidenavcont" @click="toggleSidenav" class="fixed w-full top-0 h-full bg-black/50 z-50 -translate-x-full">
                <div ref="sidenav" class="fixed h-full w-3/4 left-0 bg-teal-500 transition  -translate-x-full">
                <div class="border-b ">
                <Link href="/" class="block w-full uppercase mr-4 py-1 px-3 text-teal-50 transition hover:bg-teal-600">home</Link>
                <Link href="/" class="block w-full uppercase mr-4 py-1 px-3 text-teal-50 transition hover:bg-teal-600">rent</Link>
                <Link href="/" class="block w-full uppercase mr-4 py-1 px-3 text-teal-50 transition hover:bg-teal-600">buy</Link>
                <Link href="/" class="block w-full uppercase py-1 px-3 text-teal-50 transition hover:bg-teal-700">sell</Link>
            </div>
            <div v-if="!$page.props.user" class="">
                <Link :href="route('login')" class="block text-white py-1 px-4 transition hover:bg-teal-600 ">Login</Link>
                <Link :href="route('register')" class="block text-white py-1 px-4 transition hover:bg-teal-600">Sign-up</Link>
            </div>
            <div v-else class="">
                <Link href="/dashboard" class="block w-full py-1 px-2 text-xl text-white transition hover:bg-teal-600">Dashboard</Link>
                <Link :href="route('logout')" method="post" as="button" class="block w-full text-white p-2 hover:bg-teal-600 transition text-left"><i class="fas fa-lock mr-2"></i>Log out</Link>
            </div>
            </div>
        </div>
    </nav>
</template> 

<script>
import { ref } from 'vue';

export default {
    setup(){
        const sidenavcont = ref(null)
        const sidenav = ref(null)

        let toggleSidenav = () => {
            if (sidenavcont.value.classList.contains('-translate-x-full')) {
                sidenavcont.value.classList.remove('delay-300')
                sidenavcont.value.classList.remove('-translate-x-full')
                sidenav.value.classList.remove('-translate-x-full')
                // console.log()
            }else{
                sidenavcont.value.classList.add('delay-300')
                sidenav.value.classList.add('-translate-x-full')
                sidenavcont.value.classList.add('-translate-x-full')

            }
        }

        return {
            sidenav, sidenavcont, toggleSidenav
        }
    }
}
</script>

<style>

</style>
