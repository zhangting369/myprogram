<template>
  <div>
    <headercenter/>
    <div class="order_neirong">
      <el-container>
        <el-aside width="250px" height="700px">
          <div class="order_xin">账户中心</div>
            <div class="order_look">我的资料</div>
            <div class="order_look">我的密码</div>
            <div class="order_look">修改手机号</div>
            <div class="order_look">收货地址</div>
            <div class="order_look">第三方绑定</div>
          <div class="order_xin">订单中心</div>
            <div class="order_look">我的订单</div>
            <div class="order_look order_red">订单发票</div>
        </el-aside>
        <el-container class="right">
          <el-header>
            <span>我的订单</span>
            <span class="order_title">
              <img src="../assets/img_9.png" />
              <span class="order_fei">退费说明</span>
            </span>
          </el-header>
          <el-main height="300px">
            <div :class="n==1?class1:class2" @click="btn(1)">全部订单    {{quan}}</div>
            <div :class="n==2?class1:class2" @click="btn(2)">已支付     {{yi}}</div>
            <div :class="n==3?class1:class2" @click="btn(3)">未完成     {{wei}}</div>
            <div :class="n==4?class1:class2" @click="btn(4)">待支付     {{qu}}</div>
            <div :class="n==5?class1:class2" @click="btn(5)">已取消     {{dai}}</div>
            <div v-if="n==1" class="twomenu">
              <div class="order_xiang">
                <span>订单详情</span><span>总计</span><span>状态及操作</span>
              </div>
              <div class="order_dan">
                <span>{{dan}}</span><span>{{hao}}</span>
              </div>
              <div class="order_jiaocheng">
                <div class="order_left">
                  <div class="order_kong">
                    <div class="order_shang">
                     <div class="order_math">{{math}}</div><div class="order_one">【寒】初一数学直播勤学班（全国人教）</div><div class="order_mouy">￥{{monn}}</div><div class="order_chong">重新选课</div>
                  </div>
                  <div class="order_stage">{{stage}}</div>
                  <div class="order_teacher">{{teacher}}</div>
                  </div>
                  <div class="order_fu">
                    <div class="order_fl">福利</div><div class="order_li">{{fuli}}</div>
                  </div>
                </div>
                <div class="order_moddle">
                    ￥{{moddder}}
                </div>
                <div class="order_right">
                  已取消
                </div>
              </div>
               <div class="order_jiaocheng">
                <div class="order_left">
                  <div class="order_kong">
                    <div class="order_shang">
                     <div class="order_lian">联报</div><div class="order_math">{{math}}</div><div class="order_one">【寒】初一数学直播勤学班（全国人教）</div><div class="order_mouy">￥{{monn}}</div><div class="order_chong">重新选课</div>
                  </div>
                  <div class="order_stage">{{stage}}</div>
                  <div class="order_teacher">{{teacher}}</div>
                  </div>
                  <div class="order_fu">
                    <div class="order_fl">福利</div><div class="order_li">{{fuli}}</div>
                  </div>
                </div>
                <div class="order_moddle">
                    ￥{{moddder}}
                </div>
                <div class="order_right">
                  已取消
                </div>
              </div>
            </div>
            <div v-if="n==2" class="twomenu"><img src="../assets/monkey_null.png" alt="">
           <div class="order_zan">暂时没有该类型的订单</div>
            </div>
            <div v-if="n==3" class="twomenu" style="margin-top:30px;"><img src="../assets/monkey_null.png" alt="">
           <div class="order_zan">暂时没有该类型的订单</div></div>
            <div v-if="n==4" class="twomenu"><img src="../assets/monkey_null.png" alt="">
           <div class="order_zan">暂时没有该类型的订单</div></div>
            <div v-if="n==5" class="twomenu">
            <div class="order_xiang">
                <span>订单详情</span><span>总计</span><span>状态及操作</span>
              </div>
              <div class="order_dan">
                <span>{{dan}}</span><span>{{hao}}</span>
              </div>
              <div class="order_jiaocheng">
                <div class="order_left">
                  <div class="order_kong">
                    <div class="order_shang">
                     <div class="order_math">{{math}}</div><div class="order_one">【寒】初一数学直播勤学班（全国人教）</div><div class="order_mouy">￥{{monn}}</div><div class="order_chong">重新选课</div>
                  </div>
                  <div class="order_stage">{{stage}}</div>
                  <div class="order_teacher">{{teacher}}</div>
                  </div>
                  <div class="order_fu">
                    <div class="order_fl">福利</div><div class="order_li">{{fuli}}</div>
                  </div>
                </div>
                <div class="order_moddle">
                    ￥{{moddder}}
                </div>
                <div class="order_right">
                  已取消
                </div>
              </div>
               <div class="order_jiaocheng">
                <div class="order_left">
                  <div class="order_kong">
                    <div class="order_shang">
                     <div class="order_lian">联报</div><div class="order_math">{{math}}</div><div class="order_one">【寒】初一数学直播勤学班（全国人教）</div><div class="order_mouy">￥{{monn}}</div><div class="order_chong">重新选课</div>
                  </div>
                  <div class="order_stage">{{stage}}</div>
                  <div class="order_teacher">{{teacher}}</div>
                  </div>
                  <div class="order_fu">
                    <div class="order_fl">福利</div><div class="order_li">{{fuli}}</div>
                  </div>
                </div>
                <div class="order_moddle">
                    ￥{{moddder}}
                </div>
                <div class="order_right">
                  已取消
                </div>
              </div>                            
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <footerindex/>
  </div>
