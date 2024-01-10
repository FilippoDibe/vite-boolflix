<script>

export default {
    name: 'CartaFilmSerie',
    props: {
        film: Object
    },
}
</script>
<template>
    <div class="card">
        <img :src="getImageUrl(film.poster_path)" class="card-img-top" :alt="film.title">
        <div class="card-body">
            <h5 class="card-title">{{ film.title }}</h5>
            <p class="card-text">Titolo Originale: {{ film.original_title }}</p>
            <p class="card-text">Lingua: {{ film.original_language }}</p>
            <p class="card-text">Voto: {{ film.vote_average }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

img {
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>