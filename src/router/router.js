import Vue from 'vue'
import VueRouter from 'vue-router'

// import Header from './components/header' //TODO: Bunları bi dene ozaman
// import Loading from './components/loading'
import HomePage from '../components/homepage'
import Experiences from '../components/experiences'
import Projects from '../components/projects'
import Contact from '../components/contact'


Vue.use(VueRouter);

const routes = [    //* route degistigi zaman zaman zaten router-view degisecegi icin sadece app.vue 'u tanımlamana ve kullanmana gerek yok, aynen, header'ıda name'li router-view yapman lazım
    { path: '/' , component: HomePage , name: 'HomePage'},
    { path: '/projeler' , component: Projects , name: 'Projects' },
    { path: '/tecrubeler' , component: Experiences , name: 'Experiences' },
    { path: '/iletisim' , component: Contact , name: 'Contact' }
    //TODO: BIRDE 404 SAYFASI VAR
]

export const router = new VueRouter({
    mode: 'history',
    routes
})