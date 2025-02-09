<script setup>

import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
    <div class="flex">
        <Sidebar/>
        <div class="px-3 py-6 w-full">
            <h2 class="font-extrabold text-2xl my-6 ">Login</h2>
            <form class="flex flex-col w-full max-w-lg">
                <div class="flex flex-col space-y-6 w-full">
                    <input type="text" class="input-style" placeholder="Email"/>
                    <input type="password" class="input-style" placeholder="Password"/>
                </div>
                <button type="submit"
                        class="py-1 px-5 mt-6 bg-blue-500 text-white rounded-xl
                             hover:bg-blue-600 transition self-end">
                    Log in
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.input-style {
    @apply border border-gray-200 rounded-xl py-2 px-4 w-full ;
}
</style>