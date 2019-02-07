<template>
  <div class="to-gallery--fullscreen" :style="backgroundColor">
    <transition name="fade" mode="in-out">
      <to-gallery
        v-if="isContentLoaded"
        :gallery="singleSession.fullpagegallery"
        :title="singleSession.title"
        :info="singleSession.about"
        :vimeoid="singleSession.vimeoid"
      />
    </transition>
    <transition name="fade" mode="in-out">
      <div class="loader" v-if="!isContentLoaded"/>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import toGallery from "@/components/common/to-gallery";

export default {
  created() {
    if (this.singleSession) {
      const id = this.$route.params.id;
      this.$store.dispatch("GET_SINGLE_SESSION", { id });
    }
  },
  mounted() {
    document.addEventListener("keydown", this.closeGallery);
    document.addEventListener("click", this.closeGallery);
  },
  computed: {
    ...mapGetters(["isContentLoaded", "singleSession", "backToProjects"]),
    backgroundColor() {
      return `background-color: ${
        this.singleSession.fullpagegallerybackgroundcolor
      }`;
    }
  },
  methods: {
    closeGallery(event) {
      if (
        event.target.classList.contains("modal-close-trigger") ||
        event.keyCode === 27 ||
        event.target.classList.contains("to-gallery__img-wrapper")
      ) {
        this.backToProjects
          ? this.$router.push({ name: "projects" })
          : this.$router.push({ name: "home" });
      } else if (
        event.target.nodeName.toUpperCase() !== "IMG" &&
        !event.keyCode
      ) {
        this.backToProjects
          ? this.$router.push({ name: "projects" })
          : this.$router.push({ name: "home" });
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.closeGallery);
    document.removeEventListener("click", this.closeGallery);
  },
  components: {
    toGallery
  }
};
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
