<template>
  <div class="to-gallery-block">
    <div
      v-for="(item, index) of content"
      :key="index"
      class="to-gallery-block__inner">
        <h1>{{ item.about.title }}</h1>
        <div
          v-for="(img, index) in item.gallery"
          :key="index"
          class="to-gallery-block__brick">
          <img
            :key="index"
            :srcset="img.src"
            alt="" />
          <div class="brick-info">{{ item.about.title }}</div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: Array
    }
  }
</script>

<style lang="scss">
  .to-gallery-block {
    &__brick {
      // height: 620px;
      // width: 100%;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.02);
          filter: blur(8px);
        }

        .brick-info {
          opacity: 1;
          transition: .3s .1s;
        }
      }

      img {
        // height: 100%;
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
        font-size: 35px;
        color: #fff;
        opacity: 0;
        transition: .05s;
      }
    }
  }
</style>
