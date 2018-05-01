<template>
  <div class="to-about">
    <div class="info-block">
      <p class="info-block__title">{{ about.about[0].title }}</p>
      <div class="info-block__about" v-html="about.about[0].info"></div>
    </div>
    <div class="info-block">
      <p class="info-block__title">{{ about.work[0].title }}</p>
      <div class="info-block__about" v-html="about.work[0].about"></div>
    </div>
    <div class="info-block info-block__image">
      <img :src="about.photo[0].picture" alt="Tomek Olszowski - Automotive Photographer" class="info-image" />
      <div class="info-block__about" v-html="about.photo[0].description"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      about: Object
    }
  }
</script>

<style lang="scss">
  .to-about {
    display: flex;
    justify-content: space-between;
    padding: 70px 0 40px;

    .info-block {
      display: flex;
      flex-flow: column nowrap;
      width: calc((100% / 3) - 10px);
      font-size: 14px;
      line-height: 1.3;

      &__title {
        margin-bottom: 40px;
        font-weight: 600;
      }

      &:not(.info-block__image) {
        padding-right: 45px;
      }

      .info-image {
        margin-bottom: 40px;
      }
    }
  }
</style>
