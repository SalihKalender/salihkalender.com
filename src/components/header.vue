<template>
    <div class="nav-container">
        <transition name="downUp" appear>
            <ul class="nav-list">
                <li v-for="(route,index) in routes" :key="index" class="nav-route">
                    <router-link tag="button" :to="{name: route.routeName}" class="nav-item"> {{ route.name }} </router-link>
                    <div class="nav-border"  :class="'nb-' + (index + 1)"></div>
                </li>
            </ul>
        </transition>
        <div class="res-nav-list">
            <div class="res-nav-icon" @click="displayRNlist">
                <i class="fas fa-bars"></i>
            </div>
            <ul class="res-nav-items" ref="responseList">
                <li @click="goRoute" v-for="(route,index) in routes" :key="index" class="nav-route">
                    <router-link tag="button" :to="{ name: route.routeName }" class="nav-item"> {{ route.name }} </router-link>
                    <div class="nav-border rl-w" :class="'nb-' + (index + 1)"></div>
                </li>
            </ul>            
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [ {name: 'Anasayfa' , routeName: 'HomePage'} , {name: 'Tecrübeler' , routeName: 'Experiences'} , {name: 'Projeler' , routeName: 'Projects'} , {name: 'İletişim' , routeName: 'Contact'} ],
      displayRList: false
    }
  },
  methods: {
      displayRNlist() {
          if(this.displayRList == false) {
            this.displayRList = true;
            this.$refs.responseList.style.left = '0';
            this.$refs.responseList.style.transition = 'left .5s'
          }
          else if(this.displayRList == true) {
            this.displayRList = false;
            this.$refs.responseList.style.left = '100%'
          }
    },
    goRoute() {
        document.querySelector('.res-nav-items').style.left = 100 + '%';
        document.querySelector('.res-nav-items').style.transition = 'left .4s' 
    }
  },
}
</script>

<style>
    @import '../assets/styles/header.css';
    
</style>