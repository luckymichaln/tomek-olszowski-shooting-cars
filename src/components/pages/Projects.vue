<template>
  <div>
    <to-header/>
    <div class="box main">
      <transition name="fade" mode="out-in" @before-enter="setTopPosition">
        <to-projects-gallery-block v-if="isContentLoaded" :content="sessionsCovers"/>
        <div class="loader" v-if="!isContentLoaded"/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import toHeader from "@/components/common/to-header";
import toProjectsGalleryBlock from "@/components/common/to-projects-gallery-block";

export default {
  created() {
    if (!this.sessions || !this.sessions.length) {
      this.$store.dispatch("GET_HP_SESSIONS");
    }
  },

  computed: {
    ...mapGetters(["sessionsCovers", "isContentLoaded", "pagePosition"])
  },

  mounted() {
    this.setActiveSessionPosition();
  },

  methods: {
    setTopPosition() {
      if (!this.pagePosition) {
        window.scrollTo(0, 0);
      }
    },

    setActiveSessionPosition() {
      window.scrollTo(0, 0);
      let body = document.getElementsByTagName("body")[0];
      let height = `${this.pagePosition}`;
      let pageHeight = parseInt(height) + 1000;

      if (this.pagePosition) {
        body.style.height = `${pageHeight}px`;
        body.style.overflow = "hidden";
        window.scrollTo(0, this.pagePosition);

        setTimeout(() => {
          body.style.height = "auto";
          body.style.overflow = "visible";
        }, 2000);
      }
    }
  },

  components: {
    toHeader,
    toProjectsGalleryBlock
  }
};
</script>

<style lang="scss">
.main {
  min-height: 100vh;
  opacity: 1;
  transition: 0.2s;
}

.main--loading {
  opacity: 0;
}
</style>