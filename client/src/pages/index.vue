<template>
    <div class="p-index">
        <img src="../assets/logo.png" @touchstart="t++">
        <h1 v-if="user">hi {{user.username}}</h1>
        <hello-world></hello-world>
        <h1 v-mshow="t%2==1">index::{{t}}</h1>
    </div>
</template>

<script>
    import PageBase from '@/helper/pageBase.vue'
    import HelloWorld from '@/components/HelloWorld.vue'
    import homeStoreModule from '../store/modules/home.js'
    export default {
        extends: PageBase,
        title: 'KAPP-SSR-INDEX',
        head:'<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>',
        name: 'index',
        components: {
            HelloWorld
        },
        asyncData ({ store }) {
            store.registerModule('home', homeStoreModule)
            return store.dispatch('home/getUser','i001')
        },
        data: function () {
            return {
                t: 1
            }
        },
        computed: {
            user () {
                return this.$store.state.home.user
            }
        },
        directives: {
            mshow (node, dir) {
                // 基于指令绑定元数据(metadata)转换 vnode
                let style = node.style || (node.style = {})
                if (!dir.value) {
                    style.display = 'none'
                }else {
                    style.display = ''
                }
            }
        },
        created() {
            console.log('created')
        },
        mounted() {
            console.log('mounted')
        },
        destroyed () {

            // 此处猜测是 vuex 的 bug，已提 PR，待通过后可讲此句移除
            if(!this.$store._modules.root.getChild('home')) return;
            
            this.$store.unregisterModule('home')
        },
        methods: {}
    }
</script>


<!-- !! Add "scoped" attribute to limit CSS to this page only -->
<style lang="scss" scoped>
    .p-index{
        h1{
            color: #567567;
        }
    }
</style>

