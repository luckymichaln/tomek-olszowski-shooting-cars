<template>
  <div class="box main">
    <to-header />
  </div>
</template>

<script>
  import toHeader from '@/components/common/to-header'

  export default {
    data: () => ({

    }),
    components: {
      toHeader
    }
  }
</script>

<style lang="scss">
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  .box {
    max-width: 960px;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
  }
</style>
