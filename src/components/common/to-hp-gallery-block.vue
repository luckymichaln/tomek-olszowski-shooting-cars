<template>
  <div class="to-gallery">
    <div
      class="to-gallery-block"
      v-for="(item, index) of content"
      :key="index"
    >
        <div
          v-for="(element, index) in item.gallery"
          :key="`${index}desktop`"
          class="to-gallery-block__row"
        >
          <div
            v-for="(img, index) in element.row"
            :key="index"
            class="brick-wrapper"
            :class="brickClass(img)"
            :style="brickStyles(img)"
          >
            <router-link
              v-if="item.fullpagegallery || item.vimeoid"
              :to="`/${item.id}/${item.slug}`"
              v-lazy="img.src.url"
              @click.native="setPagePosition"
            >
              <span class="brick__placeholder"/>
              <img
                v-if="!img.isEmpty"
                :key="index"
                :srcset="srcSet(img)"
                :alignment="img.alignment"
                :alt="content[0].about.title"
              />
              <div class="brick-info">
                <span class="info__title">{{ item.title }}</span>
                <div
                  class="info-block"
                  v-for="(aboutBlock, index) in item.about"
                  :key="index"
                >
                  <span>{{ aboutBlock.label }}: </span>
                  <span>{{ aboutBlock.info }}</span>
                </div>
              </div>
            </router-link>
            <span
              v-else
              class="brick-nolink"
              v-lazy="img.src.url"
            >
              <img
                v-if="!img.isEmpty"
                :key="index"
                :srcset="srcSet(img)"
                :alignment="img.alignment"
                :alt="content[0].about.title"
              />
              <div class="brick-info">
                <span class="info__title">{{ item.title }}</span>
                <div
                  class="info-block"
                  v-for="(aboutBlock, index) in item.about"
                  :key="index"
                >
                  <span>{{ aboutBlock.label }}: </span>
                  <span>{{ aboutBlock.info }}</span>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div class="to-gallery-block__row--mobile-wrapper">
          <div v-if="item.mobilegallery" class="row-mobile__info">
            <span class="info__title">{{ item.title }}</span>
            <div
              v-if="item.about"
            >
              <div
                class="info-block"
                v-for="(aboutBlock, index) in item.about"
                :key="index"
              >
                <span>{{ aboutBlock.label }}: </span>
                <span>{{ aboutBlock.info }}</span>
              </div>
            </div>
          </div>
          <div
            v-for="(element, index) in item.mobilegallery"
            :key="index + 'mobile'"
            class="to-gallery-block__row--mobile"
            v-lazy="element.url">
            <img
              :src="element.url"/>
          </div>
          <div
            class="to-gallery-block__row--mobile row-vimeo"
            v-if="item.vimeoid"
          >
            <div class="row-mobile__info">
              <span class="info__title">{{ item.title }}</span>
              <div
                class="info-block"
                v-for="(aboutBlock, index) in item.about"
                v-if="item.about"
                :key="index"
              >
                <span>{{ aboutBlock.label }}: </span>
                <span>{{ aboutBlock.info }}</span>
              </div>
            </div>
            <div class="mobile-iframe-wrapper">
              <iframe :src="vimeoSrc(item)" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: Array
    },

    methods: {
      brickClass (brick) {
        return {
          'to-gallery-block__brick': true,
          'brick--bottom-align': brick.alignment !== 'top',
          'brick-empty': brick.isEmpty === true
        }
      },

      brickStyles (brick) {
        return parseInt(brick.offset) === 0 ? `width: ${brick.width}; margin-left: unset;` : `width: ${brick.width}; margin-left: ${brick.offset}%;`
      },

      setPagePosition () {
        let position = window.scrollY
        this.$store.commit('SET_PAGE_POSITION', { data: position })
      },

      srcSet (img) {
        return `${img.src.url} 1x, ${img.srcRetina.url} 2x`
      },

      vimeoSrc (item) {
        return `https://player.vimeo.com/video/${item.vimeoid}?color=000000&title=0&byline=0&portrait=0`
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/styles/vars/_fonts";
  @import "./../../assets/styles/helpers/_breakpoints";

  .to-gallery-block {
    width: 100%;
    margin-bottom: 93px;

    &__row {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      margin: 0 -5px;
      padding: 0 5px;
      line-height: 0;

      &--mobile {
        display: none;
        position: relative;

        &.row-vimeo {
          &::before {
            display: none;
          }
        }

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          z-index: 90;
          width: 100%;
          height: 100%;
          background-color: darken(#fff, 2);
          transition: 1s;
        }

        &[lazy=loading] {
          &::before  {
            opacity: 1;
          }
        }

        &[lazy=loaded] {
          &::before {
            opacity: 0;
          }
        }

        @include media(mobile) {
          display: block;
          margin-bottom: 13px;
          text-align: center;
        }

        &-wrapper {
          display: none;
          text-align: center;
          font-size: 17px;
          color: #000;
          font-size: 14px;
          line-height: 1.3;
          transition: .3s;

          .info__title {
            font-weight: 600;
          }

          .info-block {
            margin-top: 2px;
          }

          @include media(mobile) {
            display: block;
          }
        }
      }

      @include media(mobile) {
        display: none;
      }
    }

    &__brick {
      align-items: flex-start;
      position: relative;
      overflow: hidden;

      &.brick--bottom-align {
        align-self: flex-end;
      }

      .brick-nolink {
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
        cursor: default;
      }

      a:not(.brick-nolink) {
        position: relative;
        display: block;
        height: 100%;
        min-height: 110px;
        width: 100%;

        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        &::before {
          height: 100%;
          background-color: rgba(#000, .5);
          opacity: 0;
          transition: .3s;
        }

        &::after {
          z-index: 100;
          background-color: darken(#fff, 2);
          transition: 1s;
        }

        &[lazy=loading] {
          > .brick__placeholder {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;

            &::after {
              content: url('./../../assets/images/loader/loader-2.svg');
              position: absolute;
              top: 50%;
              left: 50%;
              z-index: 9999;
              transform: translate(-50%, -50%);
              width: 132px;
              opacity: .3;
            }
          }

          &::after  {
            opacity: 1;
          }
        }

        &[lazy=loaded] {
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
        object-fit: contain;
        transition: .3s;
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
        transition: .3s;

        .info__title {
          font-weight: 600;
        }

        .info-block {
          margin-top: 2px;
        }
      }
    }

    .brick {
      &-wrapper {
        margin: 0 0 10px;
        padding: 0 5px;
      }
    }

    .row-mobile__info {
      margin-bottom: 20px;
      font-size: 17px;
    }

    .mobile-iframe-wrapper {
      position: relative;
      height: 0;
      height: auto;
      max-width: 100%;
      padding-bottom: 56.25%;
      overflow: hidden;

      iframe,
      object,
      embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    @include media(mobile) {
      margin-bottom: 43px;
    }
  }
</style>
