<script>
export default {
    name:"search",
    data(){
        return{
            query: ""
        }
    },
    methods:{
        handleSearch(){
            this.$emit('SearchRequested',this.query)
        }
    }
}
</script>

<template lang="pug">
.search
  .search-box
    input.search-bar(type="text" placeholder="Search..." v-model="query" @keypress.enter="handleSearch")
</template>

<style lang="scss" scoped>
.search-box{
    width: 100%;
    margin-bottom: 30px;
    .search-bar{
        display: block;
        width: 100%;
        padding: 15px;

        color: #313131;
        font-size: 20px;

        appearance: none;
        border: none;
        outline: none;
        background: none;

        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 0px 16px 0px 16px;
        transition: 0.4s;
        &:focus{
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
            background-color: rgba(255, 255, 255, 0.75);
            border-radius: 16px 0px 16px 0px;
        }
    }
}

</style>