import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
   async fetchWeather(context,{lat,lon}){
      return await axios.post(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6fc65050d50851eb84cce48e887f38c4`)
    }
  }
})
