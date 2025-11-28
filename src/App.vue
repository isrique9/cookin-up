<script lang="ts">
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Banner, Footer }
};
</script>

<template>
  <Banner />

  <!-- Onde as páginas serão carregadas -->
  <router-view />

  <Footer />
</template>
