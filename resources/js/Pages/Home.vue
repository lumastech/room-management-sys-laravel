<template>
    <Head title="Home" />
    <div class="home bg-teal-50">
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto relative flex gap-4 px-4 py-4 ">
                <a href="/" class="flex-auto md:flex-none text-teal-500 text-4xl font-bold py-1" >RMS</a>
                <div class="hidden md:inline flex-auto capitalize text-right py-1">
                    <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">home</a>
                    <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">rent</a>
                    <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">buy</a>
                    <a href="/" class="uppercase bg-teal-500 py-1 px-3 shadow text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">sell</a>
                </div>
                <div class="flex py-1">
                    <Link :href="route('login')" class="py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md">Login</Link>
                    <Link :href="route('register')" class="py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md">Sign-up</Link>
                </div>
            </div>
        </nav>

        <!-- carousel -->
        <div id="default-carousel" class="relative max-w-7xl px-2 mx-auto my-7" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96 bg-teal-200">
                <!-- Item 1 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/assets/h.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    <span class="absolute md:text-7xl text-2xl font-bold text-teal-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Rental Management system</span>
                </div>
                <!-- Item 2 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/assets/h.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    <span class="absolute md:text-7xl text-2xl font-bold text-teal-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Rental Management system</span>
                </div>
                <!-- Item 3 -->
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/assets/h.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    <span class="absolute md:text-7xl text-2xl font-bold text-teal-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Rental Management system</span>
                </div>
            </div>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>

        <!-- <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                <img
                    src="/assets/h.jpg"
                    class="block w-full"
                    alt="Wild Landscape"
                />
                </div>
                <div class="carousel-item relative float-left w-full">
                <img
                    src="/assets/h.jpg"
                    class="block w-full"
                    alt="Camera"
                />
                </div>
                <div class="carousel-item relative float-left w-full">
                <img
                    src="/assets/h.jpg"
                    class="block w-full"
                    alt="Exotic Fruits"
                />
                </div>
            </div>
        </div> -->

        <!-- Search br -->
        <div class="max-w-7xl mx-auto px-2 mt-16">
            <div class="text-center md:text-left md:flex gap-3 my-4">
                <h2 class="text-xl md:text-4xl text-teal-500 flex-auto uppercase font-bold">Search Properties</h2>
                <input type="search" name="search" class="rounded border-teal-500" placeholder="Search properties">
            </div>

            <form action="#" method="post" class="flex flex-col md:flex-row gap-2 bg-white px-2 py-4 shadow-sm rounded">
                <div class="grow self-center border-b md:border-r md:border-b-0">
                    <p class="text-teal-600 font-bold">Location</p>
                    <input type="text" name="location" class="w-full p-0 border-0 rounded" placeholder="Location">
                </div>
                <div class="grow self-center border-b md:border-r md:border-b-0">
                    <p class="text-teal-600 font-bold">When</p>
                    <input type="text" name="location" class="w-full p-0 border-0 rounded" placeholder="Date">
                </div>
                <div class="grow self-center border-b md:border-r md:border-b-0">
                    <p class="text-teal-600 font-bold">Max Price</p>
                    <input type="text" name="price" class="w-full p-0 border-0 rounded" placeholder="Date">
                </div>
                <div class="self-center border-b md:border-r md:border-b-0">
                    <p class="text-teal-600 font-bold">Type</p>
                    <input type="text" name="location" class="w-full p-0 border-0 rounded" placeholder="House">
                </div>
                <div class="self-center">
                    <button class="p-1 rounded shadow bg-teal-500 text-white">Search</button>
                </div>
            </form>
        </div>

        <!-- card carousel -->
        <div class="bg-teal-500 py-9 mt-4">
            <div class="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
                <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
                    </div>
                    <p class="text-xl">Emmasdele - 3 Rooms</p>
                    <p class="text-sm ">Address, Lsk, zm</p>
                    <div class="grid grid-cols-3 border-t mt-2 pt-1">
                        <div class="border-r text-center sm:text-left">
                            <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="border-r text-center sm:text-left text-center px-1">
                            <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="text-right text-center sm:text-left">
                            <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                    </div>
                </div>

                <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
                    </div>
                    <p class="text-xl">Emmasdele - 3 Rooms</p>
                    <p class="text-sm ">Address, Lsk, zm</p>
                    <div class="grid grid-cols-3 border-t mt-2 pt-1">
                        <div class="border-r text-center sm:text-left">
                            <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="border-r text-center sm:text-left text-center px-1">
                            <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="text-right text-center sm:text-left">
                            <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                    </div>
                </div>

                <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
                    </div>
                    <p class="text-xl">Emmasdele - 3 Rooms</p>
                    <p class="text-sm ">Address, Lsk, zm</p>
                    <div class="grid grid-cols-3 border-t mt-2 pt-1">
                        <div class="border-r text-center sm:text-left">
                            <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="border-r text-center sm:text-left text-center px-1">
                            <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="text-right text-center sm:text-left">
                            <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                    </div>
                </div>

                <div class="inline md:hidden lg:inline rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
                    </div>
                    <p class="text-xl">Emmasdele - 3 Rooms</p>
                    <p class="text-sm ">Address, Lsk, zm</p>
                    <div class="grid grid-cols-3 border-t mt-2 pt-1">
                        <div class="border-r text-center sm:text-left">
                            <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="border-r text-center sm:text-left text-center px-1">
                            <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                        <div class="text-right text-center sm:text-left">
                            <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                            <span class="hidden sm:inline text-xs">3Rooms</span>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <!-- divider -->
    <hr class="border-t-1 border-teal-300 max-w-7xl mx-auto my-16">

    <!-- listing -->
    <div class="max-w-7xl mx-auto px-2 grid md:grid-cols-4 gap-4 my-7">
        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="hidden sm:inline text-xs">3Rooms</span>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-2 grid md:grid-cols-4 gap-4 my-7">
        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-2 grid md:grid-cols-4 gap-4 my-7">
        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-2 grid md:grid-cols-4 gap-4 my-7">
        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>

        <div class="rounded-lg shadow-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow pt-1"><i class="far fa-heart"></i></button>
            </div>
            <p class="text-xl">Emmasdele - 3 Rooms</p>
            <p class="text-sm ">Address, Lsk, zm</p>
            <div class="grid grid-cols-3 border-t mt-2 pt-1">
                <div class="border-r">
                    <i class="fa-solid fa-house mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="border-r text-center px-1">
                    <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
                <div class="text-right">
                    <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                    <span class="text-xs">3Rooms</span>
                </div>
            </div>
        </div>
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
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm sm:text-center">2023 © <a href="#" class="hover:underline">RMS</a>. All Rights Reserved. <i>Designed by: Lumas</i>
            </span>
        </footer>

    </div>
  </div>
</template>

<script >
import { Head, Link } from '@inertiajs/inertia-vue3';
export default {
    components: {Head, Link},
}
</script>

<style>

</style>
