<template>
  <header class="to-header">
    <nav class="to-header__nav">
      <ul>
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
  export default {
    data: () => ({

    }),
    mounted () {
      console.log(this.$router)
    },
    beforeDestroy () {
      console.log('lalal')
    }
  }
</script>

<style lang="scss">
  .to-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 25px;

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
