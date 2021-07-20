<template>
  <div class="contact-container">
    <transition name="downUp" appear>
        <h2 class="c-header header">İletişim</h2>
    </transition>
    <div class="f-cnt">
        <transition name="fade" appear>
            <contact-form/>
        </transition>
    </div>
  </div>
</template>

<script>
import contactForm from './contactForm'
export default {
    components: {
        contactForm
    }
}
</script>

<style>
  @import '../assets/styles/contact.css';
</style>