<template>
  <div class="overflow-hidden">
    <div style="margin-left: -100px; margin-right: -100px">
      <swiper :slides-per-view="3" :space-between="16" loop centered-slides>
        <swiper-slide v-for="(movie, idx) of movieList" :key="idx">
          <div
            class="rounded-3 overflow-hidden"
            style="background: #38354b; height: 100%"
          >
            <img
              class="w-100"
              style="height: 175px; object-fit: cover; object-position: center"
              :src="movie.img"
              alt=""
            />

            <div class="p-3">
              <h3 class="fs-5">{{ movie.name }}</h3>

              <p>
                <img class="me-1" src="src/assets/star.svg" alt="" />
                {{ movie.rating }}
              </p>

              <p class="mb-0">
                {{ movie.categories.join(', ') }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';

export default {
  components: { Swiper, SwiperSlide },

  props: {
    movieList: {
      type: Array,
      required: true,
    },
  },
};
</script>
