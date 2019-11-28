<template>
    <div>
            <div class="header_top">
      <div class="top_content">
        <img src="../assets/address.png" alt class="address" />
        <div class="top_words">陕西 [为你推荐该地区的课程]</div>
        <div class="top_right">
          <a href="/index">网站首页</a>|
          <a href>教师资格证公示</a>|
          <a href>客户端下载</a>|
          <a href>我的订单</a>|
          <a href>设置</a>|
          <a href>{{uname}}</a>
        </div>
      </div>
    </div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f13232"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="imgs">
        <img src="../assets/logo_pro.png" alt />
      </el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">错题本</el-menu-item>
        <el-menu-item index="2-2">试卷集</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="#" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
    </div>
</template>
<script>
export default {
    data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      uname:"登录管理"
    }
    },
    mounted(){
       this.uid=localStorage.getItem("uid");
    this.getname();
    },
    methods: {
       getname(){
      this.$http.get("/upi//userinfo/"+this.uid).then(res=>{
        console.log(res)
        this.uname=res.data[0].uname;
      })
    },
    handleSelect(key, keyPath) {
    console.log(key, keyPath);
    }, 
    }
}
</script>
<style>
.imgs img {
  width: 155px;
  height: 70px;
  margin-left: 70px;
}
    .header_top {
  width: 100%;
  height: 30px;
  background-color: #333;
}
.top_content {
  width: 90%;
  height: 30px;
  margin: auto;
}
.address {
  width: 16px;
  height: 16px;
  margin: 7px;
  float: left;
}
.top_words {
  font-size: 12px;
  color: #afafaf;
  float: left;
  line-height: 30px;
}
.top_right {
  height: 30px;
  float: right;
  color: #d0d0d0;
  font-size: 12px;
}
.top_right a {
  line-height: 30px;
  text-decoration: none;
  padding: 0 8px;
  color: #d0d0d0;
}
</style>