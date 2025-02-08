import { defineStore } from 'pinia';
import axios from 'axios';

export const useQuestionStore = defineStore('questionStore', {
    state: () => ({
        questions: [],
        question: null,
    }),

    actions: {
        async pushQuestion(newQuestion) {
            try {
                const response = await axios.post('/questions', newQuestion);
                this.questions.push(response.data);
            } catch (error) {
                console.error('Xatolik:', error);
            }
        },

        async fetchQuestion(id) {
            try {
                const response = await axios.get(`/questions/${id}`);
                this.question = response.data;
            } catch (error) {
                console.error('Xatolik:', error);
            }
        },

        async fetchQuestions() {
            try {
                const response = await axios.get('/questions');
                this.questions = response.data;
            } catch (error) {
                console.error('Xatolik:', error);
            }
        }
    }
});
