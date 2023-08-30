<template>
    <!-- houese details -->
    <div v-if="house" class="max-w-7xl mx-auto px-2 mb-16">
        <div class="md:flex md:p-4 p-2 bg-white shadow-sm md:my-9 my-4 rounded ">
            <div class="flex-auto">
                <a href="/admin/house" class="text-sky-600 md:mb-4  inline-block"><i class="fa-solid fa-chevron-left mr-2"></i>Back to List</a>
                <h2 class="text-teal-500 text-2xl md:text-4xl">{{ house.area }}</h2>
                <p class="text-gray-500"> {{ house.town }}</p>
            </div>
            <button class="bg-teal-500 text-white rounded px-4 py-2 font-bold shadow hover:bg-teal-700 transition">Rent</button>
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
                    <i class="fas fa-thumbs-up text-teal-500 ml-1"></i>
                </div>
                <div>
                    <span class="text-xl text-red-500 self-centere">{{ dislikes.length }}</span>
                    <i class="fas fa-thumbs-down text-red-500 ml-1"></i>
                </div>
            </div>
            <div class="border-t col-span-4 grid grid-cols-3 text-center">
                <div class="self-center bg-orange-50 text-sm h-full">
                    <button class="font-bold text-teal-500 hover:text-white transition  w-full bg-orange-50 h-full py-2 hover:bg-orange-300 rounded-bl"><i class="fas fa-share"></i> Share</button>
                </div>
                <div class="self-center bg-teal-50 h-full">
                    <button  @click="likePost(house.id, 'like')" class="text-teal-500 text-xl md:text-4xl hover:text-teal-900 transition hover:scale-110 active:-rotate-45">
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
                    <button  @click="likePost(house.id, 'dislike')"  class="text-red-500 text-xl md:text-4xl hover:text-red-900 transition hover:scale-110 active:rotate-45">
                        <span v-if="disliked">
                            <i class="fas fa-thumbs-down"></i>
                        </span>
                        <span v-else class="self-center">
                            <i class="far fa-thumbs-down"></i>
                        </span>
                    </button>
                    <span> Dislike</span>
                </div>
                <div class="col-span-4 w-full py-2">
                    Rate this house
                    <Rating :rating="rating? rating.stars : 0" :house_id="house.id" />
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-7 gap-4 my-4 bg-white p-2 rounded">
            <div class=" md:col-span-2 ">
                <p class="text-2xl text-teal-500 font-bold">K{{ house.price }}</p>
                <p class="text-gray-500">PER/MONTH</p>
            </div>

            <hr class="border-t md:hidden">

            <div class="md:col-span-4 self-center md:border-x h-full px-2 ">
                <p class="uppercase font-bold text-2xl text-teal-500">Description</p>
                <p class="text-gray-500 line-clamp-3">{{ house.description? house.description : 'No description' }}</p>
            </div>

            <hr class="border-t md:hidden">

            <div class="md:pt-9 md:text-right">
                <button class="rounded px-4 py-2 bg-teal-500 text-white w-48 w-full uppercase hover:bg-teal-600 transition">Rent</button>
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
            <div class="py-1 pl-2 pr-4 bg-teal-100 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                <p class="text-xl text-teal-500">{{ comment.user }} <span class="text-xs">{{ comment.created_at }}</span></p>
                <p>{{ comment.comment }}</p>
            </div>
        </div>

        <p v-if="comments.length == 0" class="text-2xl text-gray-500">No comments yet.</p>
        <!-- comment form -->
        <p class="text-xl text-teal-500 uppercase mb-4 mt-12">Write a comment</p>
        <form @submit.prevent="commentPost">
            <textarea name="review" v-model="commentForm.comment" cols="30" rows="10" class="w-full h-24 rounded border border-teal-500 focus:border focus:border-teal-400 focus:ring-1 focus:ring-teal-400" placeholder="Your comment" required></textarea>
            <div class="text-right">
                <button class="bg-teal-500 px-4 py-2 text-white mt-4 rounded-md hover:bg-teal-700 active:bg-red-500 transition disabled:bg-gray-400" :disabled="!commentForm.isProcessing && commentForm.comment == ''">Submit</button>
            </div>
            <input type="hidden" v-model="commentForm.house_id">
        </form>
    </div>

    <!-- Search br -->
    <Alike :houses="houses.data.slice(0,4)" />

</template>

<script >
import { useForm } from '@inertiajs/inertia-vue3';
import { ref } from '@vue/reactivity'
import WebLayout from '../Layouts/WebLayout.vue'
import Alike from './Shared/Alike.vue';
import Rating from './Shared/Rating.vue';
import { initModals } from 'flowbite'

export default {
    layout: WebLayout,
    props: {
        house:Object,
        houses:Object,
        comments:Object,
        likes:Object,
        views:Object,
        dislikes:Object,
        username: String,
        liked:Boolean,
        disliked:Boolean,
        ratings: Object,
        rating: Object,
    },
    components: { Alike, Rating, },
    setup(){
        const commentForm = useForm({
            comment: '',
            house_id: '',
        })

        const likeForm = useForm({house_id:'', type:''})

        const img_prev = ref('');

        const commentPost = () => {
            if(commentForm.comment && commentForm.house_id){
                commentForm.post('/comment', {preserveScroll:true, onFinish: () => { commentForm.comment = ""} })
            }
        }

        const likePost = (house, like) => {
            likeForm.type = like
            likeForm.house_id = house

            if(likeForm.type && likeForm.house_id){
                likeForm.post('/like', {preserveScroll:true, })
            }else{
                console.log(likeForm)
            }
        }

        const image_prevSwitch = (img) => {
            img_prev.value = img
        }

        return {
            commentForm, commentPost, img_prev, image_prevSwitch, likeForm, likePost
        }
    },

    mounted(){
        this.img_prev = this.house.image_1
        this.commentForm.house_id = this.house.id
        initModals();
    }
}
</script>

<style>

</style>
