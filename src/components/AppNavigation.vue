<template>
  <div class="navigation">
    <router-link
      to="/"
      class="navigation-item"
      active-class="navigation-item--active"
    >
      <img class="navigation-item__icon" src="src/assets/home.svg" alt="home" />
      <span class="navigation-item__title">Home</span>
    </router-link>
    <router-link
      to="/cinemas"
      class="navigation-item"
      active-class="navigation-item--active"
    >
      <img
        class="navigation-item__icon"
        src="src/assets/cinema.svg"
        alt="cinemas"
      />
      <span class="navigation-item__title">Cinemas</span>
    </router-link>
    <router-link
      to="/tickets"
      class="navigation-item"
      active-class="navigation-item--active"
    >
      <img
        class="navigation-item__icon"
        src="src/assets/ticket.svg"
        alt="tickets"
      />
      <span class="navigation-item__title">Tickets</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: #38354b;
  border-radius: 100rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  z-index: 300;

  &-item {
    display: flex;
    align-items: center;
    text-decoration: none;

    font-weight: 500;
    font-size: 20px;

    color: rgba(255, 255, 255, 0.85);

    &__icon {
      margin-right: 0.5rem;
      opacity: 0.85;
    }

    &__title {
      display: none;
    }

    &--active &__title {
      display: block;
    }

    &--active &__icon {
      opacity: 1;
    }
  }
}
</style>
