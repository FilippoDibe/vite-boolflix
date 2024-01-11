<script>
import { store } from '../store.js';
export default {
    name: 'CartaFilmSerie',
    props: {
        film: Object
    },
    data() {
        store
    }
}
</script>
<template>
    <div>
        <h3>{{ film.title }}</h3>
        <p>Titolo Originale: {{ film.original_title }}</p>
        <p>Lingua: {{ film.original_language }}</p>
        <p>Voto: {{ film.vote_average }}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
</style>