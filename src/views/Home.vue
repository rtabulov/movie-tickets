<template>
  <app-header />

  <div class="container">
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

  <hero-slider v-if="movieList.length" class="mt-3" :movie-list="movieList" />

  <div class="container mt-5">
    <h2>Promo</h2>

    <promo-slider :promos="$options.promoList" />
  </div>
</template>

<script>
import HeroSlider from '../components/HeroSlider.vue';
import PromoSlider from '../components/PromoSlider.vue';
import AppHeader from '../components/AppHeader.vue';

import promoList from '../promoList.json';

import api from '../api';

export default {
  components: {
    AppHeader,

    HeroSlider,
    PromoSlider,
  },

  promoList,

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
