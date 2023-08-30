<template>
    <p v-if="!loading" class="text-yellow-500 text-2xl md:text-4xl"  @mouseleave="hoverRating(rating)" style="text-shadow:1px 1px #888">
        <button @mouseover="hoverRating(1)" @click="ratePost(house_id, 1)">
            <span v-if="ratingStar.star_1">
                <i class="fas fa-star"></i>
            </span>
            <span v-else>
                <i class="far fa-star"></i>
            </span>
        </button>
        <button @mouseover="hoverRating(2)" @click="ratePost(house_id, 2)">
            <span v-if="ratingStar.star_2">
                <i class="fas fa-star"></i>
            </span>
            <span v-else>
                <i class="far fa-star"></i>
            </span>
        </button>

        <button @mouseover="hoverRating(3)" @click="ratePost(house_id, 3)">
            <span v-if="ratingStar.star_3">
                <i class="fas fa-star"></i>
            </span>
            <span v-else>
                <i class="far fa-star"></i>
            </span>
        </button>

        <button @mouseover="hoverRating(4)" @click="ratePost(house_id, 4)">
            <span v-if="ratingStar.star_4">
                <i class="fas fa-star"></i>
            </span>
            <span v-else>
                <i class="far fa-star"></i>
            </span>
        </button>

        <button @mouseover="hoverRating(5)" @click="ratePost(house_id, 5)">
            <span v-if="ratingStar.star_5">
                <i class="fas fa-star"></i>
            </span>
            <span v-else>
                <i class="far fa-star"></i>
            </span>
        </button>
    </p>
    <p v-else>Processing...</p>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';
import { reactive, ref } from 'vue';

export default {
    props: {
        rating:Number,
        house_id:Number
    },

    setup(){
        const form = useForm({house_id:'', stars: ''})
        const loading = ref(false)
        const ratingStar = reactive({
            star_1: false,
            star_2: false,
            star_3: false,
            star_4: false,
            star_5: false,
        })

        function clearRating() {
            console.log(rating)
            renderRatings(rating)
        }
        function hoverRating(rate) {
            renderRatings(rate)
        }
        const renderRatings = (rate)=> {
            switch (rate) {
                case 1:
                    ratingStar.star_1 = true
                    ratingStar.star_2 = false
                    ratingStar.star_3 = false
                    ratingStar.star_4 = false
                    ratingStar.star_5 = false
                    break;

                case 2:
                    ratingStar.star_1 = true
                    ratingStar.star_2 = true
                    ratingStar.star_3 = false
                    ratingStar.star_4 = false
                    ratingStar.star_5 = false
                    break;

                case 3:
                    ratingStar.star_1 = true
                    ratingStar.star_2 = true
                    ratingStar.star_3 = true
                    ratingStar.star_4 = false
                    ratingStar.star_5 = false
                    break;

                case 4:
                    ratingStar.star_1 = true
                    ratingStar.star_2 = true
                    ratingStar.star_3 = true
                    ratingStar.star_4 = true
                    ratingStar.star_5 = false
                    break;

                case 5:
                    ratingStar.star_1 = true
                    ratingStar.star_2 = true
                    ratingStar.star_3 = true
                    ratingStar.star_4 = true
                    ratingStar.star_5 = true
                    break;

                default:
                    ratingStar.star_1 = false
                    ratingStar.star_2 = false
                    ratingStar.star_3 = false
                    ratingStar.star_4 = false
                    ratingStar.star_5 = false
                    break;
            }
        }

        const ratePost = (id, stars) => {
            form.house_id = id
            form.stars = stars
            if(form.house_id && form.stars){
                loading.value = true
                form.post('/rating', {preserveScroll:true, onFinish: () => { loading.value = false}})
            }
        }

        return {
            ratingStar, hoverRating, clearRating, form, ratePost, renderRatings, loading
        }
    },
    mounted(){
        this.renderRatings(this.rating)
    },
}
</script>

<style>

</style>
