<template>
  <header class="to-header box--width">
    <img src="/src/assets/images/logo_main_new.svg" alt="Tomek Olszowski - Shooting Cars logotype" class="main-logo">
    <div
      :class="hamburgerClass"
      ref="hamburger"
      @click="showMobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="navClass">
      <nav class="nav nav--primary">
        <ul
          ref="navList"
        >
          <li>
            <router-link
              :to="{ name: 'home'}"
              @click.native="clickHandler"
            >
              Works
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'about'}"
              @click.native="closeMobileMenu"
            >
              About
            </router-link>
          </li>
          <li @click="closeMobileMenu">
            <router-link
              :to="{ name: 'contact'}"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
      <nav class="nav nav--external-portfolio">
        <ul>
          <li @click="closeMobileMenu">
            <a href="https://www.instagram.com/tomekolszowski/" target="_blank" class="link-insta">
              <img src="/src/assets/images/logo-instagram.svg" alt="Tomek Olszowski - Shooting Cars logotype">
            </a>
          </li>
          <li @click="closeMobileMenu">
            <a href="https://www.behance.net/tomekolszowski" target="_blank" class="link-behan">
              <img src="/src/assets/images/logo-behance.svg" alt="Tomek Olszowski - Shooting Cars logotype">
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        isMobileMenuOpen: {
          type: Boolean,
          default: false
        }
      }
    },

    computed: {
      navClass () {
        return {
          'to-header__nav': true,
          'to-header__nav--mobile-open': this.isMobileMenuOpen
        }
      },

      hamburgerClass () {
        return {
          'to-header__mobile-hamburger': true,
          'to-header__mobile-hamburger--opened': this.isMobileMenuOpen
        }
      }
    },

    mounted () {
      this.isMobileMenuOpen = false
    },

    methods: {
      resetPagePosition () {
        this.$store.commit('SET_PAGE_POSITION', { data: 0 })
      },

      showMobileMenu () {
        let nav = document.getElementsByClassName('to-header__nav')[0]
        if (this.isMobileMenuOpen === false) {
          this.isMobileMenuOpen = true
          setTimeout(() => {
            nav.classList.add('nav-show')
          }, 50)
        } else {
          nav.classList.remove('nav-show')
          setTimeout(() => {
            this.isMobileMenuOpen = false
          }, 200)
        }
      },

      closeMobileMenu () {
        if (this.isMobileMenuOpen) {
          this.isMobileMenuOpen = false
        }
      },

      clickHandler () {
        this.resetPagePosition()
        this.closeMobileMenu()
      },

      frizeMobileScreen (b, h, a) {
        if (this.isMobileMenuOpen && (window.innerWidth < 768)) {
          b.style.overflow = 'hidden'
          b.style.height = '100%'
          b.style.width = '100%'
          b.style.position = 'fixed'
          h.style.overflow = 'hidden'
          a.style.overflow = 'hidden'
        } else if (!this.isMobileMenuOpen && (window.innerWidth < 768)) {
          b.style.overflow = 'unset'
          b.style.position = 'static'
          h.style.overflow = 'unset'
          a.style.overflow = 'unset'
        }
      }
    },

    watch: {
      isMobileMenuOpen () {
        let body = document.getElementsByTagName('body')[0]
        let html = document.getElementsByTagName('html')[0]
        let app = document.getElementById('app')
        this.frizeMobileScreen(body, html, app)
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/styles/main";
  @import "./../../assets/styles/helpers/_breakpoints";

  .to-header {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    margin: 0 auto 15px;

    .main-logo {
      margin-bottom: 35px;
      width: 270px;
      height: 40px;

      @include media(mobile) {
        position: relative;
        top: 5px;
        left: 5px;
        z-index: 999;
        margin-bottom: 10px;
      }
    }

    &__mobile-hamburger {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 110;
      display: none;
      height: 17px;
      width: 27px;

      span {
        display: block;
        position: absolute;
        left: 0;
        width: 27px;
        height: 3px;
        background-color: #000;
        transition: .3s;

        &:first-child {
          top: 0;
        }

        &:nth-child(2n) {
          top: 7px;
        }

        &:last-child {
          bottom: 0;
        }
      }

      &--opened {
        span:first-child {
          top: 7px;
          transform: rotate(45deg);
        }

        span:nth-child(2n) {
          width: 1px;
          opacity: 0;
        }

        span:last-child {
          bottom: 7px;
          transform: rotate(-45deg);
        }
      }

      @include media(mobile) {
        display: block;
      }
    }

    &__nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1020px;
      padding: 0 15px;
      margin: 0 auto;

      @include media(mobile) {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: -100;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        opacity: 0;
        transition: opacity .3s .05s;

        &.to-header__nav--mobile-open {
          display: block;

          &.nav-show {
            z-index: 100;
            opacity: 1;
          }
        }
      }
    }

    .nav {
      display: flex;

      ul {
        display: flex;

        @include media(mobile) {
          align-items: center;
        }
      }

      li {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }

      a {
        font-size: 18px;
        color: #000;

        &.router-link-exact-active {
          font-weight: 600;
        }

        @include media(mobile) {
          font-size: 32px;
        }
      }

      &--primary {
        ul {
          flex-direction: column;

          @include media(mobile) {
            justify-content: center;
            height: 100vh;
            width: 100%;
          }
        }

        li {
          @include media(mobile) {
            margin-bottom: 30px !important;
          }
        }
      }

      &--external-portfolio {
        ul {
          flex-flow: row nowrap;
          align-items: flex-end;
          height: 100%;

          li:not(:last-child) {
            margin-right: 15px;

            @include media(mobile) {
              margin-right: 45px;
            }
          }
        }

        @include media(mobile) {
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
        }
      }

      .link-behan img {
        position: relative;
        top: 6px;
        height: 31px;
        width: 31px;

        @include media(mobile) {
          height: 51px;
          width: 46px;
        }
      }

      .link-insta img {
        position: relative;
        top: 6px;
        height: 21px;
        width: 20px;

        @include media(mobile) {
          height: 41px;
          width: 35px;
        }
      }
    }

    @include media(mobile) {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      padding-top: 0;
      background-color: #fff;
    }
  }
</style>
