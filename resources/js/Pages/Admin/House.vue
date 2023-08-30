<template>
    <Head>
        <title>House</title>
    </Head>

    <!-- houese details -->
    <div v-if="house" class="max-w-7xl mx-auto px-2">
        <div class="md:flex md:p-4 p-2 bg-white shadow-sm md:my-9 my-4 rounded ">
            <div class="flex-auto">
                <a href="/admin/house" class="text-sky-600 md:mb-4  inline-block"><i class="fa-solid fa-chevron-left mr-2"></i>Back to List</a>
                <h2 class="text-teal-500 text-2xl md:text-4xl">{{ house.area }}</h2>
                <p class="text-gray-500"> {{ house.town }}</p>
            </div>
            <button class="bg-red-500 text-white rounded px-4 py-2 font-bold shadow hover:bg-red-700 transition">Mark as taken</button>
        </div>
        <div class="w-full shadow-sm bg-white rounded">
            <div class="grid md:grid-cols-4 gap-4 p-1">
                <img :src="img_prev" class="md:col-span-3 aspect-video w-full h-full rounded-md" alt="">
                <div class="grid grid-cols-3 md:flex gap-4 md:flex-col">
                    <img @click="image_prevSwitch(house.image_1)" :src="house.image_1" class="flex-auto aspect-video w-full rounded-md" alt="">
                    <img @click="image_prevSwitch(house.image_2)" :src="house.image_2" class="flex-auto aspect-video w-full rounded-md" alt="">
                    <img @click="image_prevSwitch(house.image_3)" :src="house.image_3" class="flex-auto aspect-video w-full rounded-md" alt="">
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-center py-2">
                <div>
                    <span class="text-gray-400 text-xl">{{ views.length }}</span>
                    <i class="far fa-eye text-gray-500 self-center"></i>
                </div>
                <div class="border-x">
                    <span class="text-xl text-teal-500 self-center">{{ likes.length }}</span>
                    <i class="fas fa-thumbs-up"></i>
                </div>
                <div>
                    <span class="text-xl text-red-500 self-centere">{{ dislikes.length }}</span>
                    <i class="fas fa-thumbs-down"></i>
                </div>
            </div>
            <div class="border-t col-span-4 grid grid-cols-3 text-center">
                <div class="self-center bg-red-50 text-sm h-full">
                    <button class="font-bold text-red-500 hover:text-white transition  w-full bg-red-50 h-full py-2 hover:bg-red-300 rounded-bl">Mark as taken</button>
                </div>
                <div class="self-center bg-teal-50 h-full">
                    <button class="text-teal-500 text-xl md:text-4xl hover:text-teal-900 transition hover:scale-110 active:-rotate-45">
                        <span v-if="liked">
                            <i class="fas fa-thumbs-up"></i>
                        </span>
                        <span v-else>
                            <i class="far fa-thumbs-up"></i>
                        </span>
                    </button>
                    <span> Like</span>
                </div>
                <div class="self-center bg-red-50 h-full">
                    <button  class="text-red-500 text-xl md:text-4xl hover:text-red-900 transition hover:scale-110 active:rotate-45">
                        <span v-if="disliked">
                            <i class="fas fa-thumbs-down"></i>
                        </span>
                        <span v-else class="self-center">
                            <i class="far fa-thumbs-down"></i>
                        </span>
                    </button>
                    <span> Dislike</span>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-7 gap-4 my-4">
            <div class=" md:col-span-2 bg-white p-2 rounded md:shadow-sm">
                <p class="text-2xl text-teal-500 font-bold">K{{ house.price }}</p>
                <p class="text-gray-500">PER/MONTH</p>
            </div>

            <hr class="border-t md:hidden">

            <div class="md:col-span-4 self-center md:bg-white p-2 rounded md:shadow-sm">
                <p class="uppercase font-bold text-2xl text-teal-500">Description</p>
                <p class="text-gray-500 line-clamp-3">{{ house.description }}</p>
            </div>

            <hr class="border-t md:hidden">

            <div class="md:pt-9 md:text-right md:bg-white p-2 rounded md:shadow-sm">
                <button class="rounded px-4 py-2 bg-teal-500 text-white w-48 md:w-full uppercase hover:bg-teal-600 transition">Rent</button>
            </div>
        </div>

        <!-- Ratings -->
        <div class="grid grid-cols-3 md:grid-cols-4 mb-9 bg-white p-2 rounded shadow-sm">
            <div class="text-center pt-4 text-gray-500 border-r">
                <p class="text-4xl md:text-4xl">4.3</p>
                <p class="text-teal-500 text-sm">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </p>
                <p class="">340</p>
            </div>
            <div class="col-span-2 pl-2">
                <div class="flex">
                    <span class=" self-center mr-2">5</span>
                    <div class="h-2 bg-gray-300 flex-auto self-center rounded">
                        <div class="h-2 bg-teal-500 w-3/4 rounded"></div>
                    </div>
                </div>

                <div class="flex">
                    <span class=" self-center mr-2">4</span>
                    <div class="h-2 bg-gray-300 flex-auto self-center rounded">
                        <div class="h-2 bg-teal-500 w-2/4 rounded"></div>
                    </div>
                </div>

                <div class="flex">
                    <span class=" self-center mr-2">3</span>
                    <div class="h-2 bg-gray-300 flex-auto self-center rounded">
                        <div class="h-2 bg-teal-500 w-1/5 rounded"></div>
                    </div>
                </div>

                <div class="flex">
                    <span class=" self-center mr-2">2</span>
                    <div class="h-2 bg-gray-300 flex-auto self-center rounded">
                        <div class="h-2 bg-teal-500 w-1/3 rounded"></div>
                    </div>
                </div>

                <div class="flex">
                    <span class=" self-center mr-2">1</span>
                    <div class="h-2 bg-gray-300 flex-auto self-center rounded">
                        <div class="h-2 bg-teal-500 w-1/4 rounded"></div>
                    </div>
                </div>
            </div>
            <div class="hidden md:flex"></div>
        </div>

        <hr class="border-t border-teal-400 mb-2" />
        <div class="md:flex flex-wrap md:space-x-4 mb-4">
            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <!-- <p class="text-2xl">{{ house.user().name }}</p> -->
                <p>User</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">House Type</p>
                <p>{{ house.type }}</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">Rooms</p>
                <p>{{ house.rooms }}</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">Walface</p>
                <p>{{ house.walfance }}</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">water</p>
                <p>{{ house.water }}</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">Electricity</p>
                <p>{{ house.electricity }}</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">Area</p>
                <p>{{ house.area }}</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">Car park</p>
                <p>{{ house.car_park }}</p>
            </div>

            <div class="text-gray-500 my-4 md:my-2 rounded-md p-2 shadow-sm bg-white">
                <p class="text-2xl">Town</p>
                <p>{{ house.town }}</p>
            </div>
        </div>

        <div v-if="house.description" class="text-gray-500 mt-2 rounded-md p-2 mb-7 shadow-sm bg-white">
            <p class="text-2xl mb-2">Description</p>
            <p>{{ house.description }}</p>
        </div>

        <h3 class="text-2xl text-teal-500 uppercase  mb-4 border-b">Reviews</h3>

        <!-- comments -->
        <div v-for="comment in comments" :key="comment.id" class="flex gap-2 text-gray-500 mb-4">
            <img src="/assets/h.jpg" alt="" class="rounded-full bg-gray-100 w-12 h-12">
            <div class="py-1 pl-2 pr-4 bg-teal-50 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                <p class="text-xl text-teal-500">{{ comment.user }} <span class="text-xs">{{ comment.created_at }}</span></p>
                <p>{{ comment.comment }}</p>
            </div>
        </div>

        <p v-if="comments.length == 0" class="text-2xl text-gray-500">No comments yet.</p>
    </div>

    <Modal :show="modal.show" maxWidth="xl" :closable="true">
        <div>
            <div class="bg-teal-500 text-xl text-white uppercase font-bold p-2">{{ modal.title }}</div>
            <div class="p-4">
                {{ modal.message }}
            </div>
            <div class="p-4 space-x-4 text-right border-t">
                <Link :href="modal.endpoint" @click="modal.show = false" :method="modal.method" class="px-4 py-2 bg-red-500 hover:bg-red-700 transition text-white rounded-md uppercase">Confirm</Link>
                <button @click="modal.show = false" class="px-4 py-2 bg-gray-500 hover:bg-gray-700 transition text-white rounded-md uppercase">Cancel</button>
            </div>
        </div>
    </Modal>

