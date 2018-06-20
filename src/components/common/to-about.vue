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
    <div class="info-block info-block__image" v-lazy="about.photo[0].picture">
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
  @import "./../../assets/styles/helpers/_breakpoints";

  .to-about {
    display: flex;
    justify-content: space-between;
    padding: 72px 0 40px;

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

      &__image {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
          background-color: #fff;
          transition: 1s;
        }

        &[lazy=loaded] {
          &::after {
            opacity: 0;
          }
        }
      }

      &:not(.info-block__image) {
        padding-right: 45px;

        @include media(mobile) {
          padding: 0;
        }
      }

      .info-image {
        margin-bottom: 40px;
      }

      @include media(mobile) {
        width: 100%;
        padding: 0;
        margin-bottom: 40px;
        font-size: 17px;
      }
    }

    @include media(mobile) {
      flex-flow: column nowrap;
    }
  }
</style>
