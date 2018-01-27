<template>
  <div class="box main">
    <to-contact :content="contact" :pdf="pdf"/>
  </div>
</template>

<script>
  import toContact from '@/components/common/to-contact'

  export default {
    data: () => ({
      contact: '<p><b>Tomek Olszowski</b><br>ncar photographer based in Cracow, Poland.<br>In 2005 Tomek graduated from Architecture and postgraduated in 2006 from Digital Graphics,<br>nhowever, great passion for cars and photography led to his current way of life –<br>nshooting cars. During last couple of years Tomek was awarded, honored and nominated <br>in international competitions in automotive categories.</p><p>Tomek offers full service car photography & postproduction.<br>Worked for Mercedes Benz, Volvo, Toyota, Maserati, Chevrolet,<br>Seat Magazine, Hyundai Magazine, TopGear Poland.<br><br><br><b>Direct contact</b><br><a href="mailto:info@tomekolszowski.com">info@tomekolszowski.com</a><br>+48 604 946 246<br><br><br><b>On the web</b><br><a href="https://www.behance.net/tomekolszowski">Behance</a> | <a href="https://instagram.com/tomekolszowski/">Instagram</a></p><br><br><p>© 2017 Copyright by Tomek Olszowski | All Rights Reserved</p>',
      pdf: 'http://wp.tomekolszowski.com/wp-content/uploads/2017/03/Tomek-Olszowski-Shooting-Cars.pdf'}),
    components: {
      toContact
    }
  }

  // session: {
  //   title: 'Aston Martin',
  //   excerpt: 'some info about session',
  //   gallery : {
  //     img: {
  //       src: 'http://www.sss.com/1.jpg',
  //       height: 230,
  //       width: 600,
  //       alignment: 'bottom',
  //       fullWidth: false
  //     },
  //     img: {
  //       src: 'http://www.sss.com/2.jpg',
  //       height: 100,
  //       width: 300,
  //       alignment: 'top',
  //       fullWidth: false
  //     },
  //     img: {
  //       src: 'http://www.sss.com/3.jpg',
  //       height: 1200,
  //       width: 800,
  //       alignment: '',
  //       fullWidth: true
  //     }
  //   }
  // }
</script>

<style lang="scss">

</style>
