<template>
  <div class="to-gallery">
    <div
      class="to-gallery-block"
      v-for="(item, index) of content"
      :key="index">
        <div
          v-for="(element, index) in item.gallery"
          :key="index"
          class="to-gallery-block__row">
          <router-link
            v-for="(img, index) in element.row"
            :key="index"
            :to="`/${item.id}/${item.slug}`"
            :class="brickClass(img)"
            :style="brickStyles(img)"
            @click.native="setPagePosition"
          >
            <img
              v-if="!img.isEmpty"
              :key="index"
              :srcset="img.src"
              :alignment="img.alignment"
              :alt="content[0].about.title"
            />
            <div class="brick-info"><span class="info--title">{{ item.title }}</span></div>
          </router-link>
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
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/styles/vars/_fonts";

  .to-gallery-block {
    width: 100%;
    margin-bottom: 30px;

    h1 {
      display: inline-block;
      padding: 0 12% 10px 0;
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
      margin-bottom: 7px;
      position: relative;
      overflow: hidden;

      &:hover {
        .brick-info {
          opacity: 1;
        }

        &::before {
          opacity: 1;
        }
      }

      &.brick--bottom-align {
        align-self: flex-end;
      }

      &:not(:last-child) {
        margin-right: 10px;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .98);
        opacity: 0;
        transition: .3s;
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
        font-size: 14px;
        color: #000;
        opacity: 0;
        transition: .3s;

        .info--title {
          font-family: $font-bold;
          font-weight: 600;
        }
      }
    }
  }
</style>
