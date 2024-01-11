import { reactive } from 'vue';
import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '25cfa9c9e5b81db14a64ee70941fb62a';
export const store = reactive({
    searchQuery: '',
    films: [],

    async searchFilms(query) {
        try {
            const response = await axios.get(`${API_BASE_URL}/search/movie?`, {
                params: {
                    api_key: API_KEY,
                    query: query
                }
            });
            this.films = response.data.results;
            console.log("Risposta API:", response.data); // Aggiungi questa linea

        } catch (error) {
            console.error("Errore nella ricerca dei film:", error);

        }

    }
});



