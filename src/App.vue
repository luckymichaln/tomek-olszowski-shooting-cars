<template>
  <div id="app" :class="setAppClass">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      setAppClass () {
        return {
          'app': true
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/styles/main";

  .app {
    transition: 1s;
  }

  .loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;

    &::before {
      content: url('./assets/images/loader/loader-2.svg');
      position: absolute;
      top: 50%;
      left: 50%;
      width: 265px;
      z-index: 9999;
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