</template>

<script >
import AdminApp from "./AdminApp.vue";
import Modal from "../../Components/Modal.vue";
import { ref } from "vue";
import Paginator from "../../Components/Paginator.vue";
import Alike from './Shared/Alike.vue'
import HousesTable from "./Shared/HousesTable.vue";
// import Rating from "../Shared/Rating.vue";
export default{
    props:{
        house:Object,
        comments:Array,
        likes:Array,
        dislikes:Array,
        views:Array,
        ratings:Array,
        ratings: Object,
        rating: Object,
    },
    layout: AdminApp,
    components:{
    Modal,
    Paginator,
    Alike,
    HousesTable,
},

    setup(){
        const modal = ref({
            show:false,
            title: 'Confirm Action',
            message:'message',
            method: 'delete',
            endpoint: '#',
            color: 'bg-teal-500'
        })

        const img_prev = ref('');

        const modalShow = (endpoint, method, message) => {
            modal.value.message = message
            modal.value.endpoint = endpoint
            modal.value.method = method
            modal.value.show =true

            console.log(modal.value)
        }

        const image_prevSwitch = (img) => {
            img_prev.value = img
        }

        return {
            modal, modalShow, image_prevSwitch, img_prev
        }
    },
    mounted(){
        this.img_prev = this.house.image_1
    }
}
</script>

<style>

</style>
