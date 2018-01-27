<template>
  <div>
    <div v-html="content"></div>
    <div v-html="pdf"></div>
  </div>
</template>

<script>
  export default {
    props: {
      content: String,
      pdf: String
    }
  }
</script>

<style lang="scss">
</style>
