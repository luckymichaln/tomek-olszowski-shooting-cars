<template>
  <div>
    <to-header />
    <div class="box main">
      <to-about />
    </div>
  </div>
</template>

<script>
  import toHeader from '@/components/common/to-header'
  import toAbout from '@/components/common/to-about'

  export default {
    components: {
      toHeader,
      toAbout
    }
  }
</script>

<style lang="scss">

</style>
