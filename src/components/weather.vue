<template>
    <div class="card c2">
        <h6 class="card-header">Hava Koşulları</h6>
        <div class="weather-sec">
            <new-date />
            <div class="wheather-icons">
                <img
                    :src=imageUrl
                    class="w-icon"
                />
            </div>
        </div>
    </div>
</template>
<script>
import newDate from './newDate'
export default {
    computed: {
        imageUrl() {
            return this.$store.getters.getUrl
        },

    },
    components: {
        newDate
    }
}
</script>