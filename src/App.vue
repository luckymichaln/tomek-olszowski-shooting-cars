<template>
  <div id="app" :class="setAppClass">
    <to-header />
    <transition name="fade" mode="out-in">
      <router-view v-if="isContentLoaded"></router-view>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="loader" v-if="!isContentLoaded"></div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toHeader from '@/components/common/to-header'

  export default {
    name: 'app',
    created () {
      this.$store.dispatch('GET_SESSIONS')
    },
    computed: {
      ...mapGetters(['isContentLoaded']),
      setAppClass () {
        return {
          'app': true
        }
      }
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

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;

    &::before {
      content: url('./assets/images/loader/loader.svg');
      position: absolute;
      height: 60px;
      width: 100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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
