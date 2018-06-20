<template>
  <div class="to-contact">
    <p class="to-contact__heading">Say Hello :)</p>
    <div class="to-contact__main-info">
      <div class="info-block">
        <p class="info-block__title">{{ contact[0].title }}</p>
        <p class="info-block__subtitle" v-if="contact[0].subtitle">{{ contact[0].subtitle }}</p>
        <p class="info-block__email">email: {{ contact[0].email }}</p>
        <p class="info-block__mobile">mobile: {{ contact[0].mobile }}</p>
        <p class="info-block__location">{{ contact[0].location }}</p>
        <a :href="websiteAddress(contact[0])" target="_blank" class="info-block__website">www.{{ contact[0].website }}</a>
      </div>
    </div>
    <div class="to-contact__secondary-info">
      <div
        v-for="(block, index) in contact"
        :key="index"
        v-if="index > 0"
        class="info-block"
      >
        <p class="info-block__title">{{ block.title }}</p>
        <p class="info-block__subtitle" v-if="block.subtitle">{{ block.subtitle }}</p>
        <p class="info-block__email">email: {{ block.email }}</p>
        <p class="info-block__mobile">mobile: {{ block.mobile }}</p>
        <p class="info-block__location">{{ block.location }}</p>
        <a :href="websiteAddress(block)" target="_blank" class="info-block__website">www.{{ block.website }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      contact: Array
    },

    methods: {
      websiteAddress (item) {
        return `http://www.${item.website}`
      }
    }
  }
</script>

<style lang="scss">
  @import "./../../assets/styles/helpers/_breakpoints";

  .to-contact {
    padding: 72px 0 40px;

    &__heading {
      margin-bottom: 40px;
      font-size: 14px;
      font-weight: 600;

      @include media(mobile) {
        font-size: 17px;
      }
    }

    &__main-info {
      margin-bottom: 70px;

      @include media(mobile) {
        margin-bottom: 40px;
      }
    }

    &__secondary-info {
      display: flex;
      justify-content: space-between;

      @include media(mobile) {
        flex-flow: column nowrap;
      }
    }

    .info-block {
      width: calc((100% / 3) - 10px);
      padding-right: 45px;
      line-height: 1.3;
      font-size: 14px;

      &__title,
      &__subtitle {
        font-weight: 600;
      }

      &__website {
        display: inline-block;
        margin-top: 22px;
        text-decoration: none;
        color: #000;
      }

      @include media(mobile) {
        width: 100%;
        margin-bottom: 40px;
        font-size: 17px;
      }
    }
  }
</style>
