<template>
  <header class="to-header box">
    <nav class="to-header__nav">
      <ul ref="navList">
        <li>
          <router-link :to="{ name: 'home'}">Works</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about'}">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact'}">Contact</router-link>
        </li>
      </ul>
    </nav>
    <router-link :to="{ name: 'home' }">
      <img srcset="src/assets/images/logo.png, src/assets/images/logo@2x.png 2x" alt="Tomek Olszowski - Shooting Cars logotype">
    </router-link>
  </header>
</template>

<script>
</script>

<style lang="scss">
  @import "./../../assets/styles/main";

  .to-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 25px auto 50px;

    &__nav ul {
      display: flex;

      li {
        &:not(:last-child) {
          margin-right: 25px;
        }
      }

      a {
        font-size: 14px;
        text-transform: uppercase;
        color: #000;

        &.router-link-exact-active {
          font-weight: 600;
        }
      }
    }
  }
</style>
