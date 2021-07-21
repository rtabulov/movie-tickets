<template>
  <div class="min-vh-100">
    <app-header></app-header>

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

    <hero-slider :movie-list="$options.movieList" />
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';

import './scss/main.scss';
import AppHeader from './components/AppHeader.vue';
import HeroSlider from './components/HeroSlider.vue';

export default {
  movieList: {
    1: {
      img: 'src/assets/movie-slider-1.jpg',
      name: 'Inception',
      rating: '8,9',
      categories: ['Sci-fi', 'Drama'],
    },
    2: {
      img: 'src/assets/movie-slider-2.jpeg',
      name: 'Frozen 2',
      rating: '8,3',
      categories: ['Animation', 'Drama'],
    },
    3: {
      img: 'src/assets/movie-slider-3.png',
      name: 'Ford v Ferrari',
      rating: '8,1',
      categories: ['Olahraga', 'Drama'],
    },
  },

  components: {
    AppHeader,

    HeroSlider,
  },
};
</script>
