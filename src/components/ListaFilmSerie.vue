<script>
import { store } from '../store.js';
import CartaFilmSerie from './CartaFilmSerie.vue';
export default {
    name: 'ListaFilmSerie',
    components: {
        CartaFilmSerie,
    },
    setup() {
        return { store };
    },
    props: {
        films: Array
    },

}
</script>
<template>
    <div class="container m-2">
        <!-- Sezione per i Film -->
        <div class="film-row">
            <div v-for="(film, index) in store.films" :key="index">
                <CartaFilmSerie :film="film" />
            </div>
        </div>

        <!-- Sezione per le Serie TV -->
        <div class="tv-row ">
            <div v-for="(serie, index) in store.tvSeries" :key="index">
                <CartaFilmSerie :film="serie" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.film-row,
.tv-row {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    width: 100vw;
}
</style>