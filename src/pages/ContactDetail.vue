<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
    <div class="flex w-full flex-wrap md:flex-nowrap">
        <Sidebar />
        <div class="w-full p-3">
            <h2 class="title">James Carter</h2>
            <h3 class="section-title">Contact Details</h3>

            <div class="info-grid">
                <div class="info-block">
                    <span class="label">Email</span>
                    <span class="value">carter@gmail.com</span>
                </div>
                <div class="info-block">
                    <span class="label">Phone</span>
                    <span class="value">+1 (212) 555-1234</span>
                </div>
            </div>

            <h3 class="section-title">Work</h3>
            <div class="info-grid">
                <div class="info-block">
                    <span class="label">Title</span>
                    <span class="value">UX/UI Designer</span>
                </div>
                <div class="info-block">
                    <span class="label">Company</span>
                    <span class="value">DeepSeek AI</span>
                </div>
            </div>

            <div class="mt-5">
                <h3 class="section-title">Relationships</h3>
                <div class="flex flex-wrap gap-3">
                    <a href="">
                        <img src="../assets/images/mike.jpg" alt="Mike" class="profile-img">
                    </a>
                    <a href="">
                        <img src="../assets/images/jon.jpg" alt="Jon" class="profile-img">
                    </a>
                    <a href="">
                        <img src="../assets/images/pluton.webp" alt="Pluton" class="profile-img">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    @apply font-extrabold text-4xl;
}

.section-title {
    @apply font-extrabold text-2xl my-10;
}

.info-grid {
    @apply flex sm:flex-row flex-col gap-3;
}

.info-block {
    @apply flex flex-col sm:w-1/5 w-full;
}

.label {
    @apply border-t-2 border-gray-200 text-gray-400 pt-5;
}

.value {
    @apply my-1;
}

.profile-img {
    @apply h-40 w-32 object-cover rounded-lg shadow-2xl;
}
</style>
