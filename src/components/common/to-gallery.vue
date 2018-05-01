<template>
  <div class="to-gallery">
    <div
      v-for="(img, index) in gallery"
      :key="index"
      class="to-gallery__img-wrapper"
    >
      <img
        :src="img.url"
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

    &__img-wrapper {
      display: flex;
      justify-content: center;
      height: calc(100vh - 20px);
      width: 100%;
      max-width: calc(100vw - 40px);
      margin-bottom: 50px;

      img {
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
