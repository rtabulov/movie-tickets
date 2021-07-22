<template>
  <div class="min-vh-100">
    <app-header />

    <app-navigation />

    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppNavigation from './components/AppNavigation.vue';

export default {
  components: {
    AppHeader,
    AppNavigation,
  },
};
</script>
