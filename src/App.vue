<template>
  <div id="app" :class="setAppClass">
    <to-header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import toHeader from '@/components/common/to-header'

  export default {
    name: 'app',
    created () {
      this.$store.dispatch('GET_SESSIONS')
    },
    data: () => ({
      loading: true
    }),
    computed: {
      setAppClass () {
        return {
          'app': true,
          'app--loading': this.loading
        }
      }
    },
    methods: {
      isLoading () {
        setTimeout(() => {
          this.loading = !this.loading
        }, 1000)
      }
    },
    mounted () {
      this.isLoading()
    },
    components: {
      toHeader
    }
  }
</script>

<style lang="scss">
  @import "./assets/styles/main";

  .app {
    transition: 1s;
  }

  .app--loading {
    opacity: 0;
  }

  #app {
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
      opacity: 0
    }
  }
</style>
