<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import router from './router'

export default {
  name: 'app',
  price: '',
  router,
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>

</style>
