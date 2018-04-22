<template>
  <header class="to-header box--width">
    <router-link :to="{ name: 'home' }" class="main-logo">
      <img src="/src/assets/images/logo_main_new.svg" alt="Tomek Olszowski - Shooting Cars logotype">
    </router-link>
    <div class="to-header__nav">
      <nav class="nav nav--primary">
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
      <nav class="nav nav--social">
        <ul>
          <li>
            <a href="https://www.instagram.com/tomekolszowski/" target="_blank" class="link-instagram">
              <img src="/src/assets/images/logo-instagram.svg" alt="Tomek Olszowski - Shooting Cars logotype">
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/tomekolszowski" target="_blank" class="link-behance">
              <img src="/src/assets/images/logo-behance.svg" alt="Tomek Olszowski - Shooting Cars logotype">
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
  @import "./../../assets/styles/main";

  .to-header {
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    margin: 0 auto 15px;

    .main-logo {
      margin-bottom: 35px;

      img {
        width: 290px;
        height: 40px;
      }
    }

    &__nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 960px;
      padding: 0 15px;
      margin: 0 auto;
    }

    .nav {
      display: flex;

      ul {
        display: flex;
      }

      li {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }

      a {
        font-size: 17px;
        color: #000;

        &.router-link-exact-active {
          font-weight: 600;
        }
      }

      &--primary {
        ul {
          flex-direction: column;
        }
      }

      &--social {
        ul {
          flex-flow: row nowrap;
          align-items: flex-end;
          height: 100%;

          li:not(:last-child) {
            margin-right: 15px;
          }
        }
      }

      .link-behance img {
        position: relative;
        top: 6px;
        height: 31px;
        width: 31px;
      }

      .link-instagram img {
        position: relative;
        top: 6px;
        height: 21px;
        width: 20px;
      }
    }
  }
</style>
