<template>
  <div class="min-vh-100">
    <app-header></app-header>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle';

import './scss/main.scss';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Niramit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

body {
  font-family: Niramit;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;

  color: rgba(255, 255, 255, 0.85);
  background-color: #1c1a29;
}
</style>
