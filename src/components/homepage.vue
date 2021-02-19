<template>
  <transition>
        <div>
        <rings/>
        <div class="main">
            <personal-inf/>
            <HomeCards/>
            <transition name="opcty" appear>
                <div class="png">
                    <img src="../assets/page-icons/flame.png" class="pngimage">
                </div>
            </transition>
        </div>
            <home-footer/>
    </div>
  </transition>
</template>

<script>
import HomeCards from './homecards'
import rings from './rings'
import PersonalInf from './personalinf'
import HomeFooter from './homefooter'
export default {
  components: {
    HomeCards,
    rings,
    'personal-inf': PersonalInf,
    'home-footer' : HomeFooter
  }
}
</script>

<style>
    @import '../assets/styles/homepage.css';
</style>