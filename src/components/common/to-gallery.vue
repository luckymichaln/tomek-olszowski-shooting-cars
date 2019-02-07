<template>
  <div class="to-gallery">
    <div class="to-gallery__scroll-icon" ref="scrollIcon"/>
    <div v-if="vimeoid" class="to-gallery__vimeo-wrapper">
      <iframe
        :src="vimeoSrc"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
    <div class="to-gallery__grid">
      <div
        v-for="(img, index) in gallery"
        :key="index"
        class="to-gallery__img-wrapper"
        v-lazy="img.url"
      >
        <div class="to-gallery__lazy-loader" v-lazy="img.url" :style="lazyLoaderStyle"/>
        <img :srcset="img.url" alt="img">
      </div>
      <div class="to-gallery__info">
        <p class="info-title">{{ title }}</p>
        <div class="info-block" v-for="(item, index) in info" :key="index">
          <span>{{ item.label }}:</span>
          <span>{{ item.info }}</span>
        </div>
      </div>
      <router-link
        :to="backToProjects ? { name: 'projects' } : { name: 'home' }"
        class="to-gallery__go-back"
      >
        {{ goBackTitle() }}
        <img
          src="/src/assets/images/logo_main_new.svg"
          alt="Tomek Olszowski - Shooting Cars logotype"
          class="to-gallery__logo"
        >
      </router-link>
      <div class="to-gallery__social">
        <a href="https://www.instagram.com/tomekolszowski/" target="_blank" class="link-in">
          <img
            src="/src/assets/images/logo-instagram.svg"
            alt="Tomek Olszowski - Shooting Cars logotype"
          >
        </a>
        <a href="https://www.behance.net/tomekolszowski" target="_blank" class="link-behan">
          <img
            src="/src/assets/images/logo-behance.svg"
            alt="Tomek Olszowski - Shooting Cars logotype"
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

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
    title: String,
    vimeoid: [Number, Boolean]
  },

  data() {
    return {
      backStr: null,
      mobileBreakpoint: 767
    };
  },

  mounted() {
    const icon = this.$refs.scrollIcon;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.$router.push("/");
    }
    this.hideScrollIcon(icon);
  },

  methods: {
    goBackTitle() {
      return this.backToProjects ? "Back to Projects" : "Back to Portfolio";
    },

    hideScrollIcon(icon) {
      if (icon) {
        setTimeout(() => {
          icon.style.opacity = 0;

          setTimeout(() => {
            icon.remove();
          }, 500);
        }, 3000);
      }
    }
  },

  computed: {
    ...mapGetters(["singleSession", "backToProjects"]),
    lazyLoaderStyle() {
      return `background-color: ${
        this.singleSession.fullpagegallerybackgroundcolor
      }`;
    },
    vimeoSrc() {
      return `https://player.vimeo.com/video/${
        this.vimeoid
      }?color=ffffff&title=0&byline=0&portrait=0`;
    }
  }
};
</script>

<style lang="scss">
.to-gallery {
  &__scroll-icon {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 20;
    transform: translate(-50%, -50%);
    display: block;
    /* height: 155px;
    width: 90px;
    border-radius: 38px; */
    height: 95px;
    width: 60px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.26);
    transition: opacity 0.5s;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      /* width: 6px;
      height: 22px; */
      width: 4px;
      height: 14px;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.6);
      animation: scroll 2s infinite;
      transition: 0.5s;
    }
  }

  &__grid {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  &--fullscreen {
    padding: 50px 0 300px;
  }

  &__vimeo-wrapper {
    position: relative;
    height: 0;
    height: auto;
    max-width: 100%;
    margin-bottom: 50px;
    padding-bottom: 56.25%;
    overflow: hidden;

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 100%;
    }

    iframe {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 50px;
    }
  }

  &__info {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 50px 0 50px;
    font-size: 16px;
    line-height: 1.2;

    .info-title {
      font-weight: 600;
    }

    .info-block {
      margin-top: 2px;
    }
  }

  &__go-back {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }

  &__logo {
    width: 251px;
    height: 21px;
    margin-top: 13px;
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
    height: calc(100vh - 100px);
    width: 100%;
    max-width: 1600px;
    padding: 0 50px;

    &:not(:last-child) {
      margin-bottom: 50px;
    }

    img {
      position: relative;
      z-index: 10;
      height: 100%;
      object-fit: contain;
    }
  }

  &__social {
    display: flex;
    margin-top: 50px;

    a {
      display: flex;
      height: 30px;
      margin: 0 10px;

      &.link-in {
        width: 20px;
      }

      &.link-behan {
        width: 30px;
      }
    }
  }
}

@keyframes scroll {
  0% {
    /* opacity: 0; */
    transform: translate(-50%, -15px);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -8px);
  }
}
</style>
