<template>
  <div class="to-gallery">
    <div
      v-for="(img, index) in gallery"
      :key="index"
      class="to-gallery__img-wrapper"
    >
      <img
      :src="img.url"
      alt="lala">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
  .to-gallery {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 60px 0;

    &__img-wrapper {
      max-width: 890px;
      margin-bottom: 40px;
    }
  }
</style>
