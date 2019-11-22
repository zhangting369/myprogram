<template>
  <div>
      <h1>我是详情页面</h1>
      <h3>传过来的参数是：{{id}}</h3>
  </div>
</template>
<script>
export default {
    data() {
      return {
        id:''
      }
    },
    created() {
      console.log(this.$route);
      this.id=this.$route.query.nav;
       this.$http.get('/api/w/website/findGoodsTypeList').then(res=>{
        console.log(res);
      })
    },
}
</script>
<style>

</style>


