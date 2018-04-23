<template>
  <div class="to-about">
    <p>{{ about }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      about: Array
    }
  }
</script>

<style lang="scss">
  .to-about {
    padding-top: 90px;

    &__heading {
      margin-bottom: 40px;
      font-weight: 600;
    }
  }
</style>
