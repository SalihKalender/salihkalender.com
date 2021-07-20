<template>
  <div>
    <div class="container">
      <transition name="downUp" appear>
        <h2 class="header">Tecrübeler ve Deneyimler</h2>
      </transition>
      <transition name="fade" appear>
        <div class="experiences">
          <div class="exp-card c1">
            <div class="progress">
              <transition name="width-1" appear>
                <div class="point bg-1 pnt-1"></div>
              </transition>
            </div>
            <p class="exp-name">
              Scraping Website
            </p>
          </div>
          <div class="exp-card c2">
            <div class="progress">
              <transition name="width-2" appear>
                <div class="point bg-2 pnt-2"></div>
              </transition>
            </div>
            <p class="exp-name">
              E-ticaret sitesi
            </p>
          </div>
          <div class="exp-card c3">
            <div class="progress">
              <transition name="width-3" appear>
                <div class="point bg-3 pnt-3"></div>
              </transition>
            </div>
            <p class="exp-name">
              Blog App
            </p>
          </div>
          <div class="exp-card c4">
            <div class="progress">
              <transition name="width-4" appear>
                <div class="point bg-4 pnt-4"></div>
              </transition>
            </div>
            <p class="exp-name">
              Vue.js Instagram Clone
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
  @import '../assets/styles/experiences.css';
</style>