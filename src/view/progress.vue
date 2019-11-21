<template>
  <div>
    <img class="imgas" src="../assets/logo_icon.png" alt />
    <div class="zhuce">
      <div class="bu">
        <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
          <el-step title="填写信息"></el-step>
          <el-step title="选择精品课"></el-step>
          <el-step title="预约成功"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </div>

      <div class="biaodan">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="地区" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年龄" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学科" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择日期" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上课时间" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <div class="one" @click="go()">下一步</div>
      </div>
      <div class="lingqu1">
        <div class="lingqu">
          <div class="kuang">
            <div class="data">{{data}}</div>
            <div class="shijian">{{shijian}}</div>
            <div class="jiaoshou">{{jiaoshou}}</div>
            <img class="dui" src="../assets/dui.png" alt />
          </div>
        </div>
        <div class="two" @click="qu()">领取</div>
      </div>
      <div class="yuyue">
        <div class="ruw">
          <div class="cheng">
            <span style="font-size:20px;margin-right:30px;">预约成功</span>
            <span style="font-size:14px;color:rgb(187, 187, 187);">稍后会有学习规划师与你联系，请保持手机畅通!</span>
          </div>
          <div style="margin-top:10px;color:#575858;font-size:14px;">{{kecheng}}</div>
          <div style="margin-top:10px;color:#575858;font-size:14px;">{{shi}}</div>
          <div class="jiao">
            <img src="../assets/img_7.png" alt />
            <span>{{jiaoshou}}</span>
          </div>
        </div>
        <div class="ruw">
          <div class="cheng">
            <span style="font-size:20px;margin-right:30px;">添加老师好友，了解上课流程</span>
          </div>
          <div class="jiao1">
            <img src="../assets/img_8.png" alt />
            <div class="laoshi">
              <span>{{laoshi}}</span>
              <span>{{weixin}}</span>
            </div>
          </div>
        </div>
        <div class="ruw">
          <div class="cheng">
            <span style="font-size:20px;margin-right:30px;">下载上课软件</span>
            <span style="font-size:14px;color:rgb(187, 187, 187);">*请用你预约的手机号176****9047登录哦!</span>
          </div>
          <div
            style="margin-top:10px;color:#575858;font-size:14px;"
          >电脑：打开学而思网校官方网站www.xueersi.com下载直播客户端</div>
          <div
            style="margin-top:10px;color:#575858;font-size:14px;margin-bottom:40px;"
          >手机：打开APP Store或手机应用市场，搜索"学而思网校"。</div>
        </div>
        <div class="xiazai">
          <div class="cha">查看课程</div>
          <div class="zai">下载学而思网校客户端</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        region: ""
      },
      active: 0,
      data: "2019-11-21 19:00:00-19:45:00",
      shijian: "30分钟，爱上记单词",
      jiaoshou: "授课 顾斐",
      kecheng: "课程：30分钟，爱上记单词",
      shi: "授课时间：2019-11-21 星期四 19:00-19:45",
      laoshi: "老师：赵佳辉",
      weixin: "微信号：18515514636",
      rules: {
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    go() {
      if (this.active++ > 2) this.active = 0;
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.imgas {
  margin: 30px 0px 13px 70px;
  width: 171px;
  height: 44px;
}
.zhuce {
  width: 90%;
  overflow: hidden;
  border-top: 5px solid red;
  margin: 0px auto;
  background-color: white;
  border-left: 1px solid rgb(187, 187, 187);
  border-right: 1px solid rgb(187, 187, 187);
  border-bottom: 1px solid rgb(187, 187, 187);
}
.bu {
  width: 800px;
  margin: 0px auto;
  margin-bottom: 50px;
}
.biaodan {
  width: 355px;
  overflow: hidden;
  margin: 30px auto;
  /* display: none; */
}
.el-steps--simple {
  background-color: white;
}
.el-steps--simple {
  height: 80px;
}
.one {
  width: 219px;
  height: 42px;
  background-color: red;
  color: white;
  margin-left: 99px;
  border-radius: 4px;
  text-align: center;
  line-height: 42px;
}
.lingqu {
  overflow-y: scroll;
  width: 745px;
  height: 340px;
  margin: 0px auto;
}
.lingqu1 {
  width: 745px;
  height: 600px;
  margin: 0px auto;
  display: none;
}
.kuang {
  width: 540px;
  height: 131px;
  margin: 0px 14px 0px 83px;
  border: 1px solid red;
  padding-left: 20px;
  background-color: #fcfcfc;
}
.data {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.shijian {
  margin-top: 18px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.jiaoshou {
  width: 500px;
  margin-top: 20px;
  font-size: 16px;
  color: #999;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dui {
  width: 50px;
  height: 50px;
  /* position: relative; */
  float: right;
  margin-top: -4px;
  margin-right: -20px;
}
.two {
  width: 300px;
  height: 54px;
  background-color: red;
  color: white;
  margin: 30px auto;
  border-radius: 4px;
  text-align: center;
  line-height: 54px;
}
.yuyue {
  width: 700px;
  height: 800px;
  margin: 0px auto;
  /* background-color: #666; */
  display: none;
}
.ruw {
  width: 700px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 0px 3px 3px #f7efef;
  padding-top: 30px;
  padding-left: 20px;
  margin-top: 40px;
}
.jiao img {
  width: 60px;
  height: 60px;
  margin-top: 16px;
  float: left;
  margin-bottom: 20px;
}
.jiao1 img {
  width: 60px;
  height: 60px;
  margin-top: 16px;
  float: left;
  margin-bottom: 20px;
}
.jiao span {
  margin-top: 40px;
  float: left;
}
.laoshi {
  float: left;
  width: 170px;
  overflow: hidden;
  margin-top: 30px;
}
.laoshi span {
  float: left;
}
.xiazai {
  width: 720px;
  height: 50px;
  margin-top: 71px;
  display: flex;
  justify-content: space-around;
}
.cha {
  width: 300px;
  height: 50px;
  float: left;
  text-align: center;
  line-height: 50px;
  border: 1px solid #333;
  border-radius: 4px;
}
.zai {
  width: 300px;
  height: 50px;
  float: left;
  color: white;
  background-color: red;
  text-align: center;
  line-height: 50px;
  border-radius: 4px;
}
</style>