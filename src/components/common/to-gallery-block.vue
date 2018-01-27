<template>
  <div class="to-gallery-block">
    <div
      v-for="(sessions, index) of content"
      :key="index"
      class="to-gallery-block__inner">
        <div
          v-for="(img, index) in sessions.gallery"
          :key="index"
          class="to-gallery-block__brick">
          <img
          :key="index"
          :src="img.url"
          :alt="sessions.title" />
          <span class="brick-title">{{ sessions.title }}</span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: [Object, Array]
      }
    }
  }
</script>

<style lang="scss">
  .to-gallery-block {
    &__brick {
      height: 620px;
      width: 100%;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.02);
          filter: blur(8px);
        }

        .brick-title {
          opacity: 1;
          transition: .3s .1s;
        }
      }

      img {
        height: 100%;
        object-fit: contain;
        transition: .3s;
      }

      .brick-title {
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
