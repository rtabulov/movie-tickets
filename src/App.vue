<template>
  <div class="min-vh-100">
    <app-header />

    <app-navigation />

    <div class="container mb-3">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Playing</h2>
        <a
          class="text-decoration-none"
          style="color: rgba(255, 255, 255, 0.6)"
          href="#"
          >See All ></a
        >
      </div>
    </div>

    <hero-slider v-if="movieList.length" :movie-list="movieList" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HeroSlider from './components/HeroSlider.vue';
import AppNavigation from './components/AppNavigation.vue';

import api from './api';

export default {
  components: {
    AppHeader,
    HeroSlider,
    AppNavigation,
  },

  data() {
    return {
      movieList: [],
    };
  },

  async created() {
    this.movieList = (await api.getDiscover()).results;
  },
};
</script>
