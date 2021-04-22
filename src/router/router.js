import Vue from 'vue'
import VueRouter from 'vue-router'


import HomePage from '../components/homepage'
import Experiences from '../components/experiences'
import Projects from '../components/projects'
import Contact from '../components/contact'


Vue.use(VueRouter);

const routes = [  
    { path: '/' , component: HomePage , name: 'HomePage'},
    { path: '/projeler' , component: Projects , name: 'Projects' },
    { path: '/tecrubeler' , component: Experiences , name: 'Experiences' },
    { path: '/iletisim' , component: Contact , name: 'Contact' }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
