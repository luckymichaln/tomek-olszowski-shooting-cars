<template>
  <div class="to-gallery">
    <div
      v-for="(img, index) in gallery"
      :key="index"
      class="to-gallery__img-wrapper"
      v-lazy="img.url"
    >
      <div class="to-gallery__lazy-loader" v-lazy="img.url" :style="lazyLoaderStyle"/>
      <img
        :srcset="img.url"
        alt="img">
    </div>
    <div class="to-gallery__info">
      <p class="info-title">{{ title }}</p>
      <div
        class="info-block"
        v-for="(item, index) in info"
        :key="index"
      >
        <span>{{ item.label }}: </span>
        <span>{{ item.info }}</span>
      </div>
    </div>
    <router-link :to="{ name: 'home' }" class="to-gallery__go-back">Back to Works</router-link>
    <img src="/src/assets/images/logo_main_new.svg" alt="Tomek Olszowski - Shooting Cars logotype" class="to-gallery__logo"/>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      gallery: {
        type: Array,
        default: () => []
      },
      info: {
        type: Array,
        default: () => []
      },
      title: String
    },

    computed: {
      ...mapGetters(['singleSession']),
      lazyLoaderStyle () {
        return `background-color: ${this.singleSession.fullpagegallerybackgroundcolor}`
      }
    }
  }
</script>

<style lang="scss">
  .to-gallery {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    &--fullscreen {
      padding: 50px 0 300px;
    }

    &__info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      font-size: 14px;
      line-height: 1.3;

      .info-title {
        font-weight: 600;
      }

      .info-block {
        margin-top: 2px;
      }
    }

    &__go-back {
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }

    &__logo {
      width: 270px;
      height: 40px;
      margin-top: 10px;
    }

    &__lazy-loader {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      transition: 1s;

      &[lazy="loaded"] {
        opacity: 0;
        z-index: -10;
      }
    }

    &__img-wrapper {
      display: flex;
      justify-content: center;
      position: relative;
      height: calc(100vh - 60px);
      width: 100%;
      max-width: calc(100vw - 40px);
      margin-bottom: 50px;

      img {
        position: relative;
        z-index: 10;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
