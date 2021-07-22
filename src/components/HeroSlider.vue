<template>
  <div class="overflow-hidden">
    <div style="margin-left: -160px; margin-right: -160px">
      <swiper :slides-per-view="3" :space-between="16" centered-slides>
        <swiper-slide v-for="movie of movieList" :key="movie.id">
          <router-link
            :to="`/movies/${movie.id}`"
            class="
              rounded-3
              overflow-hidden
              text-reset
              d-block
              text-decoration-none
            "
            style="background: #38354b; height: 100%"
          >
            <img
              class="w-100"
              style="height: 270px; object-fit: cover; object-position: center"
              :src="getImageURL(movie.poster_path)"
              alt=""
            />

            <div class="p-3">
              <h3 class="fs-5 line-clamp-2">{{ movie.title }}</h3>

              <p>
                <img class="me-1" src="src/assets/star.svg" alt="" />
                {{ movie.vote_average }}
              </p>

              <p class="mb-0 line-clamp-2">
                {{ movie.genres.join(', ') }}
              </p>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import { getImageURL } from '../helpers';

export default {
  components: { Swiper, SwiperSlide },

  props: {
    movieList: {
      type: Array,
      required: true,
    },
  },

  methods: { getImageURL },
};
</script>
