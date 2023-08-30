<template>
  <div class="mx-4 my-24">
        <div class="max-w-7xl rounded-md bg-teal-500 p-4 mx-2 mb-12 md:!mx-auto text-white">
            <h2 class="text-2xl uppercase">Get more updates</h2>
            <p class="my-4">Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you'll be among the first to find out about new features, components, versions, and tools.</p>
            <form action="subscribe" method="post" class="flex gap-4">
                <div class="relative flex-auto ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="text" name="email" required class="!bg-teal-400 border border-teal-600 text-white text-sm rounded-lg focus:!ring-teal-600 focus:border-teal-600 block w-full pl-10 p-2.5" placeholder="someone@email.com">
                </div>
                <button class="self-center rounded-md border border-teal-600 !bg-teal-50 p-2 text-teal-500 uppercase placeholder-gray-100 transition">Subscribe</button>
            </form>
        </div>
   </div>
</template>

<script>
export default {

}
</script>
