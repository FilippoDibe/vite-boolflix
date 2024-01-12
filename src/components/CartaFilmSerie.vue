<script>
import { store } from '../store.js';
export default {
    name: 'CartaFilmSerie',
    props: {
        film: Object
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // tramite un APi esterna genereno le bandiere prendendo dalla prima chiamata apri prendo prima il codice paese se nel caso e vuoto prendo il codice lingua e lo inserisco facendolo diventare maiuscolo nella API che mi risponde generando la bandiera ho impostato che en dato che riguarda la lingua del paese US ho impostato che nel caso no ci sia il paese di provenienza ma la lingua en diventi US per vedere la bandiera
        getFlagUrl(film) {
            let countryCode;


            if (film.original_country && film.original_country.length > 0) {
                countryCode = film.original_country[0];
            }

            else if (film.original_language) {
                if (film.original_language === 'en') {
                    countryCode = 'US';
                } else {
                    countryCode = film.original_language.toUpperCase();
                }
            }

            else {
                return '';
            }

            return `https://flagsapi.com/${countryCode}/shiny/32.png`;
        },
        getImageUrl(posterPath) {
            if (!posterPath) {

                return 'path_to_default_image';
            }
            const baseUrl = 'https://image.tmdb.org/t/p/';
            const size = 'w500';
            return `${baseUrl}${size}${posterPath}`;
        },
        getRoundedStars(vote) {
            return Math.round(vote / 2);
        }


    }



}
</script>
<template>
    <div class="card-container">
        <div class="card-flip">
            <!-- Faccia Frontale: Immagine del Film -->
            <div class="card front">
                <img :src="getImageUrl(film.poster_path)" class="card-img-top img-fluid" alt="Copertina" />
            </div>

            <!-- Faccia Posteriore: Dettagli del Film -->
            <div class="card back">
                <div class="card-body">
                    <h3 class="card-title">{{ film.title }}</h3>
                    <p class="card-text">Titolo Originale: {{ film.original_title || film.original_name }}</p>
                    <p class="card-text">Lingua: <img :src="getFlagUrl(film)" alt="Bandiera" /></p>
                    <div class="rating">
                        <!-- Stelline piene -->
                        <span v-for="star in getRoundedStars(film.vote_average)" :key="star" class="star">&#9733;</span>
                        <!-- Stelline vuote -->
                        <span v-for="star in 5 - getRoundedStars(film.vote_average)" :key="star + 5"
                            class="star-empty">&#9734;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.card-container {
    width: 300px; // Larghezza della carta
    height: 500px; // Altezza della carta
}

.card-flip {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.7s;
    transform-style: preserve-3d;

    &:hover {
        transform: rotateY(180deg);
    }
}

.card {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
}

.front {
    .card-img-top {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
    }

    border: black;
}

.front,
.back {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.back {
    transform: rotateY(180deg);
    background-color: black;
    color: white;
}

.card-title,
.card-text {
    white-space: normal;
    overflow-wrap: break-word;
    word-break: break-word;
}

.card-title {
    font-size: 1.2rem;
}

.card-text {
    font-size: 1rem;
}

.rating {
    display: flex;
    justify-content: center;
    align-items: center;
}

.star,
.star-empty {
    color: gold;
    margin-right: 2px;
}

.star-empty {
    color: grey;
}
</style>