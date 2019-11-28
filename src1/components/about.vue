<template>
  <div>
      <h1>我是头部组件</h1>
      <h2><font color="red">{{num}}</font></h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num:''
        }
    },
    created() {
        console.log(this.$route);
        this.num=this.$route.params.id;
    },
}
</script>

<style>
h1{
    width: 100%;
    height: 40px;
    background: blue
}
</style>
