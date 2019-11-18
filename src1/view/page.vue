<template>
  <div>
      <page/>
      <div class="content">
            我是首页
      </div>
      
  </div>
</template>

<script>
import page from '../components/about'
export default {
    components:{
        page,
    }
}
</script>

<style>
.content{
    width: 90%;
    height: 500px;
    background-color: yellowgreen;
    margin: auto;
}
</style>
