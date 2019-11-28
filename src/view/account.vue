<template>
  <div class="account">
    <div class="account_nav">
      <div class="account_bann">
        <img src="../assets/logo_icon.png" alt />
        <div class="account_logo">结算中心</div>
        <el-steps :active="active" finish-status="success">
          <el-step title="填写并确认订单"></el-step>
          <el-step title="支付订单"></el-step>
          <el-step title="订单完成"></el-step>
        </el-steps>
      </div>
      <el-container>
        <el-header>
          <div class="account_tiao">
            <span style="float:left;font-size:18px;">请选择收货地址</span>
            <span
              style="float:left;color:red;font-size:14px;"
            >（建议您填写常用地址，以便收货。配套教材最迟开课前7天发货，请您耐心等待!）</span>
          </div>
        </el-header>
        <el-main>
          <div class="account_moddle">
            <div class="account_one">
              <span class="account_yesg">收货人</span>
              <input
                style="float:left;margin:12px 10px;width:200px;height:25px;"
                type="text"
                name
                id
              />
              <span class="account_yesg1">请准确填写真实姓名</span>
            </div>
            <div class="account_one">
              <span class="account_yesg">所在地区</span>
              <el-cascader @change="handleChange" :separator="' '"></el-cascader>
            </div>
            <div class="account_one">
              <span class="account_yesg">详细地址</span>
              <input
                style="float:left;margin:12px 10px;width:200px;height:25px;"
                type="text"
                name
                id
              />
              <span class="account_yesg1">请填写详细路名及门牌号</span>
            </div>
            <div class="account_one">
              <span class="account_yesg">手机号码</span>
              <input
                style="float:left;margin:12px 10px;width:200px;height:25px;"
                type="text"
                name
                id
              />
              <span class="account_yesg1">用于接收发货通知短信和送货前通知</span>
            </div>
            <div class="account_one">
              <el-button class="account_bao" @click="next">保存收货人信息</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
       <div class="account_foot">
        <div class="account_modderle">
            <div class="account_left">
                <span style="color:red;">注:如您需开具发票，支付成功后，请在订单管理-我的发票处进行申请。</span>
                <span>若商品申请退费时教辅已签收，需根据签收的教辅按分类扣除工本费。</span>
            </div>
            <div class="account_right" @click="next">提交订单</div>
        </div>
      </div>
     
      <!-- 第二页 -->
<div class="account_zhi">
    <div class="account_ertop">
        <div><img style="width:100px;float:left;margin:20px 30px;" src="../assets/img_10.png" alt=""></div>
        <div class="account_erding">
            <span>订单提交成功，请您尽快付款！ 订单号：2019112216554867662280</span>
            <span style="color:red;">订单将为你保留 08:17 , 请抓紧时间支付</span>
        </div>
        <div class="account_fu"><span style="float:left;">应付金额</span><span style="float:left;color:red;">{{accountmony}}</span></div>
    </div>
    <div class="account_zhifu">
      <div :class="n==1?class1:class2" @click="btn(1)">支付宝支付</div>
     <div v-if="n==1" class="twomenu">
          <div class="account_weixin"><div class="account_yy" style="float:left;width:30px;height:30px;matgin-right:10px;"><img src="../assets/zhifubao.png" alt=""></div>
          <div style="float:left;margin-left:40px;font-size: 26px;font-weight: bold;">支付宝支付</div><div style="float:left;margin-left:70px;">使用微信APP扫码支付，请使用5.0以上版本微信</div>
          </div>
          <img src="../assets/createQrCode.png" alt="">
      </div>
      <div v-if="n==2" class="twomenu">
          我是注册页面
      </div>
    </div>
</div>     
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      accountmony:"2222",
      class1:'choose CActive',
            class2:'choose',            
            n:1,
      // selectedOptions: [],//存放默认值
      // options:options   //存放城市数据
    };

  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      $(".account_zhi").css("display","block");
      $(".el-container.is-vertical").css("display","none");
      $(".account_foot").css("display","none");
    },
    handleChange(value) {
      console.log(value);
    },
    btn(item){
            this.n=item;
        }
  }
};
</script>
<style>
.account_zhi{
   display: none; 
}
.account_nav {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  padding-top: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
}
.account_bann {
  width: 90%;
  height: 80px;
  margin: 10px auto;
}
.account_bann img {
  width: 150px;
  height: 60px;
  float: left;
}
.account_logo {
  float: left;
  border-left: 2px solid #dadada;
  height: 40px;
  line-height: 40px;
  margin: 14px 0 0 23px;
  padding-left: 23px;
  font-size: 28px;
  color: #333;
}
.el-steps--horizontal {
  width: 525px;
  float: right;
  margin-top: 16px;
}
.el-step__title.is-process {
  color: red;
}
.el-header,
.el-footer {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: center;
  line-height: 70px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
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
.el-container.is-vertical {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  width: 91%;
  margin: 68px auto;
}
.account_tiao {
  width: 95%;
  height: 59px;
  margin: 0px auto;
  border-bottom: 1px solid rgb(134, 134, 134);
}
.account_moddle {
  width: 95%;
  height: 300px;
  background-color: #fcfcfc;
  margin: 9px auto;
  padding-top: 10px;
}
.account_one {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-top: 3px;
}
.account_yesg {
  width: 100px;
  float: left;
}
.account_yesg1 {
  float: left;
  color: rgb(122, 122, 122);
}
.el-cascader {
  float: left;
  margin: 4px 0px 0px 10px;
  width: 200px;
}

.el-input__inner {
  height: 30px;
}
.account_bao {
  width: 142px;
  height: 43px;
  float: left;
  margin: 2px 0px 0px 135px;
  background-color: red;
  outline: none;
  border: none;
  color: white;
}
.account_foot {
  width: 100%;
  height: 54px;
  background-color: #ffffff;
  padding-top: 10px;
  font-size: 14px;
  box-shadow: 5px -4px 5px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
}
.account_modderle {
  width: 85%;
  height: 54px;
  margin: 0px auto;
}
.account_left{
    width: 460px;
    float: left;
    height: 54px;
}
.account_right{
    float: right;
    width: 100px;
    height: 40px;
    background-color: red;
    color: white;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
}
.account_zhi{
    width: 85%;
    overflow: hidden;
    margin: 20px auto;
}
.account_ertop{
    width: 95%;
    height: 150px;
    margin-top: 45px;
    padding: 20px 30px;
    box-shadow:0px 0px 2px rgb(193, 193, 193);
}
.account_ertop span{
    float: left;
    margin: 8px 20px;
}
.account_erding{
    width: 550px;
    height: 150px;
    float: left;
        margin: 21px 90px;
}
.account_fu{
  float: left;
  width: 198px;
  height: 50px;
  margin-top: 32px;
    font-size: 25px;
}
.account_zhifu{
   width: 95%;
    overflow: hidden;
    margin-top: 45px;
    padding: 20px 30px;
    box-shadow:0px 0px 2px rgb(193, 193, 193);
}
.choose{
    width: 140px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-left: 20px;
    float: left;
}
.CActive{
border-bottom: 2px solid red;
color: red;
}
.twomenu{
    clear: both;
    width: 95%;
    height: 200px;
    margin-top: 100px;
    text-align: center;
    line-height: 30px;
}
.account_weixin{
  width: 425px;
  overflow: hidden;
  margin: 0px auto;

}
.account_yy img{
  width: 50px;
  height: 50px;
}
</style>