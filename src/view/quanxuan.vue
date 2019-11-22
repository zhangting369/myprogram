<template>
  <div>
      <input type="checkbox" @click="checkAll" v-model="checked" />全选
      <div v-for="(item,index) in list" :key="index" style="margin-top:20px;">
        <input type="checkbox" v-model="checkModel" :value="item.id" />
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
      <input type="button" v-model="val_bu" class="ee" @click="goo()">
  </div>
</template>
<script>
export default {
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
      val_bu:"ff",
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
      goo(){
          this.val_bu="dfg"
      },
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
</style>