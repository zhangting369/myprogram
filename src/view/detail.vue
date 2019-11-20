<template>
  <div class="content_all">
    <hearderindex />
    <div class="content">
      <div class="yetou">
        <div>
          <a href class>选课中心</a>
        </div>
        <div class="el-icon-arrow-right"></div>
        <div>
          <a href class>同步课列表</a>
        </div>
        <div class="el-icon-arrow-right"></div>
        <div>【寒假目标985班】高一化学直播班（旧教材必修2）</div>
      </div>
      <div class="detail">
        <div class="xiangqing">
          <div class="detail_se">
            <div class="detail_words">
              <span class="course">化学</span>
              <span class="goal">【寒假目标985班】高一化学直播班（旧教材必修2）</span>
            </div>
            <p class="detail_info">一期：1月17日-1月23日每天07:30-09:45</p>
            <p class="detail_info">
              难度：
              <img src="../assets/star.png" alt />
              <img src="../assets/star.png" alt />
              <img src="../assets/star.png" alt />
            </p>
            <p class="detail_info">诺贝尔奖教授参与研发</p>
            <div class="teachers">
              <div class="teacher">
                <div class="teacher_pict"></div>
                <div class="teacher_words">
                  <p>授课</p>
                  <p>杨芳</p>
                </div>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="teacher teacher1">
                <div class="teacher_pict teacher1_pict"></div>
                <div class="teacher_words">
                  <p>辅导</p>
                  <p>网校辅导</p>
                </div>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="free_video">
              <p class="bofang"></p>
              <div class="video_info">
                <p>免费试听</p>
                <p>主讲:杨芳</p>
              </div>
            </div>
          </div>
          <div class="detail_course">
            <el-tabs type="border-card">
              <el-tab-pane label="课程大纲">
                <div class="course_dagang">
                  <div class="course_dagang1">课程大纲（7次课）</div>
                  <div class="course_dagang2">课程有效期：2019-10-28至2023-02-28</div>
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date"></el-table-column>
                    <el-table-column prop="name"></el-table-column>
                    <el-table-column prop="address" ></el-table-column>
                  </el-table>
                   <div class="course_more">查看全部大纲<i class="el-icon-arrow-down"></i></div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="课程详情"></el-tab-pane>
            </el-tabs>
            <div class="course_cour"> 
              <p>课程详情</p>
              <div  class="course_cour1"></div>             
            </div>
          </div>
        </div>
        <div class="price">
          <div class="detail-right_price">
            ￥<span>700</span>
            <p>剩余11个名额</p>
          </div>
          <div class="detail-right_item">
            <img src="../assets/price1.png" alt="">
            <span class="detail-right_coupon">
              满2000减351
            </span>
            <i class="el-icon-arrow-down"></i>
          </div>
           <div class="detail-right_item">
            <img src="../assets/price3.png" alt="">
            <span class="detail-right_course">
              换购一门精品课程
            </span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="detail-right_item">
            活动
            <div class="detail-right_item1">
              <span class="detail-right_sourse">配套学习资料</span>
              <span class="detail-right_sourse">赠送课程</span>
            </div>            
          </div>
          <div class="detail-right_item detail-right_item2">
            服务<span>直播授课 / 随时退款 /随时看回放/</span><i class="el-icon-arrow-down"></i>
          </div>
          <div class="detail-right_item">
            <template>
              <el-button type="text" class="detail-right_btn btn1" @click="open">加入购物车</el-button>
            </template>
            <div class="detail-right_btn btn2">立即报名</div>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
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
  methods:{
    getscroll(){
      console.log(body.onscroll())
      console.log(111)
    },
     open() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      }
  },
  data() {
        return {
          tableData: [{
            date: '第一天',
            name: '原子结构与元素周期表▪知识预习',
            address: '01月17日 周五 07:30 - 09:45'
          }, {
            date: '第二天',
            name: '元素周期律▪知识预习',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '第三天',
            name: '离子键和共价键▪知识预习',
            address: '01月19日 周日 07:30 - 09:45'
          }]
        }
      }
};
</script>
<style>
.goal{
  font-size: 20px;
}
.yetou a{
  text-decoration: none;
  color: #666;
}
.btn1{
    text-align: center;
    width: 150px;
    height: 40px;
    background: rgba(241,50,50,.1);
    border: 1px solid #f13232;
    border-radius: 2px;
    color: #f13232;
    cursor: pointer;
    float: left;
}
.btn2{
    background: #f13232;
    border: 1px solid #f13232;
    border-radius: 2px;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    cursor: pointer;
    float: right;
}
.detail-right_btn{
  width: 148px;
  height: 38px;
  text-align: center;
  line-height: 38px;
}
.detail-right_item2{
  color: #666666;
  font-size: 14px;
}
.detail-right_item2 span{
  margin-left: 45px;
}
.detail-right_item2 .el-icon-arrow-down{
  color: #666666;
}
.detail-right_sourse{
  background-color: #f8f8f8;
  color: #f13232;
  font-size: 12px;
  padding: 4px;
  margin-left: 10px;
}
.detail-right_item1{
  margin-left: 40px;
  display: inline;

}
.detail-right_course{
  color: #f0773c;
  font-size: 14px;
  margin-left: 24px;
}
.detail-right_item{
  margin-bottom: 20px;
}
.el-icon-arrow-down{
  float: right;
  line-height: 22px;
  font-size: 14px;
  color: #f13232;
}
.detail-right_item .el-icon-arrow-right{
  float: right;
  line-height: 22px;
  font-size: 14px;
  color: #f0773c;
}
.detail-right_coupon{
  display: inline-block;
  color: #f13232;
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  width: 76px;
  padding: 0 5px;
  background-image: url("../assets/price2.png");
  background-size: 100% 20px;
  background-repeat: no-repeat;
  margin: 0 20px;
}
.detail-right_price{
  color: #f13232
}
.detail-right_item img{
  width: 42px;
  height: 16px;
}
.detail-right_price p{
  color: #999;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 30px;
}
.detail-right_price span{
  font-size: 40px;
}
.price {
  width: 27%;
  background-color: #fff;
  float: right;
  padding: 40px 20px;
  border-top: 3px solid #f13232;
}
.course_item{
  width: 658px;
  margin: 150px auto;
}
.course_cour1{
  width: 750px;
  height: 562px;
  margin: 20px auto;
  background-image: url("../assets/detail5.jpg");
}
.course_cour{
  padding: 20px;
}
.course_cour p{
  font-size: 18px;
  color: #333;
}
.course_more{
  margin: 20px auto;
  font-size: 14px;
  text-align: center;
}
.course_more i{
  margin-left: 10px;
}
.course_dagang1 {
  float: left;
  font-size: 18px;
  color: #333;
}
.course_dagang2 {
  float: right;
  font-size: 14px;
  color: #999;
}
.el-tabs--border-card {
  border: none;
  box-shadow: none;
}
.el-tabs--border-card > .el-tabs__header {
  border-bottom: none;
}
.el-tabs--border-card > .el-tabs__header {
  height: 60px;
  background-color: #fafafa;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  height: 60px;
  border-top: 3px solid #f13232;
}
.el-tabs__item {
  line-height: 60px;
  font-size: 16px;
  padding: 0 40px;
}
.content_all {
  width: 100%;
  background-color: #f5f5f5;
}
.content {
  width: 90%;
  margin: auto;
  border: 1px solid #f5f5f5;
}
.yetou a {
  list-style: none;
}
.yetou {
  height: 50px;
}
.yetou div {
  line-height: 16px;
  padding: 20px 0;
  float: left;
  font-size: 12px;
  margin-left: 5px;
}
.clear {
  clear: both;
}
.detail {
  width: 100%;
  margin-top: 5px;
  float: left;
}
.xiangqing {
  width: 69%;
  float: left;
}
.detail_se {
  background-color: #fff;
  padding: 20px;
}
.detail_course {
  margin-top: 10px;
  background-color: #fff;
}
.detail_words {
  line-height: 40px;
}
.course {
  margin: 4px;
  font-size: 14px;
  border: 1px solid #f13232;
  color: #f13232;
}
.detail_words .goal {
  font-size: 20x;
  line-height: 28px;
  color: #333;
}
.detail_info {
  font-size: 14px;
  line-height: 28px;
  color: #666;
}
.detail_info img {
  width: 16px;
  height: 16px;
}
.teachers {
  display: flex;
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.teacher {
  display: flex;
}
.teacher1 {
  margin-left: 50px;
}
.teacher_pict {
  background-image: url("../assets/detail1.png");
  display: inline-block;
  width: 46px;
  height: 46px;
  background-size: cover;
  border-radius: 100%;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 1px solid #f1f1f1;
}
.teacher1_pict {
  background-image: url("../assets/detail2.png");
}
.el-icon-arrow-right {
  line-height: 48px;
  font-size: 14px;
}
.teacher_words {
  display: inline-block;
  padding-left: 8px;
  padding-right: 4px;
  color: #666666;
}
.teacher_words p {
  line-height: 24px;
}

.free_video {
  position: relative;
  box-sizing: border-box;
  padding: 18px 20px;
  width: 384px;
  height: 68px;
  margin-right: 20px;
  background: #fafafa;
  cursor: pointer;
  font-size: 12px;
  color: #666666;
  display: flex;
}
.bofang {
  height: 24px;
  width: 24px;
  background: url("../assets/detail3.png");
  background-position: 50%;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-top: 5px;
}
.video_info {
  margin-left: 10px;
}
.video_info p {
  line-height: 16px;
}
</style>