<script>
import Search from '@/components/Search.vue'
import Weather from '@/components/Weather.vue'
import { mapActions } from 'vuex'

export default {
  name:"app",
  components:{
    Search,
    Weather
  },
  data(){
    return{
      errorMessage: "",
      weather: {}
    }
  },
  mounted(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        const longitude = position.coords.longitude
        const latitude  = position.coords.latitude
         this.fetchWeathers(latitude,longitude)
      },
      (err)=>{
        this.error = err
      }
    )
  },
  methods:{
    ...mapActions(['fetchWeather','handleFetchWeather']),
    async fetchWeathers(lat,lon){
        this.weather = await this.fetchWeather({lat,lon})
        console.log(this.weather)
    },
    async handleSearch(query){
      this.weather = await this.handleFetchWeather(query)
    }
  }
}
</script>

<template lang="pug">
  #app
    main
      Search(v-on:SearchRequested="handleSearch")
      Weather(:weather="weather")
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
  background-color: #DB524D;
}

main{
  min-height: 100vh;
  padding: 25px;
}


</style>
