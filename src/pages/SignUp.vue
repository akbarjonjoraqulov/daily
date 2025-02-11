<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import Sidebar from "@/components/Sidebar.vue";

const userStore = useUserStore();

const formData = ref({
    firstName: "",
    lastName: "",
    phone: "",
    profession: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const handleSubmit = async () => {
    if (formData.value.password !== formData.value.confirmPassword) {
        alert("Parollar mos kelmayapti!");
        return;
    }

    try {
        await userStore.pushUser({
            first_name: formData.value.firstName,
            last_name: formData.value.lastName,
            phone: formData.value.phone,
            profession: formData.value.profession,
            email: formData.value.email,
            password: formData.value.password,
        });
        alert("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
    } catch (error) {
        console.error("Xatolik:", error);
        alert("Xatolik yuz berdi!");
    }
};
</script>

<template>
    <div class="flex flex-wrap">
        <Sidebar/>

        <div class="p-3">
            <h2 class="font-extrabold text-2xl my-8 pt-5">Sign Up</h2>
            <form @submit.prevent="handleSubmit">
                <div class="flex md:flex-row flex-col gap-4 max-w-md md:w-full">
                    <div>
                        <label>First name</label>
                        <input v-model="formData.firstName" class="input-style mt-2" placeholder="Jek"/>
                    </div>
                    <div>
                        <label>Last name</label>
                        <input v-model="formData.lastName" class="input-style mt-2" placeholder="Milton"/>
                    </div>
                </div>

                <div class="space-y-6 py-6 max-w-md md:w-full">
                    <input v-model="formData.phone" class="input-style" placeholder="Phone number"/>
                    <input v-model="formData.profession" class="input-style" placeholder="Profession"/>
                    <input v-model="formData.email" type="email" class="input-style" placeholder="Email"/>
                    <input v-model="formData.password" type="password" class="input-style" placeholder="Password"/>
                    <input v-model="formData.confirmPassword" type="password" class="input-style"
                           placeholder="Confirm Password"/>
                </div>

                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                    Sign up
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.input-style {
    @apply border border-gray-400 rounded-xl p-2 w-full;
}
</style>
