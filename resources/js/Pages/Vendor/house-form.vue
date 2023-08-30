<template>
    <Head title="Add House"></Head>
    <h1 class="text-2xl font-bold uppercase rounded bg-white p-2 mb-2 max-w-4xl flex">
        <span class="flex-auto self-center">Add a house</span>
        <i class="fas fa-add self-center"></i>
    </h1>
    {{ form.erros }}
    <form @submit.prevent="submit" class="bg-white rounded shadow-sm max-w-4xl p-2 md:px-4">
        <!-- <input type="hidden" v-model="form._token" :value="csrf_token"> -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 mb-9">
            <div>
                <img ref="image_0" @click="selectFile(0)" src="#" class="image_1 block col-span-2 md:col-span-1 rounded aspect-video w-full h-full bg-gray-50 hover:bg-gray-200 transition" alt="">
                <input ref="file_0" type="file" accept="image/*" v-on:change="previewImage(0)" class="hidden">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.image_0 }}</span>
            </div>

            <div>
                <img ref="image_1" @click="selectFile(1)" src="#" class="image_1 block rounded aspect-video w-full h-full bg-gray-50 hover:bg-gray-200 transition" alt="">
                <input ref="file_1" type="file" accept="image/*" v-on:change="previewImage(1)" class="hidden">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.image_1 }}</span>
            </div>

            <div>
                <img ref="image_2" @click="selectFile(2)" src="#" class="image_1 block rounded aspect-video w-full h-full bg-gray-50 hover:bg-gray-200 transition" alt="">
                <input ref="file_2" type="file" accept="image/*" v-on:change="previewImage(2)" class="hidden">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.image_2 }}</span>
            </div>

        </div>
        <div class="grid md:grid-cols-3 mb-4 gap-4">
            <div class="">
                <label for="name" class="block">House/Owner Name</label>
                <input v-model="form.name" type="text" class="block rounded-md border border-teal-500 w-full" required placeholder="1500">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.name }}</span>
            </div>
            <div class="">
                <label for="price" class="block">Rentals/month</label>
                <input v-model="form.price" type="number" class="block rounded-md border border-teal-500 w-full" required placeholder="1500">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.price }}</span>
            </div>
            <div class="">
                <label for="near_By_school" class="block">Nearby School/University</label>
                <input type="text" v-model="form.near_By_school" class="block rounded-md border border-teal-500 w-full" required placeholder="Cavendish University">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.near_By_school }}</span>
            </div>
        </div>


        <div class="grid md:grid-cols-4 gap-4">
            <div class="">
                <label for="town" class="block">Town</label>
                <input type="text" v-model="form.town" class="block rounded-md border border-teal-500 w-full" required placeholder="Lusaka">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.town }}</span>
            </div>
            <div class="">
                <label for="area" class="block">Area</label>
                <input type="text" v-model="form.area" class="block rounded-md border border-teal-500 w-full" required placeholder="Emmasdele">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.area }}</span>
            </div>
            <div class="">
                <label for="type" class="block">House Type</label>
                <select v-model="form.type" class="block rounded-md border border-teal-500 w-full" required >
                    <option value="Standlone">Standlone</option>
                    <option value="Semidtouched">Semidtouched</option>
                    <option value="Inside Room">Inside Room</option>
                    <option value="Bedsitter">Bedsitter</option>
                </select>
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.type }}</span>
            </div>
            <div class="">
                <label for="rooms" class="block">Number Of Rooms</label>
                <input type="number" v-model="form.rooms" class="block rounded-md border border-teal-500 w-full" required placeholder="eg. 3">
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.rooms }}</span>
            </div>
            <div class="">
                <label for="walfance" class="block">Walfance</label>
                <select v-model="form.walfance" class="block rounded-md border border-teal-500 w-full" required placeholder="Area">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Flower Fance">Flower Fance</option>
                </select>
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.walfance }}</span>
            </div>

            <div class="">
                <label for="electricity" class="block">Electricity</label>
                <select v-model="form.electricity" class="block rounded-md border border-teal-500 w-full" required placeholder="Area">
                    <option value="No">No</option>
                    <option value="Own Prepaid">Own Prepaid</option>
                    <option value="Shared Prepaid">Shared Prepaid</option>
                </select>
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.electricity }}</span>
            </div>

            <div class="">
                <label for="water" class="block">Water</label>
                <select v-model="form.water" class="block rounded-md border border-teal-500 w-full" required placeholder="Area">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.water }}</span>
            </div>

            <div class="">
                <label for="bathroom" class="block">Bathroom</label>
                <select v-model="form.bathroom" class="block rounded-md border border-teal-500 w-full" required>
                    <option value="Out side">Out side</option>
                    <option value="Self contained">Self contained</option>
                </select>
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.bathroom }}</span>
            </div>

            <div class="">
                <label for="carpark" class="block">Car park</label>
                <select v-model="form.car_park" class="block rounded-md border border-teal-500 w-full" required placeholder="Area">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    <option value="2 Cars">2 Cars</option>
                    <option value="3 Cars">3 Cars</option>
                    <option value="4 Cars+">4 Cars+</option>
                </select>
                <span class="block text-xs text-red-500 line-clamp-2">{{ $page.props.errors.car_park }}</span>
            </div>
        </div>
        <div class="text-right my-7">
            <button class="bg-teal-500 text-white shadow-sm hover:shadow-md transition hover:bg-teal-700 w-1/2 p-2 rounded-md uppercase flex text-left font-bold"><span class="flex-auto self-center">post</span><i class="fas fa-add self-center"></i></button>
        </div>
    </form>
</template>

<script>
import VendorLayout from './VendorLayout.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';

export default {
    layout: VendorLayout,
    components: { VendorLayout, Head, Link  },
    props:['csrf_token'],

    setup(){
        const form = useForm({
            name : '',
            price : '',
            user_id : '',
            near_By_school : '',
            type : '',
            rooms : '',
            bathroom : '',
            walfance : '',
            water : '',
            electricity : '',
            rentals : '',
            location : '',
            car_park : '',
            status : '',
            area : '',
            town : '',
            description : '',
            image_1 : '',
            image_2 : '',
            image_3 : '',
        })

        const file_0 = ref(null)
        const file_1 = ref(null)
        const file_2 = ref(null)

        const image_0 = ref(null)
        const image_1 = ref(null)
        const image_2 = ref(null)

        const submit = () => {
            form.post('/vendor/house', {forceFormData: true,})
            // console.log(form)  5s toyota harria
        }


        const previewImage = (pos) => {
            if(pos == 0 && file_0.value.files[0]){
                image_0.value.src = URL.createObjectURL(file_0.value.files[0])
                form.image_1 = file_0.value.files[0]
            }

            if(pos == 1 && file_1.value.files[0]){
                image_1.value.src = URL.createObjectURL(file_1.value.files[0])
                form.image_2 = file_1.value.files[0]
            }

            if(pos == 2 && file_2.value.files[0]){
                image_2.value.src = URL.createObjectURL(file_2.value.files[0])
                form.image_3 = file_2.value.files[0]
            }
        }

        const selectFile = (pos) => {
            if(pos == 0){
                file_0.value.click()
            }

            if(pos == 1){
                file_1.value.click()
            }

            if(pos == 2){
                file_2.value.click()
            }
        }

        return {
            form, submit, previewImage, selectFile,
            file_0, file_1, file_2, image_0, image_1, image_2
        }
    }
}
</script>

<style>
    .image_1{
        background-image: url('../../../assets/addimg.png');
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50%;

    }
</style>
