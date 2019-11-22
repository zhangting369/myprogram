<template>
  <div class="box">
    <hearderindex />
    <div class="dingdan_content1">
      <div class="dingdan_content1_top">
        <p class="dingdan_manjian">满减</p>
        <p class="dingdan_man">满2科减100元</p>
        <p class="dingdan_cudan">去凑单></p>
      </div>
      <div class="dingdan_content1_middle">
        <div v-for="(item,index) in list" :key="index" style="margin-top:20px;">
          <input type="checkbox" v-model="checkModel" :value="item.id" class="goods_app"/>
          <span>{{item.name}}</span>
          <el-row>
            <el-col class="dingdan_content1_middle1" v-for="(o, index) in 1" :key="index">
              <el-card class="dingdan_conent1_write" shadow="never">
                <div class="dingdan_concent1_write1">
                  <p class="dingdan_huaxue">化学</p>
                  <p class="dingdan_mubiao">【寒】初一大科学直播目标班（全国版）</p>
                  <span class="dingdan_shijian">
                    <p class="el-icon-time">2月22日-5月30日每周六09:00-11:10 · 共14讲</p>
                  </span>
                  <span class="dingdan_nandu">
                    难度：
                    <p class="el-icon-star-on"></p>
                    <p class="el-icon-star-on"></p>
                    <p class="el-icon-star-on"></p>
                    <p class="el-icon-star-on"></p>
                  </span>
                </div>
                <div class="dingdan_teachers">
                  <div class="dingdan_teacher">
                    <div class="dingdan_teacher_pict"></div>
                    <div class="dingdan_teacher_words">
                      <p>授课</p>
                      <p>杨芳</p>
                    </div>
                  </div>
                  <div class="dingdan_teacher dingdan_teacher1">
                    <div class="dingdan_teacher_pict dingdan_teacher1_pict"></div>
                    <div class="dingdan_teacher_words">
                      <p>辅导</p>
                      <p>网校辅导</p>
                    </div>
                  </div>
                </div>
                <span class="dingdan_jiage1">
                  <p class="dingdan_jiage">￥1400</p>元
                </span>
                <p class="dingdan_shanchu">删除</p>

                <p class="dingdan_xiantiao"></p>
                <p class="dingdan_baoming">剩余2名额</p>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- <div class="dingdan_clean"></div> -->
    <div class="dingdan_footer">
      <div class="goods_quanxuan">
        <input type="checkbox" @click="checkAll" v-model="checked" class="dingdan_quanxuan" />全选
        <div class="dingdan_footer_write">
          <div class="dingdan_zhifu">
            <p class="dingdan_zhifu1">去支付</p>
          </div>
          <div class="dingdan_heji">
            <p class="dingdan_heji1">合计：</p>￥0
            <!-- <p class="dingdan_zongji"></p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hearderindex from "../components/hearder_index";
