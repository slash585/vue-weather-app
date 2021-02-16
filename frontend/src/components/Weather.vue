<script>
export default {
    name: 'weather',
    props: ['weather'],
    methods:{
        dateBuilder(){
            let d = new Date()
            let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
            let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

            let day = days[d.getDay()]
            let date = d.getDate()
            let month = months[d.getMonth()]
            let year = d.getFullYear()

            return `${day} ${date} ${month} ${year}`
        }
    }
}
</script>

<template lang="pug">
.weather-wrap
  .location-box
    .location {{ weather.data.name }}, {{ weather.data.sys.country }}
    .date {{dateBuilder()}}
  .weather-box
    .temp {{ Math.round(weather.data.main.temp) }}°c


</template>

<style lang="scss" scoped>
.location-box{
    .location{
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }
    .date{
        color: #fff;
        font-size: 20px;
        font-weight: 300;
        font-style: italic;
        text-align: center;
    }
}

.weather-box{
    text-align: center;
    .temp{
        display: inline-block;
        padding: 10px 25px;
        color: #fff;
        font-size: 102px;
        font-weight: 900;

        text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        background-color:rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        margin: 30px 0;

        box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }
    .weather{
        color: #fff;
        font-size: 48px;
        font-weight: 700;
        font-style: italic;
        text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }
}
</style>