<template>
  <div>
    <to-header />
    <div class="box main">
      <transition name="fade" mode="in-out">
        <to-about
          v-if="isContentLoaded" :about="about"/>
      </transition>
      <transition name="fade" mode="in-out">
        <div class="loader" v-if="!isContentLoaded"></div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toHeader from '@/components/common/to-header'
  import toAbout from '@/components/common/to-about'

  export default {
    created () {
      const id = 2
      this.$store.dispatch('GET_ABOUT_PAGE', { id })
    },

    computed: {
      ...mapGetters(['about', 'isContentLoaded'])
    },

    mounted () {
      console.log(this.about, 'about in component')
    },

    components: {
      toHeader,
      toAbout
    }
  }
</script>

<style lang="scss">

</style>
