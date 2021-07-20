<template>
    <div class="additional">
            <div class="cards">
                    <transition name="toleft1" appear>
                        <slide/>
                    </transition>
                    <transition name="toleft2" appear>
                        <weather/>
                    </transition>
                    <transition name="toleft3" appear>
                        <events/>
                    </transition>
            </div>
        </div>
</template>

<script>
import slide from './slide'
import weather from './weather'
import events from './events'

export default {
    components: {
        slide,
        weather,
        events
    },
    
}  
</script>
    
<style>
    @import '../assets/styles/homecards.css';
</style>