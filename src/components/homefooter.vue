<template>
    <div class="footer">
        <socials/>
        <div class="foot-cards">
            <div class="events">
                <h5 class="comming">Yaklaşan Etkinlikler</h5>
                <i class="fas fa-star star"></i>
                <div class="commings">
                    <div v-for="project in Projects" :key="project.id" class="cmg-evnt">
                        <h6 class="cmg-header" :class="'cm-' + project.id">{{project.name}}</h6>
                        <div class="cmg-brd" :class="'cmb-' + project.id"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot-inf">
            <p class="copyright">Copyright - 2021</p>
        </div>
    </div>
</template>

<script>
import socials from './socials'
export default {
    components: {
        socials
    },
    data() {
        return {
            Projects: [
                { id: 1 , name: 'GO Ile Api' },
                { id: 2 , name: 'GO Ile Api' },
                { id: 3 , name: 'GO Ile Api' },
            ]
        }
    }
}
</script>

<style>
    @import '../assets/styles/footer.css';
</style>