<template>
    <Modal :show="modal.show" maxWidth="xl" :closable="true">
        <div>
            <div class="bg-teal-500 text-xl text-white uppercase font-bold p-2">{{ modal.title }}</div>
            <div class="p-4">
                {{ modal.message }}
            </div>
            <div class="p-4 space-x-4 text-right border-t">
                <Link :href="endpoint" :method="method" class="px-4 py-2 bg-red-500 hover:bg-red-700 transition text-white rounded-md uppercase">Confirm</Link>
                <button @click="modal.show = false" class="px-4 py-2 bg-gray-500 hover:bg-gray-700 transition text-white rounded-md uppercase">Cancel</button>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import { ref } from "vue";
export default{
    props:{
        'data': Object
    },
    components:{
        Modal
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

        return {
            modal
        }
    },
    mounted(){
        this.modal = this.data
        console.log(this.data)
    }
}

</script>

<style>

</style>
