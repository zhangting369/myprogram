<template>
  <div class="top_nav">
    <div class="header_top">
      <div class="top_content">
        <img src="../assets/address.png" alt class="address" />
        <div class="top_words">陕西 [为你推荐该地区的课程]</div>
        <div class="top_right">
          <a href>教师资格证公示</a>|
          <a href>客户端下载</a>|
          <a href="/order">我的订单</a>|
          <a href>设置</a>|
          <a href>立即登录</a>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="navig">
        <div class="logo">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="navigation">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <a href="/index">选课中心</a>
            </el-menu-item>
            <el-menu-item index="2">免费讲座</el-menu-item>
            <el-menu-item index="3">
              <a href="/mycourse" target="_blank">学习中心</a>
            </el-menu-item>
            <el-menu-item index="5">一对一</el-menu-item>
            <el-submenu index="5">
              <template slot="title" class="more">发现更多</template>
              <el-menu-item index="5-1">编辑社区</el-menu-item>
              <el-menu-item index="5-2">逛书城</el-menu-item>
              <el-menu-item index="5-3">学社区</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="search">
          <input type="text" v-model="valueword" />
          <i class="el-icon-search"></i>
          <div class="values">
              <div class="val_item" @click="getvalue()">学而思编程</div>
              <!-- vue父子传值之props -->
            <a href="/xiangqingye">
              <div class="val_item1" @click="getvalue1()">语文</div>
            </a>
            <a href="/xiangqingye">
              <div class="val_item2" @click="getvalue2()">数学</div>
            </a>
          </div>
        </div>
        <div class="goodsche" @click="goodsche()">
          <i class="el-icon-shopping-cart-1"></i>
          购物车
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      valueword: ""
    };
  },
  methods: {
    goodsche(){
      this.$router.push("/goodsche")
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getvalue() {
      this.$router.push("/xiangqingye?valueword="+$(".val_item").text())
    },
    getvalue1() {
      console.log($(".val_item1").text());
      this.valueword = $(".val_item1").text();
    },
    getvalue2() {
      console.log($(".val_item2").text());
      this.valueword = $(".val_item2").text();
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
}
.top_nav {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
}
.goodsche {
  height: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 30px;
  float: right;
  font-size: 12px;
  color: #333;
  line-height: 30px;
  padding: 0 16px;
  margin-top: 34px;
  cursor: pointer;
}
.goodsche:hover {
  background-color: rgba(241, 50, 50, 0.1);
  color: #f13232;
}
.goodsche i {
  font-size: 18px;
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
  width: 380px;
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
.nav {
  width: 100%;
  height: 100px;
}
.logo {
  width: 170px;
  height: 50px;
  float: left;
  margin-top: 25px;
}
.logo img {
  width: 170px;
  height: 50px;
}
.navigation {
  width: 530px;
  height: 100px;
  float: left;
  margin-left: 20px;
}
.navig {
  width: 90%;
  margin: auto;
}
.navigation .el-menu {
  margin-top: 20px;
}
.navigation .el-menu-item {
  font-size: 16px;
}
.navigation .el-submenu__title {
  font-size: 16px;
}
.navigation .el-submenu .template {
  font-size: 14px;
}
.navigation .el-menu.el-menu--horizontal {
  border-bottom: 0;
  color: #e02727;
  font-size: 16px;
}
.navigation .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0;
  color: #e02727;
  font-size: 16px;
}
.navigation .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #e02727;
}
.navigation .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 0;
}
.navigation .el-submenu .is-active .el-submenu__title {
  border-bottom-color: #fff;
}
.search {
  width: 320px;
  height: 32px;
  border: 1px solid #f0f0f0;
  border-radius: 32px;
  float: left;
  margin: 34px;
  overflow: hidden;
  text-align: center;
  line-height: 32px;
  position: relative;
}
.search input {
  width: 250px;
  height: 30px;
  outline: none;
  margin: auto;
  margin-left: 20px;
  border: none;
}
.search i {
  margin-left: 10px;
  font-size: 18px;
}
.values {
  width: 210px;
  height: 30px;
  position: absolute;
  margin-left: 70px;
  margin-top: -33px;
  font-size: 14px;
  padding: 5px;
}
.val_item,
.val_item1,
.val_item2 {
  height: 20px;
  padding: 0 10px;
  margin-left: 10px;
  border-radius: 20px;
  float: left;
  background-color: #f5f5f5;
  color: #afafaf;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
}
.val_item:hover,
.val_item1:hover,
.val_item2:hover {
  background-color: #333;
  color: #fff;
  cursor: pointer;
}
</style>