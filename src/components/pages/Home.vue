<template>
  <div class="box main">
    <to-gallery-block :content="projects"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import toGalleryBlock from '@/components/common/to-gallery-block'

  export default {
    data: () => ({
      projects: [{
        title: 'Aston Martin Lagonda',
        gallery: [{
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2017/02/AstonMartin_Lagonda01.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2017/02/AstonMartin_Lagonda02.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2017/02/AstonMartin_Lagonda03.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2017/02/AstonMartin_Lagonda04.jpg'
        }]
      },
      {
        title: 'Mercedes Benz A Class',
        gallery: [{
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2016/10/Mercedes_A_1.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2016/10/Mercedes_A_2.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2016/10/Mercedes_A_3.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2016/10/Mercedes_A_4.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2016/10/Mercedes_A_5.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2016/10/Mercedes_A_6.jpg'
        },
        {
          url: 'http://wp.tomekolszowski.com/wp-content/uploads/2016/10/Mercedes_A_7.jpg'
        }]
      }]
    }),
    computed: {
      ...mapGetters(['store', 'sessions'])
    },
    mounted () {
      console.log(this.sessions, 'sessions in component')
    },
    components: {
      toGalleryBlock
    }
  }
</script>

<style lang="scss">
  .main {
    opacity: 1;
    transition: .2s;
  }

  .main--loading {
    opacity: 0;
  }
</style>
