<script setup>

import Sidebar from "../components/Sidebar.vue";
</script>

<template>
    <div class="flex w-full flex-wrap md:flex-nowrap">
        <Sidebar/>
        <div class="w-full p-3">
            <h2 class="font-extrabold text-4xl">James Carter</h2>
            <h3 class="font-extrabold text-2xl my-10">Contact Details</h3>
            <div class="flex sm:flex-row flex-col gap-3">
                <div class="flex flex-col sm:w-1/5 w-full">
                    <span class="border-t-2 border-gray-200 text-gray-400 pt-5">Email</span>
                    <span class="my-1">carter@gmail.com</span>
                </div>
                <div class="flex sm:w-4/5 flex-col w-full">
                    <span class="border-t-2 border-gray-200 text-gray-400 pt-5">Phone</span>
                    <span class="my-1">+1 (212) 555-1234</span>
                </div>
            </div>
            <h3 class="font-extrabold text-2xl my-5">Work</h3>
            <div class="flex sm:flex-row flex-col gap-3">
                <div class="flex flex-col sm:w-1/5 w-full">
                    <span class="border-t-2 border-gray-200 text-gray-400 pt-5">Title</span>
                    <span class="my-1">UX/UI Designer</span>
                </div>
                <div class="flex sm:w-4/5 flex-col w-full">
                    <span class="border-t-2 border-gray-200 text-gray-400 pt-5">Company</span>
                    <span class="my-1">DeepSeek AI</span>
                </div>
            </div>
            <div class="mt-5">
                <h3 class="font-extrabold text-2xl my-10">Relationships</h3>
                <div class="flex flex-wrap gap-3 ">
                    <a href="">
                        <img src="../assets/images/mike.jpg" alt="Photo" class="h-40 w-32 object-cover rounded-lg shadow-2xl">
                    </a>
                    <a href="">
                        <img src="../assets/images/jon.jpg" alt="Photo" class="h-40 w-32 object-cover rounded-lg shadow-2xl">
                    </a>
                    <a href="">
                        <img src="../assets/images/pluton.webp" alt="Photo" class="h-40 w-32 object-cover rounded-lg shadow-2xl">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>