<script setup>

import Sidebar from "../components/Sidebar.vue";
</script>

<template>
    <div class="flex flex-wrap md:flex-nowrap">
        <Sidebar />

        <div class="w-full md:w-full p-2">
            <h2 class="text-3xl font-bold py-1 my-2">Good Morning, Mayk!</h2>
            <p class="text-slate-400">Here is what you have got today</p>
            <div class="p-4 my-5 bg-gray-200 rounded-2xl flex items-center justify-between border-2 border-gray-300">
                <p class="font-bold">Add a new contact</p>
                <button class="px-4 py-2 bg-blue-600 rounded-2xl text-slate-100">Add a contact</button>
            </div>
            <ul class="">
                <li class="my-4 mx-1">
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/hejin.webp" alt="Photo" class="w-8 h-8 rounded-full object-cover">
                        <span class="flex items-center">Meeting width Tim</span>
                    </a>
                    <p class="text-gray-400 text-sm ml-16">1 soat oldin</p>
                </li>
                <li class="my-4 mx-1">
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/kim.webp" alt="Photo" class="w-8 h-8 rounded-full object-cover">
                        <span class="flex items-center">Meeting with Tim</span>
                    </a>
                    <p class="text-gray-400 text-sm ml-16">1 soat oldin</p>
                </li>

                <li class="my-4 mx-1">
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/li.webp" alt="Photo" class="w-8 h-8 rounded-full object-cover">
                        <span class="flex items-center">Meeting width Tim</span>
                    </a>
                    <p class="text-gray-400 text-sm ml-16">1 soat oldin</p>
                </li>
            </ul>
            <h5 class="font-extrabold text-xl">Popular Contact</h5>
            <ul class="my-4">
                <li class="my-4">
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/hejin.webp" alt="Photo" class="w-16 h-16 rounded-full object-cover">
                        <div class="flex flex-col">
                            <span class="font-medium">Meeting with Tim</span>
                            <p class="text-gray-400 text-sm">Kotiba</p>
                        </div>
                    </a>
                </li>
                <li class="my-4">
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/kim.webp" alt="Photo" class="w-16 h-16 rounded-full object-cover">
                        <div class="flex flex-col">
                            <span class="font-medium">Meeting with Tim</span>
                            <p class="text-gray-400 text-sm">Bosh manager</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>

</style>