<script setup>

import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
<div class="flex flex-wrap">
    <Sidebar />

    <div class="p-3">
        <h2 class="font-extrabold text-2xl my-8 pt-5">Sing up</h2>
        <form >
            <div class="flex md:flex-row flex-col gap-4 max-w-md md:w-full">
                <div>
                    <label for="text">First name</label>
                    <input class="input-style mt-2" placeholder="Jek">
                </div>
                <div>
                    <label for="text">Last name</label>
                    <input class="input-style mt-2" placeholder="Milton">
                </div>
            </div>

            <div class="space-y-6 py-6 max-w-md md:w-full">
                <input class="input-style" placeholder="Phone number">
                <input class="input-style" placeholder="Profession">
                <input class="input-style" placeholder="Email">
                <input class="input-style" placeholder="Password">
                <input class="input-style" placeholder="Conform Password">
            </div>

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                Sign up
            </button>
        </form>
    </div>
</div>
</template>

<style scoped>
.input-style{
    @apply border border-gray-400 rounded-xl p-2 w-full;
}
</style>