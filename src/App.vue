<template>
  <div id="app" :style="isContact">
      <Header></Header>
      <transition name="fade" mode="out-in">  <!-- Burada appear yok çünkü içindekiler appear -->
        <router-view/>
      </transition>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  components: {
    Header
  },
  computed: {
    isContact() {
      if(this.$route.name == 'Contact') {
          return {  backgroundImage : 'linear-gradient(to right, #493240, #FF0099)'}
      }
      else {
        return {  backgroundImage : 'linear-gradient(to right, #5D26C1, #a17fe0, #59C173) !important'}
      }
    }
  },
  async created() {
      this.$store.dispatch('getWheather')
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>
