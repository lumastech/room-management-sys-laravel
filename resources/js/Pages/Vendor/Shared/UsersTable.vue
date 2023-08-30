<template>
    <div class="bg-white rounded p-2 shadow-sm w-full">
        <h2></h2>
        <table class="table-auto w-full">
            <thead class="text-left border-b-2 uppercase">
                <th class="text-left"><i class="fas fa-user"></i></th>
                <th>Names</th>
                <th>email</th>
                <th>type</th>
                <th>joined at</th>
                <th>status</th>
                <th class="text-right"></th>
            </thead>
            <tbody>
                <tr v-for="user in users.data" :key="user.id" class="border-b text-gray-400 hover:bg-teal-50">
                    <td class="pr-2">
                        <img v-if="user.profile_photo_path" :src="user.profile_photo_path" :alt="user.name">
                        <i v-else class="fas fa-user text-teal-300"></i>
                    </td>
                    <td class="truncate py-2 pr-2 capitalize">{{ user.name }}</td>
                    <td class="truncate py-2 pr-2">{{ user.email }}</td>
                    <td class="truncate py-2 pr-2">{{ user.type }}</td>
                    <td class="truncate py-2 pr-2">{{ user.created_at }}</td>
                    <td class="truncate py-2 pr-2">{{ user.status }}</td>
                    <td>
                        <div class="w-12">
                            <Link href="#" method="put" class=" p-1 rounded-full hover:text-red-700 text-teal-500 transition" ><i class="fas fa-edit"></i></Link>
                            <button @click="modalShow(`${'/admin/user/destroy/'+user.id}`, 'delete', 'Are you sure you want to delete this property?')" class="hover:text-red-700 text-red-500 transition" ><i class="fas fa-trash-can"></i></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Paginator :links="users.links" />
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
import DateTime from 'vue-luxon';


export default {
    props: {
        users :Object,
    },
    components:{
        Modal, Paginator
    },
    setup(){
        const dateTime = ref(null)
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
            modal, modalShow, dateTime
        }
    },
}
</script>

<style>

</style>