</template>
<script>
import headercenter from "../components/header_center";
import footerindex from "../components/footer_index";
export default {
  components: {
    headercenter,
    footerindex
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      class1: "choose CActive",
      class2: "choose",
      n: 1,
      quan:"1",
      yi:"0",
      wei:"0",
      dai:"1",
      qu:"0",
      dan:"2019-11-20 17:24:33 ",
      hao:"订单号：2019112017243327612280",
      math:"数学",
      monn:"700",
      stage:"三期：2月6日-2月12日每天18:50-21:00 · 共7讲",
      teacher:"授课： 朱韬",
      fuli:"教材福利 x 7",
      moddder:"2220.00",
      list:[]
    };
  },
  mounted() {
    this.$http.get("/api/findAll").then(res=>{
      console.log(res)
      this.list=res.data
      for(var i=0;i<res.data.length;i++){
        if(res.data[i].user_email==123){
          console.log(res.data[i].user_id)
        }
      }
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    btn(item) {
      this.n = item;
    }
  }
};
</script>
<style>
a{
  text-decoration: none;
}
.order_imgs img {
  width: 155px;
  height: 70px;
  margin-left: 70px;
}
.left {
  height: 90px;
}
.order_neirong img {
  margin: 30px 20px;
}
.order_neirong {
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
.order_fei {
  width: 50px;
  height: 30px;
}
.order_look {
  float: right;
  color: rgb(192, 195, 195);
  font-size: 14px;
  margin: 3px 20px 20px 20px;
}
.order_title {
  float: right;
  color: rgb(192, 195, 195);
  font-size: 14px;
  margin: 3px 20px 20px 20px;
}
.order_title img {
  width: 16px;
  height: 16px;
  float: left;
  margin-top: 21px;
  margin-right: 5px
}
.el-header,
.el-footer {
  background-color: #fbfafa;
  color: #333;
  line-height: 60px;
}
.el-header {
  border-bottom: 1px solid rgb(175, 175, 175);
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
.choose {
  width: 77px;
    height: 33px;
    text-align: center;
    line-height: 39px;
    float: left;
    font-size: 12px;
}
.CActive {
  border-bottom:2px solid red;
  color: red;
}
.twomenu {
  clear: both;
  width: 955px;
  height: 605px;
  margin-top: 50px;
}
.order_xiang{
  height: 40px;
  line-height: 40px;
  padding-left: 250px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  border: 1px solid  rgb(160, 160, 160);
  color: rgb(75, 75, 75);
}
.order_dan{
  line-height: 40px;
 background-color: #f5f5f5;
 font-size: 14px;
 color: rgb(75, 75, 75);
     margin-top: 35px;
     border-left: 1px solid #bbb;
     border-right: 1px solid #bbb;
     border-top: 1px solid #bbb;
}
.order_dan span{
  margin-left: -400px;
}
.order_jiaocheng{
  width: 953px;
  overflow: hidden;
 
  border: 1px solid #bbb;
}
.order_left{
  width: 600px;
  overflow: hidden;
  float: left;
   padding-left: 30px;
  padding-top: 30px;
  border-right: 1px solid #bbb;
}
.order_shang{
  font-size: 12px;

}
.order_math{
  border: 1px solid red;
  border-radius: 4px;
  float: left;
  margin-left: 5px;
}
.order_lian{
  width: 32px;
  height: 20px;
  border-radius: 4px;
  float: left;
  color: white;
  background-color: red;
  line-height: 20px;
}
.order_one{
  float: left;

}
.order_mouy{
  float: left;
  }
.order_chong{
  color: red;
}

.order_stage{
  width: 299px;
  color: #8a8a8a;
  clear: both;
  margin-left: -3px;
    margin-top: 14px;
    font-size: 14px;
}
.order_teacher{
  width: 76px;
  font-size: 14px;
  margin-top: 10px;
}
.order_fu{
  height: 29px;
  width: 600px;
  border-top: 1px solid #bbb;
  font-size: 14px;
  margin-top: 8px;
  margin-left: -31px;
     padding-left: 30px;
    padding-top: 10px;
}
.order_fl{
   border: 1px solid red;
  border-radius: 4px;
  float: left;
}
.order_li{
  float: left;
  margin-left: 10px;
}
.order_moddle,.order_right{
  width: 160px;
  height: 129px;
  font-size: 14px;
  float: left;
  text-align: center;
      padding-top: 30px;
}
.order_moddle{
   border-right: 1px solid #bbb;
}
.order_xin{
  width: 100%;
  height: 50px;
  float: left;
  font-size: 20px;
  margin-top: 33px;
}
.order_look{
  width: 80%;
  height: 8px;
  float: left;
}

</style>