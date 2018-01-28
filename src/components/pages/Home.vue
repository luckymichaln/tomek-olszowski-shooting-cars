<template>
  <div class="box main">
    <to-gallery-block :content="sessions"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toGalleryBlock from '@/components/common/to-gallery-block'

  export default {
    computed: {
      ...mapGetters(['sessions'])
    },
    components: {
      toGalleryBlock
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
