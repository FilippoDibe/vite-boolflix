<script>
import { store } from '../store.js';
import CartaFilmSerie from './CartaFilmSerie.vue';
export default {
    name: 'ListaFilmSerie',
    components: {
        CartaFilmSerie,
    },
    computed: {
        films() {
            return store.films;
        }
    }
}
</script>
<template>
    <div class="container" v-for="(film, index) in films" :key="film.id">
        <CartaFilmSerie :film="film" />
    </div>
</template>
<style lang="scss" scoped></style>