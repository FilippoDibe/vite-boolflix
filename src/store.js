import { reactive } from 'vue';
import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '25cfa9c9e5b81db14a64ee70941fb62a';
export const store = reactive({

    films: [],
    async startLoad() {
        try {
            const [moviesResponse, tvResponse] = await Promise.all([
                axios.get(`${API_BASE_URL}/discover/movie`, {
                    params: { api_key: API_KEY }
                }),
                axios.get(`${API_BASE_URL}/discover/tv`, {
                    params: { api_key: API_KEY }
                })
            ]);

            this.films = [...moviesResponse.data.results, ...tvResponse.data.results].map(item => {
                return {
                    ...item,
                    title: item.title || item.name,
                };
            });
        } catch (error) {
            console.error("Errore nel caricamento iniziale:", error);
        }
    },

    async searchFilms(query) {
        if (!query) {
            return this.startLoad();
        }
        try {
            const response = await axios.get(`${API_BASE_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query: query
                }
            });
            this.films = response.data.results
        } catch (error) {
            console.error("errore enlla carica dei film", error)
        }

    }
});
store.startLoad()


