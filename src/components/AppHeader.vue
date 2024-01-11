<script>
import { store } from '../store.js';
import HeaderNavbar from './HeaderNavbar.vue';
export default {
    name: 'AppHeader',
    components: {
        HeaderNavbar

    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <header class="header">
        <HeaderNavbar />

    </header>
</template>
<style lang="scss" scoped></style>