import weather from '../../api/weather'

const state = {
    wheather_key: 'WEATHER_KEY',
    city: 'Istanbul',
    wheatherIconName: null,
    IconUrl: null,
    degree: null
}

const getters = {
    getUrl(state) {
        return state.IconUrl
    },
    getDegree(state) {
        return state.degree
    }
}

const mutations = {
    setIconName(state,payload) {
        state.wheatherIconName = payload;
    },
    setUrl(state,payload) {
        state.IconUrl = payload;
    },
    setDegree(state,payload) {
        state.degree = Math.floor(payload - 273.15);
    }
}

const actions = {
    async getWheather(context) {
        const Response = await weather.get(`/weather?q=${context.state.city}&appid=${context.state.wheather_key}`);
        context.commit('setIconName',Response.data.weather[0].icon);
        context.commit('setDegree',+Response.data.main.temp)
        context.commit('setUrl',`http://openweathermap.org/img/wn/${Response.data.weather[0].icon}.png`)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}