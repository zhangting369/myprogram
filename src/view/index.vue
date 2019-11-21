<template>
 
  <div class="tou">
    <hearderindex />
    <div class="index_banner">
      <el-carousel indicator-position="none" :autoplay="false">
        <el-carousel-item v-for="(item,i) in urls" :key="i">
          <img :src="item.imgurl" class="index_picture" />
        </el-carousel-item>
      </el-carousel>
      <div class="index_banner_top">
        <ul>
          <li class="index_banner_top_zi">GES大会</li>
          <li class="index_banner_top_zi">诺奖爷爷邀你游学啦</li>
          <li class="index_banner_top_zi">初一寒假攻略</li>
          <li class="index_banner_top_zi">一听就喜欢的唐诗课</li>
          <li class="index_banner_top_zi">多科学习有优惠</li>
        </ul>
      </div>
      <div class="index_banner_xia">
        <ul class="index_nianji">
          <li class="index_xueke1">年纪</li>
          <li class="index_xueke">中班</li>
          <li class="index_xueke">大班</li>
          <li class="index_xueke">一年级</li>
          <li class="index_xueke">二年级</li>
          <li class="index_xueke">三年级</li>
          <li class="index_xueke">四年级</li>
          <li class="index_xueke">五年级</li>
          <li class="index_xueke">六年级</li>
          <li class="index_xueke">初一</li>
          <li class="index_xueke">初二</li>
          <li class="index_xueke">初三</li>
          <li class="index_xueke">高一</li>
          <li class="index_xueke">高二</li>
          <li class="index_xueke">高三</li>
        </ul>
        <ul class="index_nianji">
          <li class="index_xueke1">学科</li>
          <li class="index_xueke">全部</li>
          <li class="index_xueke">语文</li>
          <li class="index_xueke">数学</li>
          <li class="index_xueke">英语</li>
          <li class="index_xueke">编程</li>
          <li class="index_xueke">大科学</li>
          <li class="index_xueke">素养</li>
        </ul>
      </div>
    </div>
    <div class="index_clean"></div>
    <!-- 同步课 -->
    <div class="index_content1">
      <div class="index_content1_top">
        <div class="index_content1_write">
          <p class="index_content1_p1">同步课</p>
          <p class="index_content1_p2">直播授课/</p>
          <p class="index_content1_p2">课堂巩固1对1批改/</p>
          <p class="index_content1_p2">及时答疑/</p>
          <p class="index_content1_p2">无限回放/</p>
        </div>
      </div>
      <a href="/xiangqingye">
      <div class="index_content1_middle">
        <div class="index_content1_middle1">
          <div class="index_content1_tu">
            <img src="../assets/content1_1.png" />
          </div>
          <div class="index_content1_zi">
            <div class="index_wuli">
              <p class="index_wuli1">物理</p>
              <p class="index_chuyi">初一大科学直播班专区</p>
            </div>
            <p class="index_baoming">10000+人已报名</p>
            <span class="index_jiage1">
              <p class="index_jiage">￥700元</p>起
            </span>
          </div>
        </div>
      </div></a>
    </div>

    <!-- 专题课 -->

    <el-row class="index_content2">
      <div class="index_content1_top">
        <div class="index_content1_write">
          <p class="index_content1_p1">专题课</p>
        </div>
      </div>
      <el-col class="index_content2_middle" v-for="(o, index) in 3" :key="index">
        <el-card class="index_conent2_write" >
          <div class="index_concent2_write2">
            <p class="index_yuwen">语文</p>
            <p class="index_yuedu">3节课培养阅读古诗词的能力</p>
            <span class="index_shijian">
              <p class="el-icon-time">11月29日—12月1日每天19：00—20：00</p>
            </span>
          </div>
          <div class="index_laoshi">
            <img src="../assets/content2_1.png" class="index_image" />
            <p class="index_shouke">授课</p>
            <p class="index_shouke">钟雅欣等</p>
          </div>
          <p class="index_xiantiao"></p>
          <p class="index_baoming jiang">共3讲</p>
          <span class="index_jiage1 money">
            <p class="index_jiage">￥59</p>元
          </span>
          
        </el-card>
      </el-col>
    </el-row>

    <!-- 10分钟素养课 -->
    <el-row class="index_content3">
      <div class="index_content1_top">
        <div class="index_content1_write">
          <p class="index_content1_p1">10分钟素养课</p>
        </div>
      </div>
      <el-col class="index_content3_middle" v-for="(o, index) in 4" :key="index">
        <el-card class="index_conent2_write">
          <div class="index_content1_tu">
            <img src="../assets/content3_1.jpg" />
          </div>
          <div class="index_concent2_write2">
            <p class="index_lubo">录播</p>
            <p class="index_yuwen">语文</p>
            <p class="index_litian">李天飞精讲《三国演义》：“一学就通”的名著阅读法</p>
            <div class="index_jiangshi">讲师：李天飞</div>
            <p class="index_baoming jiang jiang1">共3讲</p>
            <span class="index_jiage1 money money1">
              <p class="index_jiage">￥59</p>元
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  <footerindex /></div>
  
</template>

<script>
import hearderindex from "../components/hearder_index";
import footerindex from "../components/footer_index";
export default {
   components: {
    hearderindex,
    footerindex
  },
  data() {
    return {
      urls: [
        { imgurl: require("../assets/banner1.jpg") },
        { imgurl: require("../assets/banner2.jpg") },
        { imgurl: require("../assets/banner3.jpg") },
        { imgurl: require("../assets/banner4.jpg") },
        { imgurl: require("../assets/banner5.jpg") }
      ]
    };
  }
};
</script>

