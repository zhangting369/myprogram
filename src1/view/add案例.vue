<template>
  <div>
   
      <input type="button" value="-" @click="jian(3)">
         {{num}}
      <input type="button" value="+" @click="add(2)">
      {{num2}}
  </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         num:this.$store.state.num
    //     }
    // },
    computed: {
        num(){
            return this.$store.state.num
        },
        num2(){
            return this.$store.getters.count;
        },
    },
    methods: {
        add(num){
            // this.num+=5;
            // this.$store.commit("increment",{n:num,name:'wangxiaoer'})
            // this.$store.commit({
            //     type:'increment',
            //     n:num,
            //     name:'wangxiaoer'
            // });
            this.$store.dispatch('Addaction')
        },
        jian(num){
            // this.num-=5;
            this.$store.commit("mincrement",num)
            
        }
    },
}
</script>

<style>

</style>
