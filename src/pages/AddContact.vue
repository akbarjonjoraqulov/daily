<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
    <div class="w-full flex">
        <Sidebar/>
        <div class="w-full md:w-3/4 p-2">
            <h2 class="font-extrabold text-2xl pt-4">Add a contact</h2>
            <form class="w-full md:w-3/4">
                <div class="flex gap-3 py-6 md:flex-row flex-col max-w-md md:w-full">
                    <div class="flex flex-col w-full">
                        <label for="first-name">First Name</label>
                        <input type="text" id="first-name" placeholder="Jon"
                               class="border border-gray-400 rounded-xl p-3 w-full" required>
                    </div>
                    <div class="flex flex-col w-full">
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Carter"
                               class="border border-gray-400 rounded-xl p-3 w-full" required>
                    </div>
                </div>
                <div class="flex flex-col space-y-6 py-6 max-w-md md:w-full">
                    <input type="text" placeholder="Phone number" class="input-style" required>
                    <input type="text" placeholder="Profession" class="input-style" required>
                    <input type="text" placeholder="Relation" class="input-style" required>
                </div>
                <button type="submit" class="submit-btn">Save Contact</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.input-style {
    @apply border border-gray-400 rounded-xl p-3 w-full;
}

.submit-btn {
    @apply bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition;
}
</style>

