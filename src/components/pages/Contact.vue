<template>
  <div>
    <to-header />
    <div class="box main">
      <transition name="fade" mode="in-out">
        <to-contact
          v-if="isContentLoaded" :contact="contact"/>
      </transition>
      <transition name="fade" mode="in-out">
        <div class="loader" v-if="!isContentLoaded"></div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toHeader from '@/components/common/to-header'
  import toContact from '@/components/common/to-contact'

  export default {
    created () {
      if (!this.contact) {
        const id = 186
        this.$store.dispatch('GET_CONTACT_PAGE', { id })
      }
    },

    computed: {
      ...mapGetters(['contact', 'isContentLoaded'])
    },

    components: {
      toContact,
      toHeader
    }
  }
</script>

<style lang="scss">

</style>
