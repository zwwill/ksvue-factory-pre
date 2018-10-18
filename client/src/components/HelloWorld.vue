<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to KSVue App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .hello{
        font-size: 2rem;
        color: #007d37;
    }
</style>
