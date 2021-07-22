<template>
  <div v-if="movie">
    <div
      class="pb-4 mb-5 position-relative"
      :style="{
        backgroundImage: `linear-gradient(to right, #1C1A298C, #1C1A298C), url(${getImageURL(
          movie.backdrop_path,
        )})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }"
    >
      <div class="d-flex justify-content-between container py-3">
        <router-link to="/">
          <img src="/src/assets/arrow.svg" alt="arrow" />
        </router-link>
        <img src="/src/assets/heart.svg" alt="arrow" />
      </div>

      <div class="container">
        <h1 class="title mb-0">{{ movie.title }}</h1>

        <div class="rating mt-3">
          <img class="me-2" src="/src/assets/star.svg" alt="star" />
          {{ movie.vote_average }} / 10 from TMDb
        </div>

        <div class="d-flex flex-wrap mt-3">
          <div v-for="genre in movie.genres" :key="genre.id" class="genre">
            {{ genre.name }}
          </div>
        </div>
      </div>

      <button class="play-btn">
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12L0 24V0L22 12Z" fill="white" fill-opacity="0.85" />
        </svg>
      </button>
    </div>

    <div class="container">
      <div class="d-flex">
        <div style="width: 110px" class="me-3">
          <img class="w-100" :src="getImageURL(movie.poster_path)" alt="" />
        </div>
        <div class="desc">
          <div class="me-3 fw-bold">
            <p>Director</p>
            <p>Writer</p>
            <p>Duration</p>
            <p class="mb-0">Rating</p>
          </div>

          <div class="flex-grow-1">
            <p>{{ movie.director }}</p>
            <p>{{ movie.screenplay }}</p>
            <p>{{ duration }}</p>
            <p class="mb-0">{{ movie.certification || 'NR' }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="tabs">
        <div class="tabs__bar-wrap">
          <div class="tabs__bar">
            <div class="tabs__controls">Schedule</div>
            <div class="tabs__controls">Synopsis</div>
          </div>
        </div>
        <div class="tabs__content">
          <div class="tabs__section">I'm the first tab View</div>
          <div class="tabs__section">
            second tab - General<br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos,
            iusto laboriosam voluptatem at reiciendis vel, facilis repellendus
            totam excepturi earum saepe rerum ullam!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabsSlider from 'tabs-slider';

import api from '../api';
import { getImageURL } from '../helpers';

export default {
  data() {
    return {
      movie: null,
    };
  },

  computed: {
    duration() {
      return `${Math.floor(this.movie.runtime / 60)}h ${
        this.movie.runtime % 60
      }m`;
    },
  },

  // updated() {
  //   this.$nextTick(() => {
  //     // eslint-disable-next-line no-new
  //     new TabsSlider('.tabs');
  //   });
  // },

  async created() {
    this.movie = await api.getMovie(this.$route.params.id);
    this.$nextTick(() => {
      // eslint-disable-next-line no-new
      new TabsSlider('.tabs');
    });
  },

  methods: {
    getImageURL,
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 25px;

  color: rgba(255, 255, 255, 0.85);

  margin-top: 30px;
}
.rating {
  display: flex;
  align-items: center;

  font-size: 15px;

  color: rgba(255, 255, 255, 0.65);
}
.genre {
  background: #38354b;
  border-radius: 10rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 8px 24px;

  font-size: 15px;
  color: rgba(255, 255, 255, 0.65);
}

.desc {
  display: flex;
  align-items: center;
  font-size: 15px;

  color: rgba(255, 255, 255, 0.85);
}

.play-btn {
  background: #251977;
  width: 67px;
  height: 67px;
  border-radius: 50%;
  border: none;
  outline: none;
  box-shadow: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: 13px;

  position: absolute;
  bottom: 0;
  right: 16px;
  transform: translateY(50%);
}
</style>
