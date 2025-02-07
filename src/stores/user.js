import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        token: localStorage.getItem("token") || null,
    }),

    actions: {
        async pushUser(userData) {
            try {
                const response = await axios.post("/register", userData);
                this.user = response.data.user;
                this.token = response.data.token;
                localStorage.setItem("token", this.token);
                return response.data;
            } catch (error) {
                console.error("Ro‘yxatdan o‘tishda xatolik:", error);
                throw error;
            }
        },

        async fetchUser() {
            try {
                const response = await axios.get("/user", {
                    headers: { Authorization: `Bearer ${this.token}` },
                });
                this.user = response.data;
            } catch (error) {
                console.error("Foydalanuvchini olishda xatolik:", error);
            }
        },

        async fetchToken(credentials) {
            try {
                const response = await axios.post("/login", credentials);
                this.token = response.data.token;
                localStorage.setItem("token", this.token);
                return response.data;
            } catch (error) {
                console.error("Kirishda xatolik:", error);
                throw error;
            }
        },
    },

    getters: {
        getUser: (state) => state.user,
        isAuthenticated: (state) => !!state.token,
    },
});
