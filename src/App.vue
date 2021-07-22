<template>
  <div class="min-vh-100" style="padding-bottom: 6rem">
    <app-navigation />

    <router-view></router-view>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';

export default {
  components: {
    AppNavigation,
  },
};
</script>
