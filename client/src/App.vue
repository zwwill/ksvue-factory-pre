<template>
    <div id="app">
        <router-link to="/">index</router-link>
        <router-link to="/test1">test1</router-link>
        <router-link to="/test2">test2</router-link>
        <router-view/>
    </div>
</template>

<script>
    import '@kaola/mobileweb-scss/base.scss';
    export default {
        name: 'App',
        components: {},
        created(){
        }
    }
</script>

<style lang="scss">
    #app {
        position: relative;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        top: 60px;

        a{
            font-size: 16px;
            color:#00f;
            text-decoration: underline;
            margin: 10px;
        }
        h1{
            font-size: 18px; 
        }
    }
</style>
