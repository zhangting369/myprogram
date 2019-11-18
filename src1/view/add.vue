<template>
  <div>
   
      <input type="button" value="-" @click="jian(3)">
         {{num}}
      <input type="button" value="+" @click="add(2)">
      <!-- {{num2}} -->
      <h1> <font color="red">{{name}}</font> </h1>
      <h1> <font color="blue">{{count}}</font> </h1>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    // data() {
    //     return {
    //         num:this.$store.state.num
    //     }
    // },
    computed: {
        ...mapState({
            num(){
                return this.$store.state.num
            },
            name(){
                return this.$store.state.name
            },
        }),
        ...mapGetters({
            count:'count'
        })
       
        // num2(){
        //     return this.$store.getters.count;
        // },
    },
    methods: {
        ...mapActions({
            jiaadd:'Addaction'
        }),
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