<style>
.index_banner_xia{
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 2px 2px 5px rgba(0,0,0,.05);
}
.el-carousel--horizontal{
  overflow-x:inherit;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}


.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.tou {
  background-color: #f5f5f5;
}
.index_banner {
  width: 100%;
  height: 480px;
  background-color: aqua;
}
.el-carousel__container {
  height: 380px;
}
.index_picture {
  width: 100%;
  height: 380px;
}
.index_banner_top {
  width: 200px;
  height: 240px;
  background-color: white;
  position: relative;
  z-index: 2;
  top: -310px;
  right: 100px;
  float: right;
}
ul {
  list-style: none;
  /* width: 200px;
  height: 240px; */
}
.index_banner_top_zi {
  width: 200px;
  height: 48px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  line-height: 48px;
  font-size: 14px;
  color: #000000;
}
.index_banner_xia {
  width: 100%;
  height: 100px;
  background-color: rgb(255, 255, 255);
}
.index_nianji {
  width: 1200px;
  height: 50px;
  /*background-color: red;*/
  margin: auto;
}
.index_xueke,
.index_xueke1 {
  width: 60px;
  height: 50px;
  /*background-color: aqua;*/
  float: left;
  text-align: center;
  line-height: 50px;
  margin-left: 6px;
  color: #333;
  font-size: 14px;
}
.index_xueke1 {
  color: #aaa;
}
/* .clean {
  clear: both;
} */

.index_content1,
.index_content2,
.index_content3 {
  width: 88%;
  /* height: 700px; */
  /* overflow: hidden; */
  /* background-color: red; */
  margin: auto;
}
.index_content1_top {
  width: 100%;
  height: 80px;
  /* background-color: rgb(219, 169, 69); */
}
.index_content1_write {
  width: 80%;
  height: 80px;
  /* background-color: rgb(125, 121, 141); */
  line-height: 80px;
}
.index_content1_p1 {
  font-size: 30px;
  color: #333;
  display: inline;
}
.index_content1_p2 {
  font-size: 14px;
  color: #999;
  display: inline;
  margin-left: 10px;
}
.index_content1_middle {
  width: 100%;
  /* overflow: hidden; */
  /* height: 400px; */
  /* background-color: #f5f5f5; */
}

.index_content1_middle1:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05), -5px 0 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s linear;
  transform: translate3d(0, -4px, 0);
}
.index_conent2_write:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05), -5px 0 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s linear;
  transform: translate3d(0, -4px, 0);
  border-top:1px solid #f13232;
}
.index_content1_middle1,
.index_content2_middle {
  width: 23%;
  overflow: hidden;
  background-color: white;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 20px;
}
.index_content1_tu {
  width: 100%;
}

.index_content1_tu img {
  width: 100%;
  height: 146px;
  border-radius: 4px 4px 0px 0px;
}
.index_content1_zi {
  width: 90%;
  margin: auto;
  /* background-color: bisque; */
}
.index_wuli {
  width: 90%;
  height: 30px;
  /* background-color: aqua; */
  margin-top: 10px;
}
.index_wuli1,
.index_yuwen {
  width: 34px;
  height: 20px;
  border: 1px solid #f13232;
  font-size: 14px;
  color: #f13232;
  text-align: center;
  display: inline;
}
.index_chuyi,
.index_yuedu {
  font-size: 16px;
  color: #111;
  text-align: center;
  display: inline;
  margin-left: 4px;
}
.index_baoming {
  font-size: 14px;
  color: #999;
  margin-top: 50px;
}
.index_jiage {
  font-size: 24px;
  display: inline;
  color: #f13232;
}
.index_jiage1 {
  color: #f13232;
  float: right;
  margin-top: -24px;
}
.index_content2_middle {
  width: 31%;
  margin-left: 18px;
}
.index_conent2_write {
  width: 100%;
  /* height: 460px; */
  height: 354px;
  overflow: hidden;
  /* background-color: aqua; */
}
.index_concent2_write2 {
  width: 90%;
  margin: auto;
  /* background-color: #999; */
  margin-top: 16px;
}

.el-card__body {
  padding: 0px;
}

.index_yuedu {
  color: #111111;
  font-size: 18px;
}
.el-icon-time {
  display: block;
  margin-top: 46px;
}

.index_shijian {
  color: #999;
  font-size: 14px;
}
.index_laoshi {
  width: 70px;
  height: 106px;
  /* background-color: #f13232; */
  margin: 44px 12px;
}
.index_image {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
}
.index_image img {
  width: 64px;
  height: 64px;
}
.index_shouke {
  color: #666;
  font-size: 14px;
  text-align: center;
}
.index_xiantiao {
  width: 90%;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: -22px;
}
.index_content2_jiage {
  width: 90%;
  height: 40px;
  /* background-color: #f1f1f1; */
}
.jiang {
  margin: 50px 16px;
}
.money {
  margin: -78px 20px;
}
.index_content3_middle {
  width: 23%;
  margin-left: 18px;
  overflow: hidden;
      height: 300px;

}
.index_lubo {
  width: 70px;
  height: 30px;
  background-color: #f13232;
  font-size: 14px;
  color: white;
  text-align: center;
  display: inline;
}
.index_litian {
  color: #111;
  font-size: 16px;
  display: inline;
}
.index_jiangshi {
  width: 100px;
  height: 24px;
  /* background-color: #f13232; */
  margin: 28px 0px;
  color: #999;
  font-size: 14px;
}
.jiang1 {
  margin: -18px 0px;
}

.money1 {
  margin: -10px 0px;
}
</style>