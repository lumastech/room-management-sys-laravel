<template>
  <div class="rounded-lg shadow-lg bg-white p-2 md:p-4 hover:scale-105 transition duration-300 relative">
                <div class="relative">
                    <Link :href="'/house/view/'+house.id" class="block overflow-hidden rounded-xl">
                        <img :src="house.image_1" alt="rms" class="aspect-video w-full hover:scale-150 transition duration-300">
                    </Link>
                    <Link href="/" method="post" as="button" class="absolute -bottom-5 right-5 rounded-full text-xl text-white border border-teal-200 w-10 h-10 bg-teal-400 hover:bg-teal-600 hover:text-white transition shadow-md pt-1"><i class="far fa-heart"></i></Link>
                </div>
                <div class="absolute px-2 py-1 right-2 top-1 space-x-2">
                    <Link :href="'/admin/house/update/'+house.id" method="put" class="bg-black/50 px-2 py-1 hover:bg-red-50/50 rounded-full hover:text-red-700 text-teal-500 transition" ><i class="fas fa-edit"></i></Link>
                    <button @click="modalShow(`${'/admin/house/destroy/'+house.id}`, 'delete', 'Are you sure you want to delete this property?')" class="bg-black/50 px-2 py-1 hover:bg-red-50/50 rounded-full hover:text-red-700 text-red-500 transition" ><i class="fas fa-trash-can"></i></button>
                </div>
                <Link :href="'/house/view/'+house.id" class="block md:text-4xl text-xl mt-2 font-bold flex-auto text-teal-400">K {{ house.price }}</Link>
                <Link :href="'/house/view/'+house.id" class="block md:text-xl truncate">{{ house.area }}</Link>
                <Link :href="'/house/view/'+house.id" class="block text-sm truncate">{{ house.town }}</Link>
                <div class="grid grid-cols-3 border-t mt-2 pt-1">
                    <Link class="border-r text-center sm:text-sm truncate">
                        <i class="fa-solid fa-house mr-2 text-teal-500 text-sm"></i>
                        <span class="hidden sm:inline text-xs">{{ house.rooms }} Rooms</span>
                    </Link>
                    <Link class="border-r text-center sm:text-left text-center px-1 truncate">
                        <i class="fa-solid fa-faucet-drip mr-2 text-sm text-teal-500"></i>
                        <span class="hidden sm:inline text-xs">{{ house.water }}</span>
                    </Link>
                    <Link class="pl-2 text-center sm:text-left truncate">
                        <i class="fa-solid fa-lightbulb mr-2 text-sm text-teal-500"></i>
                        <span class="hidden sm:inline text-xs">{{ house.electricity }}</span>
                    </Link>
                </div>
            </div>
</template>

<script>
export default {
    props: {house: Object}
}
</script>

<style>

</style>
