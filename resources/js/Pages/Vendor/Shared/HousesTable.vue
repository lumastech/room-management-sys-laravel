<template>
    <div class="rounded p-2  w-full overflow-x-hidden">
        <h2 class="text-2xl">Houses</h2>
        <div class="border p-2 border-teal-500 rounded-md mb-4 inline-block">
            <span class="">Status : </span>
            <div class="h-2 w-2 bg-red-500 rounded-full inline-block"></div> <span class="text-red-400">Occupied</span> |
            <div class="h-2 w-2 bg-green-500 rounded-full inline-block"></div> <span class="text-green-500">Avairable</span> |
            <div class="h-2 w-2 bg-yellow-500 rounded-full inline-block"></div> <span class="text-yellow-500">unknown</span> |
            <div class="h-2 w-2 bg-gray-400 rounded-full inline-block"></div> <span class="text-gray-400">unknown</span>
        </div>
        <div class="overflow-x-auto" style="min-height: 200px;">
            <table class="table-auto w-full overflow-x-auto">
                <thead class="text-left border-b-2 uppercase">
                    <tr>
                        <th class="text-left"><i class="fas fa-home"></i></th>
                        <th>user</th>
                        <th>type</th>
                        <th>area</th>
                        <th>town</th>
                        <th>rooms</th>
                        <th>Walfance</th>
                        <th>water</th>
                        <th>electricity</th>
                        <th>car park</th>
                        <th>Status</th>
                        <th class="text-right"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="house in houses.data" :key="house.id" class="border-b text-gray-400 hover:bg-teal-50">
                        <td class="pr-2"><i class="fas fa-home text-teal-300"></i></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{ house.name }}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{ house.type }}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{ house.area }}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{ house.town }}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{house.rooms}}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{ house.walfance}}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{ house.water}}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{house.electricity}}</Link></td>
                        <td class="truncate py-2 pr-2"><Link :href="`/vendor/house/show/${house.id}`" class="w-full block">{{ house.car_park}}</Link></td>
                        <td class="truncate py-2 pr-2 text-center">
                            <div :class="`${(house.status == 'active' || house.status == 'avairable')? 'bg-green-500' : (house.status == 'ocupied')? 'bg-red-500' : 'bg-yellow-500'} rounded-full w-3 h-3 ring-2 ring-gray-300 mx-auto`"></div>
                        </td>
                        <td class="text-right">
                            <Dropdown title="">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="'tdrop_'+house.id">
                                    <li>
                                        <Link :href="'/admin/house/update/'+house.id" method="put" class="block px-4 py-2 hover:bg-teal-600 w-full text-left transition" ><i class="fas fa-edit mr-2"></i>Edit</Link>
                                    </li>
                                    <li>
                                        <button @click="modalShow(`${'/admin/house/destroy/'+house.id}`, 'delete', 'Are you sure you want to delete this property?')" class="block px-4 py-2 hover:bg-teal-600 w-full text-left transition" ><i class="fas fa-trash-can mr-2"></i> Delete</button>
                                    </li>
                                </ul>
                            </Dropdown>
                            <div class="w-12">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <Paginator :links="houses.links" />
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

<script>
import Modal from '../../../Components/Modal.vue';
import { ref } from 'vue';
import Paginator from '../../../Components/Paginator.vue'
import Dropdown from './Dropdown.vue';

export default {
    props: {
        houses:Object,
        links:Array
    },
    components:{
    Modal,
    Paginator,
    Dropdown
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

        const modalShow = (endpoint, method, message) => {
            modal.value.message = message
            modal.value.endpoint = endpoint
            modal.value.method = method
            modal.value.show =true

            console.log(modal.value)
        }
        return {
            modal, modalShow
        }
    }
}
</script>

<style>

</style>
