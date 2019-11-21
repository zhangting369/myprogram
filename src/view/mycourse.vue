<template>
  <div>
    <headercenter/>
    <div class="neirong">
      <el-container>
        <el-aside width="250px" height="700px">
          <img src="../assets/img_6.png" alt />
          <div class="left">
            <div class="zhang" height="50px" font-size="28px">{{name}}</div>
            <div class="nianji" font-size="20px">{{nianji}}</div>
          </div>
          <div>
            <span class="srcc">
              <img src="../assets/gold.png" alt />
            </span>
            <span class="jin">金币</span>
            <span class="money">{{money}}</span>
          </div>
        </el-aside>
        <el-container class="right">
          <el-header>
            <span class="date">课程表</span>
            <span class="peas">请尽快下载客户端，网页版不再提供下载功能 跨版本程度换课</span>
            <span class="look">
              <i class="el-icon-date" width="30px" height="30px"></i> 查看全部课程表
            </span>
          </el-header>
          <el-main height="300px">
            <div class="monkey">
              <img src="../assets/monkey_null.png" alt />
            </div>
            <div class="non">未来7天内，没有直播课~</div>
          </el-main>
          <el-footer>我的课程</el-footer>
          <el-main height="300px">
            <div class="appoint">
              <img src="../assets/appoint.png" alt />
            </div>
            <div class="non">您有一次领取精品课的机会，马上领取吧！</div>
            <div class="ling">领取精品课</div>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <footerindex/>
  </div>
</template>
<script>
import footerindex from "../components/footer_index";
import headercenter from "../components/header_center";
export default {
  components: {
    headercenter
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      nianji: "一年级",
      name: "张三",
      bo: "../assets/monkey_null.png",
      imgas: "../assets/appoint.png",
      money: "0"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
a{
  text-decoration: none;
}
.zhang {
  font-size: 22px;
}
.left {
  height: 90px;
}
.neirong img {
  margin: 30px 20px;
}
.nianji {
  font-size: 18px;
}
.neirong {
  width: 95%;
  overflow: hidden;
  font-size: 20px;
  margin: 20px auto;
}
.srcc img {
  width: 33px;
  height: 37px;
  float: left;
  margin-top: -5px;
}
.jin {
  font-size: 17px;
  margin-left: -10px;
  float: left;
}
.money {
  float: right;
  font-size: 14px;
  margin-right: 35px;
}
.date {
  font-size: 18px;
}
.peas {
  color: red;
  font-size: 14px;
}
.monkey img {
  width: 150px;
  height: 150px;
}
.appoint img {
  width: 211px;
  height: 190px;
  margin-top: -20px;
}
.non {
  font-size: 20px;
}
.ling {
  width: 150px;
  height: 50px;
  background-color: red;
  color: white;
  line-height: 50px;
  margin: 40px auto 0px;
}
.look {
  float: right;
  color: rgb(192, 195, 195);
  font-size: 14px;
}
.el-header,
.el-footer {
  background-color: #fbfafa;
  color: #333;
  line-height: 60px;
}
.el-footer {
  background-color: white;
}
.right {
  margin-left: 30px;
}
.el-aside {
  background-color: #fbfafa;
  color: #333;
  height: 762px;
  text-align: center;
  line-height: 36px;
}

.el-main {
  background-color: #fbfafa;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>