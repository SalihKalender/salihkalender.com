<template>
  <div class="infmtons"> <!-- Front-end'e alt çizgi ekle yakısır -->
            
            <transition name="p7" appear>
                <h1 class="header">Jr. Front-end Developer</h1>
            </transition>
            <transition name="p5" appear>
                <p class="prginf">
                    Merhaba, 1 buçuk yıl önce başlamış olduğum yazılım serüvenine web alanında Full Stack Developer olarak devam etmekteyim.
                    Tabikide web alanında çalışmalar sürdükmekte ve yeni teknolojilere ayak uydurmaktayım. Kullandığım framework'ler arasında Front-end tarafında Vue, Nuxt.js ve temel React yazmaktayım,
                    Back-end tarafında ise Node.js yazmaktayım. Bu framework'lerin yanında Styled Components, GSAP, apexCharts gibi birçok framework'ude projelerimde kullanmaya gayret gösteriyorum.
                </p>
            </transition>
            <btn>Tıklayınız</btn>
        </div>
</template>

<script>
import btn from './button/btn'
export default {
    components: {
        btn: btn
    }
}
</script>

<style>
    @import '../assets/styles/personalinf.css';
</style>