import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import weather from './modules/weather'
import contact from './modules/contact'

const store = new Vuex.Store({
    modules: {
        weather,
        contact
    }
})

export default store;