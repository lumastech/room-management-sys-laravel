<template>
    <Head>
        <title>Houses</title>
    </Head>

    <div class="max-w-12xl mx-auto p-2  bg-white rounded mt-7 overflow-x-auto">
        <HousesTable :houses="houses" />
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
export default{
    props:{houses:Object,},
    layout: AdminApp,
    components:{
    Modal,
    Paginator,
    Alike,
    HousesTable
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
