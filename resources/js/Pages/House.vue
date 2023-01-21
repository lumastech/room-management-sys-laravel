<template>
    <Head title="Home" />
    <div class="home bg-teal-50">
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto relative flex gap-4 px-4 py-4 ">
                <a href="/" class="flex-auto md:flex-none text-teal-500 text-4xl font-bold py-1" >RMS</a>
                <div class="hidden md:inline flex-auto capitalize text-right py-1">
                    <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow-sm text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">home</a>
                    <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow-sm text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">rent</a>
                    <a href="/" class="uppercase mr-4 bg-teal-500 py-1 px-3 shadow-sm text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">buy</a>
                    <a href="/" class="uppercase bg-teal-500 py-1 px-3 shadow-sm text-xl text-teal-50 transition hover:bg-teal-700 rounded-md">sell</a>
                </div>
                <div class="flex py-1">
                    <Link :href="route('login')" class="py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md">Login</Link>
                    <Link :href="route('register')" class="py-1 px-2 text-xl text-teal-500 transition hover:bg-teal-100 rounded-md">Sign-up</Link>
                </div>
            </div>
        </nav>

        <!-- houese details -->
       <div class="max-w-7xl mx-auto px-2">
            <div class="p-4 bg-white shadow-sm my-9 rounded">
                <a href="/houses" class="text-sky-600 mb-4  inline-block"><i class="fa-solid fa-chevron-left mr-2"></i>Back to List</a>
                <h2 class="text-teal-500 text-2xl md:text-4xl">Area</h2>
                <p class="text-gray-500"> Address</p>
            </div>
            <div class="grid md:grid-cols-4 gap-4 w-full shadow-sm p-2 bg-white rounded">
                <img src="assets/h.jpg" class="md:col-span-3 aspect-video w-full h-full rounded-md" alt="">
                <div class="flex gap-4 md:flex-col">
                    <img src="assets/h.jpg" class="flex-auto aspect-video w-full rounded-md" alt="">
                    <img src="assets/h.jpg" class="flex-auto aspect-video w-full rounded-md" alt="">
                </div>
            </div>

            <!-- reate and like -->
            <div class="bg-white rounded p-2 shadow-sm mt-6 flex">
                <div class="flex-auto">
                    <p class="text-2xl text-gray-500">Rate this house</p>
                    <p class="text-teal-500 text-2xl md:text-4xl">
                        <button><i class="far fa-star"></i></button>
                        <button><i class="far fa-star"></i></button>
                        <button><i class="far fa-star"></i></button>
                        <button><i class="far fa-star"></i></button>
                        <button><i class="far fa-star"></i></button>
                    </p>
                </div>
                <div class="flex text-4xl gap-1 self-center md:mr-4">
                    <span class="text-xl text-teal-500 self-center">13</span>
                    <button class="text-teal-500 hover:text-teal-900 transition hover:scale-110 active:-rotate-45"><i class="fa-regular fa-thumbs-up"></i></button>
                    <div class="border-r-2 mx-2"></div>
                    <span class="text-xl text-red-500 self-centere">7</span>
                    <button class="text-red-500 hover:text-red-900 transition flex hover:scale-110 active:rotate-45"><i class="fa-regular fa-thumbs-down"></i></button>
                </div>
            </div>

            <div class="grid md:grid-cols-7 gap-4 my-4">
                <div class=" md:col-span-2 md:bg-white p-2 rounded md:shadow-sm">
                    <p class="text-2xl text-teal-500 font-bold">K2,500</p>
                    <p class="text-gray-500">PER/MONTH</p>
                </div>

                <hr class="border-t md:hidden">

                <div class="md:col-span-4 self-center md:bg-white p-2 rounded md:shadow-sm">
                    <p class="uppercase font-bold text-2xl text-teal-500">Emmasdele</p>
                    <p class="text-gray-500 line-clamp-3">Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi totam praesentium blanditiis quibusdam quis alias, deserunt eligendi iusto fugit. Molestiae laudantium quisquam maxime blanditiis libero voluptas veniam est alias exercitationem? Blanditiis fugit atque asperiores sed, maxime dolorem sequi deleniti vero vitae quisquam distinctio quae voluptate obcaecati ullam molestias autem?</p>
                </div>

                <hr class="border-t md:hidden">

                <div class="md:pt-9 md:text-right md:bg-white p-2 rounded md:shadow-sm">
                    <button class="rounded px-4 py-2 bg-teal-500 text-white w-48 md:w-full uppercase hover:bg-teal-600 transition">Rent</button>
                </div>
            </div>

            <!-- Ratings -->
            <div class="grid grid-cols-3 mb-9 max-w-4xl bg-white p-2 rounded shadow-sm">
                <div class="text-center pt-4 text-gray-500">
                    <p class="text-4xl md:text-4xl">4.3</p>
                    <p class="text-teal-500">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </p>
                    <p class="">340</p>
                </div>
                <div class="col-span-2">
                    <div class="flex">
                        <span class=" self-center mr-2">5</span>
                        <div class="h-2 bg-gray-300 flex-auto self-center">
                            <div class="h-2 bg-teal-500 w-3/4"></div>
                        </div>
                    </div>

                    <div class="flex">
                        <span class=" self-center mr-2">4</span>
                        <div class="h-2 bg-gray-300 flex-auto self-center">
                            <div class="h-2 bg-teal-500 w-2/4"></div>
                        </div>
                    </div>

                    <div class="flex">
                        <span class=" self-center mr-2">3</span>
                        <div class="h-2 bg-gray-300 flex-auto self-center">
                            <div class="h-2 bg-teal-500 w-1/5"></div>
                        </div>
                    </div>

                    <div class="flex">
                        <span class=" self-center mr-2">2</span>
                        <div class="h-2 bg-gray-300 flex-auto self-center">
                            <div class="h-2 bg-teal-500 w-1/3"></div>
                        </div>
                    </div>

                    <div class="flex">
                        <span class=" self-center mr-2">1</span>
                        <div class="h-2 bg-gray-300 flex-auto self-center">
                            <div class="h-2 bg-teal-500 w-1/4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="border-t border-teal-400 mb-7" />
            <div class="md:flex gap-4 my-7">
                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">User</p>
                    <p>User</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">House Type</p>
                    <p>House Type</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">Rooms</p>
                    <p>4 Rooms</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">Wallface</p>
                    <p>yes</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">water</p>
                    <p>yes</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">Electricity</p>
                    <p>yes</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">Area</p>
                    <p>Emmasdele</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">Car park</p>
                    <p>3 cars</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">Town</p>
                    <p>Lusaka</p>
                </div>

                <div class="text-gray-500 my-4 border md:border rounded-md p-2">
                    <p class="text-2xl">Condintion</p>
                    <p>Condintion</p>
                </div>
            </div>


            <div class="text-gray-500 mt-4 border rounded-md p-2 mb-7">
                <p class="text-2xl mb-2">Description</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero deleniti reprehenderit fugiat sunt laudantium doloribus exercitationem, cum repellat quam provident doloremque dolorem asperiores quia ad blanditiis laboriosam suscipit tempora. Nemo quam enim nostrum. Quam vero perferendis quae. Quos provident itaque reiciendis nostrum molestias accusamus dolorem perferendis nihil cum amet.
                </p>
            </div>

            <h3 class="text-2xl uppercase text-gray-500 mb-4 border-b">Reviews</h3>

            <div class="review text-gray-500 border-b pb-4 my-4">
                <div class="flex gap-4">
                    <img src="#" alt="" class="rounded-full bg-gray-100 w-12 h-12 self-center">
                    <span class="text-xl text-teal-500 self-center">User Name</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, tempore?</p>
            </div>

            <div class="review text-gray-500 border-b pb-2">
                <div class="flex gap-4">
                    <img src="#" alt="" class="rounded-full bg-gray-100 w-12 h-12 self-center">
                    <span class="text-xl text-teal-500 self-center">User Name</span>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, tempore?</p>
            </div>

            <p class="text-xl text-gray-500 uppercase mb-4 mt-12">Write a review</p>
            <form action="#" method="post">
                <textarea name="review" id="" cols="30" rows="10" class="w-full h-24 rounded border border-teal-500 focus:border focus:border-teal-400 focus:ring-1 focus:ring-teal-400" placeholder="Your review" required></textarea>
                <div class="text-right">
                    <button class="bg-teal-500 px-4 py-2 text-white mt-4 rounded-md">Submit</button>
                </div>
            </form>

       </div>

        <!-- Search br -->

        <!-- card carousel -->
        <div class="bg-teal-500 py-9 mt-4">
            <div class="max-w-7xl mx-auto px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-7">
                <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

                <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

                <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

                <div class="inline md:hidden lg:inline rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
                    <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
                    <div class="flex gap-4 mt-2 px-2">
                        <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                        <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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
        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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
        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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
        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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
        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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

        <div class="rounded-lg shadow-sm-lg bg-white p-4 hover:scale-105 transition duration-300">
            <img src="assets/h.jpg" alt="rms" class="aspect-video rounded-xl">
            <div class="flex gap-4 mt-2 px-2">
                <p class="text-4xl font-bold flex-auto text-teal-400">K 500</p>
                <button class="rounded-full text-xl text-teal-500 border border-teal-200 w-10 h-10 bg-teal-50 hover:bg-teal-200 hover:text-white transition shadow-sm pt-1"><i class="far fa-heart"></i></button>
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
import { initModals } from 'flowbite'
export default {
    components: {Head, Link},
    mounted(){
        initModals()
    }
}
</script>

<style>

</style>
