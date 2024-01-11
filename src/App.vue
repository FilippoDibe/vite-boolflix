<script>
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
      // isLoading: true,  scommentare per attivare il caricamento 
    }
  },
  methods: {
    handleSearch(query) {
      this.$refs.listaFilmSerie.searchFilms(query);
    }
  },
  setup() {
    return { store };
  }


};

</script>

<template>
  <!-- <div class="d-flex justify-content-center align-items-center" v-if="isLoading" style="height: 100vh;">
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">

      </div>
      <h1 class="mt-3">Caricamento in corso...</h1>
    </div>
  </div> -->
  <!-- 
  <div v-else> -->
  <AppHeader @search="handleSearch" />
  <main>
    <ListaFilmSerie />
  </main>
  <!-- </div> -->
</template>

<style lang="scss">
@use './styles/general.scss';

main {
  height: 50vh;
}
</style>
