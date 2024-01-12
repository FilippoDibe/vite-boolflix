<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import ListaFilmSerie from './components/ListaFilmSerie.vue';

export default {
  components: {
    AppHeader,
    ListaFilmSerie


  },

  methods: {
    handleSearch(query) {
      store.searchFilms(query);

    }
  },
  setup() {
    return { store };
  },




};

</script>

<template>
  <AppHeader @search="handleSearch" />
  <main>
    <ListaFilmSerie />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
