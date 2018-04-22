<template>
  <div class="to-gallery--fullscreen" :style="backgroundColor">
    <!-- <p>{{ singleSession.title }}</p> -->
    <transition name="fade" mode="in-out">
      <to-gallery
        v-if="isContentLoaded" :gallery="singleSession.fullpagegallery"/>
    </transition>
    <transition name="fade" mode="in-out">
      <div class="loader" v-if="!isContentLoaded"></div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toGallery from '@/components/common/to-gallery'

  export default {
    created () {
      const id = this.$route.params.id
      this.$store.dispatch('GET_SINGLE_SESSION', {id})
    },
    mounted () {
      document.addEventListener('keydown', this.closeGallery)
      document.addEventListener('click', this.closeGallery)
    },
    computed: {
      ...mapGetters(['isContentLoaded', 'singleSession']),
      backgroundColor () {
        return `background-color: ${this.singleSession.fullpagegallerybackgroundcolor}`
      }
    },
    methods: {
      closeGallery (event) {
        if (event.keyCode === 27 || event.target.classList.contains('modal-close-trigger')) {
          this.$router.push('/')
        } else if (event.target.nodeName.toUpperCase() !== 'IMG') {
          this.$router.push('/')
        }
      }
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.closeGallery)
      document.removeEventListener('click', this.closeGallery)
    },
    components: {
      toGallery
    }
  }
</script>

<style lang="scss">
  .to-gallery--fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    overflow-y: scroll;
  }
</style>
