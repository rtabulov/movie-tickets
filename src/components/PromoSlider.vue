<template>
  <div class="overflow-hidden">
    <div>
      <swiper :slides-per-view="1" :space-between="16" centered-slides>
        <swiper-slide v-for="promo in promos" :key="promo.id">
          <div class="position-relative">
            <img
              class="w-100 rounded-3"
              :src="promo.image"
              :alt="promo.title"
            />

            <div class="body">
              <h3 class="title">{{ promo.title }}</h3>
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
    promos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  position: absolute;
  z-index: 10;
  left: 35px;
  right: 35px;
  top: 25px;
  bottom: 20px;
}

.title {
  color: rgba(255, 255, 255, 0.8);

  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 32px;
}
</style>
