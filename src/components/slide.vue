<template>
    <div class="card c1">
        <h6 class="card-header">Kulüp Etkinlikleri</h6>
        <div class="slide">
            <i class="fas fa-arrow-left sld-btn" @click="prevSlide"></i>
            <div class="slide-sec">
                <div class="slide-images" ref="slide">
                    <img
                        v-for="(image,index) in images"
                        :key="index"
                        :src="require('@/assets/slides/' + image + '.jpg')"
                        class="slide-image" ref="slideImage"
                    />    
                </div>
            </div>
            <i class="fas fa-arrow-right sld-btn sld-right" @click="nextSlide"></i>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            carouselSlide: document.querySelector('.slide-images'),
            carouselImages: document.querySelectorAll('.slide-image'),
            counter: 0,
            images: ['coding','coding2','coding3','coding4'],
        }
    },
    methods: {
        nextSlide() {
            const size = this.$refs.slideImage[0].clientWidth
            const slide = this.$refs.slide;
            this.counter != slide.children.length - 1 ? this.counter++ : this.counter = 0
            slide.style.transform = 'translateX(-' + size * this.counter + 'px)';
            slide.style.transition = 'all .2s';
        },
        prevSlide() {
            const size = this.$refs.slideImage[0].clientWidth
            const slide = this.$refs.slide;
            this.counter != 0 ? this.counter-- : this.counter = slide.children.length - 1
            slide.style.transform = 'translateX(-' + size * this.counter + 'px)';
            slide.style.transition = 'all .2s';
        },
    },
}
</script>