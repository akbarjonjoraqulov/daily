<script setup>

import Sidebar from "../components/Sidebar.vue";
</script>

<template>
    <div class="w-full flex">
        <Sidebar/>
        <div class="w-full p-3">
            <h1 class="font-extrabold text-2xl my-2">Meeting notes with James Carter</h1>
            <p class="mb-8 text-gray-400">Review and add notes from your meetings with James Carter</p>
            <h2 class="font-extrabold text-xl my-4"> Add new note</h2>
            <div class="border-2 border-gray-200 rounded-lg h-[10rem] relative">

                <button class="py-1 px-6 bg-blue-500 text-white rounded-lg absolute bottom-2 right-3">
                    Save
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                     class="w-6 h-6 bottom-2 right-[7rem] absolute text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.364 6.364a2 2 0 102.828 2.828L18 9.828a4 4 0 00-5.656-5.656L6.343 10.172a6 6 0 108.485 8.485L19 14"></path>
                </svg>
            </div>
            <h2 class="font-extrabold text-xl my-4">Past notes</h2>
            <ul>
                <li >
                    <a href="#" class="flex items-center my-5">
                        <img src="../assets/images/hejin.webp" alt="Photo" class="rounded-full h-16 w-16 object-cover"/>
                        <div class="flex justify-center flex-col mx-4">
                            <h3 class="font-bold d-block">2 ours ego</h3>
                            <p class="text-gray-400">If you want to integrate the remote changes</p>
                        </div>
                    </a>
                </li>
                <li >
                    <a href="#" class="flex items-center my-5">
                        <img src="../assets/images/jon.jpg" alt="Photo" class="rounded-full h-16 w-16 object-cover"/>
                        <div class="flex justify-center flex-col mx-4">
                            <h3 class="font-bold d-block">2 ours ego</h3>
                            <p class="text-gray-400">If you want to integrate the remote changes</p>
                        </div>
                    </a>
                </li>
                <li >
                    <a href="#" class="flex items-center my-5">
                        <img src="../assets/images/pluton.webp" alt="Photo" class="rounded-full h-16 w-16 object-cover"/>
                        <div class="flex justify-center flex-col mx-4">
                            <h3 class="font-bold d-block">2 ours ego</h3>
                            <p class="text-gray-400">If you want to integrate the remote changes</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>