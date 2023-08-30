<template>
  <div class="bg-white text-teal-500">
    <div v-if="$page.props.user" class="text-center border-b border-teal-200 pb-4">
        <img src="/assets/h.jpg" class="w-32 h-32 aspect-square rounded-full mx-auto my-2 shadow-md ring ring-teal-500" alt="">
        <span class="flex-auto self-center text-2xl text-teal-500 truncate capitalize truncate">{{ $page.props.user.name }}</span>
    </div>

    <Link :href="route('admin')" class="flex gap-4 hover:bg-teal-100 transition p-2 text-xl">
        <i class="fas fa-bars self-center"></i>
        <div class="flex-auto self-center">Dashboard</div>
    </Link>

    <Link href="/admin/users/" class="flex gap-4 hover:bg-teal-100 transition p-2 text-xl">
        <i class="fas fa-users self-center"></i>
        <div class="flex-auto self-center">Users</div>
    </Link>

    <Link :href="route('admin.houses')" class="flex gap-4 hover:bg-teal-100 transition p-2 text-xl">
        <i class="fas fa-home self-center"></i>
        <div class="flex-auto self-center">Houses</div>
    </Link>

    <Link :href="route('admin.house.form')" class="flex gap-4 hover:bg-teal-100 transition p-2 text-xl">
        <i class="fa-solid fa-house-medical-flag self-center"></i>
        <div class="flex-auto self-center">Add House</div>
    </Link>

    <hr class="border-t border-teal-200 my-4">

    <Link :href="route('home')" class="flex gap-4 hover:bg-teal-100 transition p-2 text-xl">
        <i class="fa-solid fa-earth-americas self-center"></i>
        <div class="flex-auto self-center">Website</div>
    </Link>
  </div>
</template>

<script>
// import { Link } from '@inertiajs/inertia-vue3';

export default {
    // components: { Link }
}
</script>

<style>

</style>
