<template>
  <div class="box">
    <hearderindex />
    <div class="xiangqingye_content1">
      <div class="xiangqingye_content_top">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">选课中心&nbsp;></el-menu-item>
          <el-submenu index="2" class="xiangqingye_chuyi">
            <template slot="title">初一</template>
            <el-menu-item index="2-1">中班</el-menu-item>
            <el-menu-item index="2-2">大班</el-menu-item>
            <el-menu-item index="2-3">一年级</el-menu-item>
            <el-menu-item index="2-3">二年级</el-menu-item>
            <el-menu-item index="2-3">三年级</el-menu-item>
            <el-menu-item index="2-3">四年级</el-menu-item>
            <el-menu-item index="2-3">五年级</el-menu-item>
            <el-menu-item index="2-3">六年级</el-menu-item>
            <el-menu-item index="2-3">初一</el-menu-item>
            <el-menu-item index="2-3">初二</el-menu-item>
            <el-menu-item index="2-3">初三</el-menu-item>
            <el-menu-item index="2-3">高一</el-menu-item>
            <el-menu-item index="2-3">高二</el-menu-item>
            <el-menu-item index="2-3">高三</el-menu-item>
          </el-submenu>
          <el-submenu index="3" class="xiangqingye_chuyi">
            <template slot="title">同步课</template>
            <el-menu-item index="2-1">同步课</el-menu-item>
            <el-menu-item index="2-2">专题课</el-menu-item>
            <el-menu-item index="2-3">10分钟素养课</el-menu-item>
          </el-submenu>
          <el-submenu index="4" class="xiangqingye_chuyi">
            <template slot="title">大科学</template>
            <el-menu-item index="2-1">语文</el-menu-item>
            <el-menu-item index="2-2">数学</el-menu-item>
            <el-menu-item index="2-3">英语</el-menu-item>
            <el-menu-item index="2-3">大科学</el-menu-item>
            <el-menu-item index="2-3">编程</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="xiangqingye_content1_xia">
        <ul class="xiangqingye_nianji">
          <li class="xiangqingye_xueke1">学期</li>
          <li class="xiangqingye_xueke" @click="getdataby()">寒</li>
          <li class="xiangqingye_xueke">春</li>
        </ul>
        <ul class="xiangqingye_nianji">
          <li class="xiangqingye_xueke1">版本</li>
          <li class="xiangqingye_xueke">全国版</li>
        </ul>
        <ul class="xiangqingye_nianji">
          <li class="xiangqingye_xueke1">难度</li>
          <li class="xiangqingye_xueke2">目标（4星）</li>
        </ul>
        <ul class="xiangqingye_nianji">
          <li class="xiangqingye_xueke1">时间</li>
          <li class="xiangqingye_xueke">周五</li>
          <li class="xiangqingye_xueke">周六</li>
          <li class="xiangqingye_xueke">周日</li>
          <li class="xiangqingye_xueke">一期</li>
          <li class="xiangqingye_xueke">二期</li>
          <li class="xiangqingye_xueke">三期</li>
        </ul>
        <ul class="xiangqingye_nianji">
          <li class="xiangqingye_xueke1">时段</li>
          <li class="xiangqingye_xueke">上午</li>
          <li class="xiangqingye_xueke">下午</li>
          <li class="xiangqingye_xueke">晚上</li>
        </ul>
      </div>
    </div>

    <div class="xiangqingye_content2">
      <div class="xiangqingye_content2_top">
        <div>
          <p class="xiangqingye_zonghe">综合排序</p>
          <div class="xiangqingye_kecheng"></div>
          <p class="xiangqingye_kecheng">共14个课程</p>
          <el-divider content-position="left"></el-divider>
        </div>
      </div>
      <el-row v-for="(item,souty) in jiekou" :key="souty">
        <el-col class="xiangqingye_content2_middle" v-for="(o, index) in 3" :key="index">
          <el-card class="xiangqingye_conent2_write">
            <div class="xiangqingye_concent2_write2" @click="tianzhuan1(item.course_id)">
              <p class="xiangqingye_yuwen">{{item.course_subject}}</p>
              <p class="xiangqingye_yuedu">{{item.course_name}}</p>
              <div class="xiangqingye_nuobeier">诺贝尔奖得主Carl Wieman参与课程研发</div>
              <span class="xiangqingye_shijian">
                <p class="el-icon-time">一期：{{item.course_time}}-{{item.course_date}}每天16:00-18:10</p>
              </span>
              <span class="xiangqingye_nandu">
                难度：{{item.course_difficulty}}
                <p class="el-icon-star-on"></p>
                <p class="el-icon-star-on"></p>
                <p class="el-icon-star-on"></p>
                <p class="el-icon-star-on"></p>
              </span>
            </div>
            <div class="xiangqingye_laoshi1">
              <div class="xiangqingye_laoshi">
                <img :src="item.course_information" class="xiangqingye_image" />
                <p class="xiangqingye_shouke">授课</p>
                <p class="xiangqingye_shouke">杜春雨</p>
              </div>
              <div class="xiangqingye_laoshi">
                <img src="../assets/content2_1.png" class="xiangqingye_image" />
                <p class="xiangqingye_shouke">辅导</p>
                <p class="xiangqingye_shouke">网校辅导</p>
              </div>
              <div class="xiangqingye_minge1">
                <span class="xiangqingye_minge">
                  <p class="el-icon-pie-chart"></p>余20名额
                </span>
              </div>
            </div>
            <p class="xiangqingye_xiantiao"></p>
            <p class="xiangqingye_baoming"></p>
            <span class="xiangqingye_jiage1">
              <p class="xiangqingye_jiage">￥{{item.course_price}}</p>元
            </span>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <footerindex />
  </div>
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
      activeIndex: "1",
      activeIndex2: "1",
      valueword: "",
      jiekou:[],
      uid:"",

    };
  },
  mounted(){
    this.$http.get("/api/findAll5",{
    }).then(res=>{
      console.log(res);
      this.jiekou=res.data;     
    })
  },
  methods: {
    tianzhuan1(courseid){
      console.log(courseid)
      this.$router.push("/detail");
       localStorage.setItem("courseid",courseid);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  
 
};
</script>

<style>
.box {
  background-color: #f5f5f5;
  overflow: hidden;
}

.xiangqingye_content1,
.xiangqingye_content2 {
  width: 88%;
  overflow: hidden;
  margin:20px auto;
  /*background-color: white;*/
}

.xiangqingye_chuyi {
  color: #333;
  border-right: 1px solid #999;
  height: 30px;
  margin-top: 6px;
}

.xiangqingye_content_top .el-menu {
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
}

.el-menu--horizontal > .el-menu-item.is-active {
  /* border-bottom: 2px solid #409EFF; */
  border: none;
}

.el-menu--horizontal > .el-menu-item {
  height: 40px;
  line-height: 40px;
}

.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 30px;
  line-height: 30px;
  color: #333;
  font-size: 12px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: #f5f5f5;
}

