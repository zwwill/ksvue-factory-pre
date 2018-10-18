<template>
    <div class="p-index2">
        <img src="../assets/logo.png" @touchstart="t++">
        <hello-world></hello-world>
        <h1>test2::{{t}}</h1>
    </div>
</template>

<script>
    import PageBase from '@/helper/pageBase.vue'
    import HelloWorld from '@/components/HelloWorld.vue'
    export default {
        extends: PageBase,
        name: 'test2',
        title: 'TEST-2',
        head:'<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>',
        components: {
            HelloWorld
        },
        data: function(){
          return {
              t: 1
          }
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>
    .p-index2{
        h1{
            color: #ee6d3a;
        }
    }
</style>
