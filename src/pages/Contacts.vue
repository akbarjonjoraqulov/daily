<script setup>

import Sidebar from "../components/Sidebar.vue";
import Tags from "../components/Tags.vue";
</script>

<template>
    <div class="w-full flex flex-wrap md:flex-nowrap">
        <Sidebar/>
        <div class="w-full flex flex-wrap h-fit">
            <div class="w-full flex justify-between items-center p-4">
                <span class="font-extrabold text-2xl">Contacts</span>
                <button class="py-2 px-4 bg-gray-200 rounded-2xl">
                    New contacts
                </button>
            </div>
            <Tags/>
            <div class="relative w-full px-2 my-2">
                <input type="text" placeholder="Search contacts..."
                       class="bg-gray-200 rounded-2xl p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                <img src="../assets/images/search.svg" alt="Search" class="absolute left-5 top-2.5 w-5 h-5 ">
            </div>
            <ul class="m-3">
                <li class="my-4" >
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/kim.webp" alt="Contacts" class="w-16 h-16 rounded-full object-cover">
                        <div class="flex flex-col " >
                            <span>Jon Traun</span>
                            <p class="text-gray-400">Software Engineer</p>
                        </div>
                    </a>
                </li>
                <li class="my-4" >
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/hejin.webp" alt="Contacts" class="w-16 h-16 rounded-full object-cover">
                        <div class="flex flex-col " >
                            <span>Emma Thompson</span>
                            <p class="text-gray-400">Data Scientist</p>
                        </div>
                    </a>
                </li>
                <li class="my-4" >
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/jon.jpg" alt="Contacts" class="w-16 h-16 rounded-full object-cover">
                        <div class="flex flex-col " >
                            <span>James Carter</span>
                            <p class="text-gray-400">UX/UI Designer</p>
                        </div>
                    </a>
                </li>
                <li class="my-4" >
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/lela.jpg" alt="Contacts" class="w-16 h-16 rounded-full object-cover">
                        <div class="flex flex-col " >
                            <span>Olivia Harris</span>
                            <p class="text-gray-400">Cybersecurity Analyst </p>
                        </div>
                    </a>
                </li>
                <li class="my-4" >
                    <a href="#" class="flex items-center gap-3">
                        <img src="../assets/images/li.webp" alt="Contacts" class="w-16 h-16 rounded-full object-cover">
                        <div class="flex flex-col " >
                            <span>William Anderson</span>
                            <p class="text-gray-400">Digital Marketing Specialist</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<style scoped>

</style>