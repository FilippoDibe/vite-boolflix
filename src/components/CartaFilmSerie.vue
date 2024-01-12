<script>
import axios from 'axios';
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
                // Fornisci un URL per un'immagine di default se posterPath è null o undefined
                return 'path_to_default_image'; // Sostituisci con il percorso della tua immagine di default
            }
            const baseUrl = 'https://image.tmdb.org/t/p/';
            const size = 'w500'; // Scegli la dimensione dell'immagine (es. w342, w500)
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
                    <p class="card-text">Titolo Originale: {{ film.original_title }}</p>
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
    perspective: 1000px; // Profondità della prospettiva per l'effetto 3D
    width: 300px; // Larghezza della carta
    height: 500px; // Altezza della carta
    margin: 30px 0;
}

.card-flip {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
    /* Aggiornato per una transizione più fluida */
    transform-style: preserve-3d;


    &:hover {
        transform: rotateY(180deg); // Rotazione al passaggio del 
        transition-delay: 0.1s;
        /* Aggiunge un ritardo prima che l'animazione inizi */

    }

    .card-img-top {
        width: 100%; // Assicura che l'immagine riempia la larghezza del contenitore
        height: 100%; // Imposta l'altezza per far sì che l'immagine riempia il contenitore
        object-fit: cover; // L'immagine coprirà l'intera area dell'elemento, mantenendo le proporzioni
        object-position: center; // Centra l'immagine nel suo contenitore
    }
}

.card {
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    transform-origin: center center;


    .card-title {
        font-size: 20px;
        font-weight: bold;
    }
}

.front {
    backface-visibility: hidden;
    transform: rotateY(0deg);


}


.back {
    backface-visibility: hidden;

    // Stili per la faccia posteriore
    transform: rotateY(180deg); // Ruota il retro per essere di fronte quando la carta è girata
    background-color: rgb(14, 14, 14); // Sfondo per il retro
    color: white
}

.star {
    color: gold; // colore delle stelline piene
    margin-right: 2px;
}

.star-empty {
    color: grey; // colore delle stelline vuote
    margin-right: 2px;
}
</style>