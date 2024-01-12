import { reactive } from 'vue';
import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '25cfa9c9e5b81db14a64ee70941fb62a';
export const store = reactive({

    films: [],
    // In store.js
    async startLoad() {
        try {
            const [moviesResponse, tvResponse] = await Promise.all([
                axios.get(`${API_BASE_URL}/discover/movie`, { params: { api_key: API_KEY } }),
                axios.get(`${API_BASE_URL}/discover/tv`, { params: { api_key: API_KEY } })
            ]);

            this.films = moviesResponse.data.results.map(item => ({
                ...item,
                title: item.title || item.name,
                isMovie: true
            }));

            this.tvSeries = tvResponse.data.results.map(item => ({
                ...item,
                title: item.title || item.name,
                isMovie: false
            }));
        } catch (error) {
            console.error("Errore nel caricamento iniziale:", error);
        }
    },


    async searchFilms(query) {
        if (!query) {
            return this.startLoad();
        }
        try {
            const [movieResponse, tvResponse] = await Promise.all([
                axios.get(`${API_BASE_URL}/search/movie`, {
                    params: {
                        api_key: API_KEY,
                        query: query
                    }
                }),
                axios.get(`${API_BASE_URL}/search/tv`, {
                    params: {
                        api_key: API_KEY,
                        query: query
                    }
                })
            ]);

            this.films = [
                ...movieResponse.data.results.map(movie => ({ ...movie, isMovie: true })),
                ...tvResponse.data.results.map(tv => ({ ...tv, isMovie: false }))
            ];
        } catch (error) {
            console.error("Errore nella ricerca di film e serie TV", error);
        }
    }


});
store.startLoad()



