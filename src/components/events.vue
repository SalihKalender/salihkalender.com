<template>
    <div class="card c3">
        <h6 class="card-header">Proje Etkinlikleri</h6>
        <div class="projcets-cards">
            <div class="prj-crd" v-for="(card,index) in projectCards" :key="index">
                <h4 class="prj-header">
                    <span class="hkm">{{card.title.split(' ')[0]}}</span>
                    <br>
                    {{card.title.split(' ')[1]}}
                </h4>
                <img
                    :src="require('@/assets/web-icons/' + card.image + '.png')"
                    class="prj-image p1"
                />  <!-- Etiketin icinde oldugumuz icin süslü paranteze gerek yok, ayrıca @ kullanacagın zaman require() sart -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            projectCards: [
                {title: 'Web Development', image: 'html5'},
                {title: 'Responsive Design', image: 'css-3'},
                {title: 'JS Frameworks', image: 'js'},
            ],
        }
    },
}
</script>