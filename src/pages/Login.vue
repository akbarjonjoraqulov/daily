<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const email = ref("");
const password = ref("");

const login = async () => {
    try {
        await userStore.fetchToken({ email: email.value, password: password.value });
        await userStore.fetchUser();
        alert("Kirish muvaffaqiyatli!");
    } catch (error) {
        alert("Kirishda xatolik: " + error.message);
    }
};
</script>

<template>
    <div class="flex">
        <div class="px-3 py-6 w-full">
            <h2 class="font-extrabold text-2xl my-6">Login</h2>
            <form @submit.prevent="login" class="flex flex-col w-full max-w-lg">
                <div class="flex flex-col space-y-6 w-full">
                    <input v-model="email" type="text" class="input-style" placeholder="Email"/>
                    <input v-model="password" type="password" class="input-style" placeholder="Password"/>
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
    @apply border border-gray-200 rounded-xl py-2 px-4 w-full;
}
</style>
