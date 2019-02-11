<template>
  <div class="to-projects">
    <div class="to-projects__brick-wrapper" v-for="(item, index) of content" :key="index">
      <div class="to-projects__brick" :style="brickStyles(item)">
        <router-link
          :to="`/${item.id}/${item.slug}`"
          v-lazy="item.imagestandard"
          @click.native="setPagePosition"
        >
          <span class="brick__placeholder"/>
          <img :key="index" :srcset="srcSet(item)" :alt="item.title">
          <div class="brick-info">
            <span class="info__title">{{ item.title }}</span>
            <div v-if="item.about">
              <div v-for="(aboutBlock, index) in item.about" class="info-block" :key="index">
                <span>{{ aboutBlock.label }}:</span>
                <span>{{ aboutBlock.info }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    brickStyles(brick) {
      return parseInt(brick.offset) === 0
        ? `width: ${brick.width}; margin-left: unset;`
        : `width: ${brick.width}; margin-left: ${brick.offset}%;`;
    },

    setPagePosition() {
      let position = window.scrollY;
      this.$store.commit("SET_PAGE_POSITION", { data: position });
      this.$store.commit("SET_PAGE_REDIRECT", { data: true });
    },

    srcSet(img) {
      return `${img.imagestandard} 1x, ${img.imageretina} 2x`;
    },

    vimeoSrc(item) {
      return `https://player.vimeo.com/video/${
        item.vimeoid
      }?color=000000&title=0&byline=0&portrait=0`;
    }
  }
};
</script>

<style lang="scss">
@import "./../../assets/styles/vars/_fonts";
@import "./../../assets/styles/helpers/_breakpoints";

.to-projects {
  display: flex;
  flex-flow: row wrap;
  width: calc(100% + 6px);
  margin: 0 -3px 50px -3px;

  &__brick-wrapper {
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    width: calc(100% / 3);
    padding: calc((100% / 3) * 0.7) 8px 0 8px;
    margin: 0 0 16px;
    line-height: 0;

    .to-projects__brick {
      position: absolute;
      top: 0;
      left: 8px;
      height: 100%;
      width: calc(100% - 16px);
    }

    a {
      position: relative;
      display: block;
      height: 100%;
      min-height: 110px;
      width: 100%;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &::before {
        height: 100%;
        background-color: rgba(#000, 0.5);
        opacity: 0;
        transition: 0.3s;
      }

      &::after {
        z-index: 100;
        background-color: darken(#fff, 2);
        transition: 1s;
      }

      &[lazy="loading"] {
        > .brick__placeholder {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;

          &::after {
            content: url("./../../assets/images/loader/loader_big_dot.svg");
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 9999;
            transform: translate(-50%, -50%);
            width: 20px;
            opacity: 0.3;
          }
        }

        &::after {
          opacity: 1;
        }
      }

      &[lazy="loaded"] {
        &::after {
          opacity: 0;
        }
      }

      &:hover {
        .brick-info {
          opacity: 1;
        }

        &::before {
          opacity: 1;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition: 0.3s;
    }

    .brick-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
      font-size: 16px;
      line-height: 1.3;
      color: #dbdbdb;
      opacity: 0;
      transition: 0.3s;

      .info__title {
        font-weight: 600;
      }

      .info-block {
        margin-top: 2px;
      }
    }
  }

  @include media(mobile) {
    margin-bottom: 43px;
  }
}
</style>
