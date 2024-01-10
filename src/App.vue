<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import ListaFilmSerie from './components/ListaFilmSerie.vue';

export default {
  components: {
    AppHeader,
    ListaFilmSerie


  },
  data() {
    return {
      store,
      isLoading: true,
    }
  },
  methods: {
    getFilm() {
      axios.get(this.store.apiURL)
        .then(response => {
          console.log(response);
          this.store.films = response.data.results;
        })
        .catch(error => {
          console.error("Errore:", error);
        });
    }
  }
};

</script>

<template>
  <div class="d-flex justify-content-center align-items-center" v-if="isLoading" style="height: 100vh;">
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">

      </div>
      <h1 class="mt-3">Caricamento in corso...</h1>
    </div>
  </div>

  <div v-else>
    <AppHeader />
    <main>
      <ListaFilmSerie />
    </main>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
