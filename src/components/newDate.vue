<template>
  <div class="weather-infs">
        <p class="w-city">{{city}}</p>
        <p class="w-clc">{{degree}}°</p>
        <p class="w-date">{{ day }} {{ month }} {{ year }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: this.$store.state.city,
            day: null,
            month: null,
            year: null,
        }
    },
    computed: {
        degree() {
            return this.$store.getters.getDegree
        }
    },
    created() {
        const ArrayDate = new Date().toString().split(' ');
        this.day = ArrayDate[2],
        this.month = ArrayDate[1],
        this.year = ArrayDate[3]
    }
}
</script>

<style>

</style>