export default {
  components: {
    hearderindex
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "添加"
        },
        {
          id: 2,
          name: "添加"
        },
        {
          id: 3,
          name: "添加"
        }
      ],
      checked: false, //是否全选
      checkModel: [] //双向数据绑定的数组，我是用的id
    };
  },
  watch: {
    checkModel() {
      if (this.checkModel.length == this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  },
  methods: {
    checkAll() {
      if (this.checked) {
        this.checkModel = [];
      } else {
        this.list.forEach(item => {
          if (this.checkModel.indexOf(item.id) == -1) {
            this.checkModel.push(item.id);
          }
        });
      }
    }
  }
};
</script>


<style>
.goods_appt{
  border: 50%;
}
.box {
  background-color: #f5f5f5;
  /* overflow: hidden; */
}
.goods_quanxuan{
  width: 90%;
  margin: 10px auto;
  
}
.dingdan_content1 {
  width: 90%;
  /* height: 1000px; */
  overflow: hidden;
  background-color: white;
  margin: 20px auto;
  padding: 10px;
}

.dingdan_content1_top {
  width: 100%;
  /* height: 50px;*/
  overflow: hidden;
  /* background-color: yellow; */
}

.dingdan_manjian {
  width: 70px;
  height: 50px;
  font-size: 12px;
  display: inline;
  color: #fff;
  background: #f13232;
  border-radius: 2px;
}

.dingdan_man {
  display: inline;
  font-size: 14px;
  color: #999999;
}

.dingdan_cudan {
  display: inline;
  font-size: 14px;
  color: #333333;
  margin-left: 200px;
  cursor: pointer;
}

.dingdan_content1_middle {
  width: 100%;
  height: 100px;
  /* background-color: red; */
}

.dingdan_content1_middle1 {
  width: 100%;
  overflow: hidden;
  /*background-color: white;*/
  border-radius: 4px;
  flex-wrap: wrap;
}

.dingdan_huaxue {
  width: 34px;
  height: 20px;
  border: 1px solid #f13232;
  font-size: 12px;
  color: #f13232;
  text-align: center;
  display: inline;
}

.dingdan_mubiao {
  color: #999;

  font-size: 14px;
  text-align: center;
  display: inline;
}

.dingdan_shijian {
  color: #999;
  font-size: 12px;
}

.el-icon-time {
  display: inline;
  margin-top: 6px;
  font-size: 14px;
  margin-left: 164px;
}

.dingdan_nandu {
  color: #999;
  font-size: 14px;
  display: block;
  width: 200px;
  margin: 30px auto;
}

.el-icon-star-on {
  display: inline;
  font-size: 18px;
}

.dingdan_conent1_write {
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  /* background-color: aqua; */
}

.dingdan_concent1_write1 {
  width: 90%;
  margin: auto;
  /* background-color: #999; */
  margin-top: 16px;
}

.el-card__body {
  padding: 0px;
}

.dingdan_baoming {
  font-size: 12px;
  color: #f13232;
  margin-top: 24px;
  margin-left: 52px;
}

.dingdan_jiage {
  font-size: 24px;
  display: inline;
  color: #f13232;
}

.dingdan_jiage1 {
  color: #f13232;
  float: right;
  margin-top: -76px;
  margin-right: 150px;
}
.dingdan_shanchu {
  color: #999;
  font-size: 14px;
  float: right;
  margin: -70px 44px;
}
.dingdan_xiantiao {
  width: 90%;
  margin: auto;
  border: 1px dashed rgb(243, 243, 243);
}
.dingdan_teachers {
  display: flex;
  font-size: 12px;
  margin-top: -56px;
  margin-bottom: 30px;
  margin-left: 54px;
}
.dingdan_teacher {
  display: flex;
}
.dingdan_teacher1 {
  margin-left: 50px;
}
.dingdan_teacher_pict {
  background-image: url("../assets/content3_1.jpg");
  display: inline-block;
  width: 30px;
  height: 30px;
  background-size: cover;
  border-radius: 100%;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 1px solid #f1f1f1;
}
.dingdan_teacher1_pict {
  background-image: url("../assets/content3_1.jpg");
}
.dingdan_teacher_words {
  display: inline-block;
  padding-left: 8px;
  padding-right: 4px;
  color: #858c96;
  font-size: 12px;
}
.dingdan_clean {
  clear: both;
}
.dingdan_footer {
  width: 100%;
  height: 100px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  position: fixed;
  margin: auto;
  bottom: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
}
.dingdan_footer_write {
  width: 90%;
  height: 38px;
  /* background-color: #f13232; */
  margin: 12px auto;
}
.dingdan_quanxuan {
  width: 30px;
  height: 20px;
  display: inline;
  font-size: 12px;
  /* background-color: floralwhite; */
  color: #999999;
  line-height: 40px;
}
.dingdan_heji {
  display: inline;
  width: 100px;
  height: 30px;
  /* background-color: floralwhite; */
  float: right;
  font-size: 20px;
  color: #f13232;
  text-align: center;
  line-height: 40px;
}
.dingdan_heji1 {
  display: inline;
  font-size: 16px;
  color: #999999;
}
.dingdan_zongji {
  display: inline;
}
.dingdan_zhifu {
  display: inline-block;
  width: 140px;
  height: 40px;
  background-color: rgb(180, 180, 180);
  border-radius: 4px;
  float: right;
  text-align: center;
  line-height: 40px;
}
.dingdan_zhifu1 {
  display: inline;
  color: white;
  font-size: 16px;
}
.el-card {
  border: inherit;
  background-color: #fff;
}
</style>