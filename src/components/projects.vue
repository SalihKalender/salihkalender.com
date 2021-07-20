<template>
  <div class="container">
    <transition name='downUp' appear>
      <h2 class="header">Projeler</h2>
    </transition>
    <div class="experiences">
        <div class="exp-card">
          <div class="progress-bar prj-1">
            <span class="progress-bar__fill fill-1" style="width: 75%;"></span>
          </div>
          <h4 class="prj-name name-1">Vue.js Todo App</h4>
        </div>
        <div class="exp-card">
         <div class="progress-bar prj-2">
            <span class="progress-bar__fill fill-2" style="width: 75%;"></span>
          </div>
          <h4 class="prj-name name-2">React Date-Picker</h4>  
        </div>
      
        <div class="exp-card">
           <div class="progress-bar prj-3">
            <span class="progress-bar__fill fill-3" style="width: 75%;"></span>
          </div>
          <h4 class="prj-name name-3">Nuxt e-ticaret</h4>
        </div>
        <div class="exp-card">
           <div class="progress-bar prj-4">
            <span class="progress-bar__fill fill-4" style="width: 75%;"></span>
          </div>
          <h4 class="prj-name name-4">Vue.js Instagram Clone</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import '../assets/styles/projects.css';

</style>