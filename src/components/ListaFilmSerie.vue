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
    }

}
</script>
<template>
    <div class="container">
        <div v-for="film in films" :key="film.id">
            <CartaFilmSerie />
        </div>
    </div>
</template>
<style lang="scss" scoped></style>