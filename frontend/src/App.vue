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
         this.handleFetchWeathers(latitude,longitude)
      },
      (err)=>{
        this.error = err
      }
    )
  },
  methods:{
    ...mapActions(['fetchWeather']),
    async handleFetchWeathers(lat,lon){
        this.weather = await this.fetchWeather({lat,lon})
        console.log(this.weather)
      }
  }
}
</script>

<template lang="pug">
  #app
    main
      Search
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
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4;
}

#app.warm {
  background-image: url('./assets/warm-bg.jpg');
}

main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}


</style>