.xiangqingye_content1_xia {
  width: 100%;
  /*height: 100px;*/
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
}

.xiangqingye_nianji {
  width: 1200px;
  height: 50px;
  /*background-color: red;*/
  margin: auto;
}

.xiangqingye_xueke,
.xiangqingye_xueke1,
.xiangqingye_xueke2 {
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

.xiangqingye_xueke1 {
  color: #aaa;
}

.xiangqingye_xueke2 {
  width: 80px;
}

li {
  list-style: none;
}

.xiangqingye_content2 {
  /*background-color: red;*/
  margin-top: 20px;
}

.xiangqingye_zonghe {
  width: 84px;
  height: 40px;
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 40px;
}

.xiangqingye_kecheng {
  display: inline;
  float: right;
  font-size: 12px;
  margin: -20px 10px;
}

.el-divider--horizontal {
  height: 2px;
  margin: 0;
}

.el-divider {
  background-color: #333;
}

.xiangqingye_content2_middle {
  width: 31%;
  margin-left: 18px;
  overflow: hidden;
  /*background-color: white;*/
  border-radius: 4px;
  margin-top: 10px;
}

.xiangqingye_yuwen {
  width: 34px;
  height: 20px;
  border: 1px solid #f13232;
  font-size: 14px;
  color: #f13232;
  text-align: center;
  display: inline;
}

.xiangqingye_yuedu {
  color: #111111;
  font-size: 18px;
  text-align: center;
  display: inline;
  margin-left: 4px;
}

.xiangqingye_nuobeier {
  font-size: 14px;
  color: #ff6e24;
  margin-top: 20px;
}

.xiangqingye_shijian {
  color: #999;
  font-size: 14px;
}

.el-icon-time {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  margin-left: 0px;
}

.xiangqingye_nandu {
  color: #999;
  font-size: 14px;
}

.el-icon-star-on {
  display: inline;
  font-size: 18px;
}

.xiangqingye_conent2_write:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05), -5px 0 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s linear;
  transform: translate3d(0, -4px, 0);
  border-top: 1px solid #f13232;
}

.xiangqingye_conent2_write {
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  /* background-color: aqua; */
}

.xiangqingye_concent2_write2 {
  width: 90%;
  margin: auto;
  /* background-color: #999; */
  margin-top: 16px;
}

.el-card__body {
  padding: 0px;
}

.xiangqingye_baoming {
  font-size: 14px;
  color: #999;
  margin-top: 40px;
  margin-left: 20px;
}

.xiangqingye_jiage {
  font-size: 24px;
  display: inline;
  color: #f13232;
}

.xiangqingye_jiage1 {
  color: #f13232;
  float: right;
  margin-top: -28px;
  margin-right: 20px;
}

.xiangqingye_laoshi1 {
  width: 250px;
  height: 106px;
  /*background-color: #f13232;*/
  margin: 44px 0px;
}

.xiangqingye_laoshi {
  width: 70px;
  height: 106px;
  margin-left: 16px;
  /*background-color: #f13232;*/
  float: left;
}

.xiangqingye_image {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
}

.xiangqingye_image img {
  width: 64px;
  height: 64px;
}

.xiangqingye_shouke {
  color: #666;
  font-size: 14px;
  text-align: center;
}

.xiangqingye_xiantiao {
  width: 90%;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: -22px;
}

.xiangqingye_minge1 {
  width: 74px;
  height: 22px;
  background-color: #fab9b9;
  border-radius: 14px;
  float: left;
  text-align: center;
}

.xiangqingye_minge {
  font-size: 12px;
  color: #f0773c;
}

.el-icon-pie-chart {
  display: inline;
  font-size: 14px;
}
</style>