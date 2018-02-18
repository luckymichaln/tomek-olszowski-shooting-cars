<template>
  <div class="to-gallery">
    <div
      class="to-gallery-block"
      v-for="(item, index) of content"
      :key="index">
      <h1>{{ item.title }}</h1>
      <div class="to-gallery-block__inner">
          <div
            v-for="(element, index) in item.gallery"
            :key="index"
            class="to-gallery-block__row">
            <div v-for="(img, index) in element.row" :class="brickClass(img)" :style="brickWidth(img)">
              <img
              v-if="!img.isEmpty"
              :key="index"
              :srcset="img.src"
              :alignment="img.alignment"
              :alt="content[0].about.title" />
              <div class="brick-info">{{ item.title }}</div>
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

      brickWidth (brick) {
        return `width: ${brick.width}`
      }
    }
  }
</script>

<style lang="scss">
  .to-gallery-block {
    margin-bottom: 30px;

    h1 {
      display: inline-block;
      padding: 0 12% 10px 0;
      // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      font: {
        size: 38px;
        weight: 600;
      }
      color: rgba(0, 0, 0, 0.75);
    }

    &__row {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
    }

    &__brick {
      align-items: flex-start;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;

      &.brick--bottom-align {
        align-self: flex-end;
      }

      &:not(.brick-empty):hover {
        cursor: pointer;

        img {
          transform: scale(1.02);
          filter: blur(8px);
        }

        .brick-info {
          opacity: 1;
          transition: .3s .1s;
        }
      }

      &:not(:last-child) {
        margin-right: 10px;
      }

      img {
        width: 100%;
        object-fit: contain;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000;
        perspective: 1000;
        transition: .3s;
      }

      .brick-info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        font-size: 35px;
        color: #fff;
        opacity: 0;
        transition: .05s;
      }
    }
  }
</style>
