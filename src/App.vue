<template>
  <div id="app" :class="appClass">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    appClass() {
      return {
        app: true
      };
    }
  }
};
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
    content: url("./assets/images/loader/loader_big_dot.svg");
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35px;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
}

#app {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
