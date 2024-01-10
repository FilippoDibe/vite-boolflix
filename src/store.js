import { reactive } from 'vue';


export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/discover/movie?api_key=25cfa9c9e5b81db14a64ee70941fb62a',
    films: [],
});