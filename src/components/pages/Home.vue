<template>
  <div>
    <to-header />
    <div class="box main">
      <transition name="fade" mode="out-in">
        <to-hp-gallery-block v-if="isContentLoaded" :content="sessions"/>
        <div class="loader" v-if="!isContentLoaded"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toHeader from '@/components/common/to-header'
  import toHpGalleryBlock from '@/components/common/to-hp-gallery-block'

  export default {
    created () {
      this.$store.dispatch('GET_HP_SESSIONS')
    },
    computed: {
      ...mapGetters(['sessions', 'isContentLoaded', 'pagePosition'])
    },

    mounted () {
      if (this.pagePosition) {
        let body = document.getElementsByTagName('body')[0]
        let height = `${this.pagePosition}`
        let pageHeight = parseInt(height) + 1000

        body.style.height = `${pageHeight}px`

        setTimeout(() => {
          window.scrollTo(0, this.pagePosition)
        }, 100)

        setTimeout(() => {
          body.style.height = 'auto'
        }, 1000)
      }
    },

    components: {
      toHeader,
      toHpGalleryBlock
    }
  }
</script>

<style lang="scss">
  .main {
    min-height: 100vh;
    opacity: 1;
    transition: .2s;
  }

  .main--loading {
    opacity: 0;
  }
</style>
