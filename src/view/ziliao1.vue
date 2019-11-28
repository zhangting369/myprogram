<template>
  <div class="box">
    <div class="ziliao_quanbu">
      <div class="ziliao_content_left">
        <el-container>
          <el-aside width="90%" style="margin: 40px auto;">
            <el-tabs :tab-position="tabPosition">
              <el-tab-pane class="ziliao_xin zhanghu" label="账户中心" disabled></el-tab-pane>
              <el-tab-pane class="ziliao_look" label="我的资料">
                <div class="ziliao_content_right">
                  <el-container>
                    <el-header class="ziliao_right_top" style="height: inherit; margin-top:20px">
                      <el-tabs v-model="activeName" @tab-click="handleClick()">
                        <el-tab-pane label="学员信息" name="first">
                          <el-form ref="form" :model="addform" label-width="80px">
                            <el-form-item label="学员姓名:">
                              <el-input v-model="addform.name"></el-input>
                            </el-form-item>
                            <el-form-item label="英文名:">
                              <el-input v-model="addform.ename"></el-input>
                            </el-form-item>
                            <el-form-item label="学员id:">
                              <el-input v-model="addform.uid"></el-input>
                            </el-form-item>
                            <el-form-item label="年级:">
                              <el-select v-model="addform.grade" placeholder="请选择年级">
                                <el-option label="小班 " value="小班"></el-option>
                                <el-option label="中班" value="中班"></el-option>
                                <el-option label="大班 " value="大班"></el-option>
                                <el-option label="一年级" value="一年级"></el-option>
                                <el-option label="二年级" value="二年级"></el-option>
                                <el-option label="三年级" value="三年级"></el-option>
                                <el-option label="四年级" value="四年级"></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="生日:">
                              <el-input type="text" v-model="addform.birthday"></el-input>
                            </el-form-item>
                            <el-form-item label="性别:">
                              <el-radio-group v-model="addform.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="学校:">
                              <el-input type="text" v-model="addform.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="getresource">提交</el-button>
                            </el-form-item>
                          </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="账号信息" name="second">
                          <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="账号昵称:">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="onSubmit">提交</el-button>
                            </el-form-item>
                          </el-form>
                        </el-tab-pane>
                      </el-tabs>
                    </el-header>
                  </el-container>
                </div>
              </el-tab-pane>
              <el-tab-pane class="ziliao_look" label="修改密码">
                <div class="ziliao_content_right">
                  <el-container>
                    <el-header class="ziliao_right_top" style="height: inherit; margin-top:20px">
                      <el-tabs v-model="activeName" @tab-click="handleClick()">
                        <el-tab-pane label="修改密码" name="first">
                          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                            class="demo-ruleForm">
                            <el-form-item label="密码" prop="pass">
                              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="用户ID" prop="userid">
                              <el-input v-model.number="ruleForm.userid"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                              <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                          </el-form>
                        </el-tab-pane>
                      </el-tabs>
                    </el-header>
                  </el-container>
                </div>
              </el-tab-pane>
              <el-tab-pane class="ziliao_look" label="修改用户昵称">
                <div class="ziliao_content_right">
                  <el-container>
                    <el-header class="ziliao_right_top" style="height: inherit; margin-top:20px">
                      <el-tabs v-model="activeName" @tab-click="handleClick()">
                        <el-tab-pane label="修改用户昵称" name="first">
                          <el-form ref="form" :model="form" label-width="100px">
                            <el-form-item label="用户名ID:">
                              <el-input v-model="reuid"></el-input>
                            </el-form-item>
                            <el-form-item label="修改用户昵称:">
                              <el-input type="text" v-model="rename"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="gethoust">提交</el-button>
                            </el-form-item>
                          </el-form>
                        </el-tab-pane>
                      </el-tabs>
                    </el-header>
                  </el-container>
                </div>
              </el-tab-pane>
              <el-tab-pane class="ziliao_look" label="我的地址">
                <el-header class="ziliao_right_top" style="height: inherit; margin-top:20px">
                  <el-tabs v-model="activeName" @tab-click="handleClick()">
                    <el-tab-pane label="地址管理" name="first">
                      <div class="ziliao_write">
                        <div class="ziliao_write1">
                          <p class="chuangjian">你已创建 0 个收货地址，最多可以创建 10 个</p>&nbsp; &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;如需要修改订单配送地址，请前往【我的订单】
                          <p class="ziliao_tiaozhuan">点击跳转</p>
                        </div>
                        <input type="button" value="新增收货地址" class="ziliao_anniu" @click="addaddress1()" />
                      </div>

                      <el-table :data="tableData" style="width: 100%;margin-top:20px;background-color:#f5f5f5;">
                        <el-table-column label="">
                          <template slot-scope="scope">
                            <!-- <i class="el-icon-time"></i> -->
                            <span style="margin-left: 20px">{{ scope.row.receiver_name }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="">
                          <template slot-scope="scope">
                            <span style="margin-left: 20px">{{ scope.row.receiver_province }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="">
                          <template slot-scope="scope">
                            <span style="margin-left: 20px">{{ scope.row.receiver_address }}</span>
                          </template>
                        </el-table-column>
                        <el-table-column label="">
                          <template slot-scope="scope">
                            <span style="margin-left: 20px">{{ scope.row.receiver_mobile }}</span>
                          </template>
                        </el-table-column>
                        <!-- <el-table-column label="" >
                          <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top">
                              <p>姓名: {{ scope.row.name }}</p>
                              <p>住址: {{ scope.row.address }}</p>
                              <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                              </div>
                            </el-popover>
                          </template>
                        </el-table-column> -->
                        <el-table-column label="">
                          <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="getdeladdress()">删除</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                      <div class="ziliao_dizhi">
                        <div class="ziliao_xinzeng">新增收货地址<i class="el-icon-close xiaoshi" @click="addaddress2()"></i>
                        </div>
                        <p class="ziliao_shouhuoren">收货人:
                          <el-input v-model="address.input" placeholder="请输入内容" class="ziliao_shouhuokuang"></el-input>
                        </p>
                        <p class="ziliao_shouhuoren">所在地区:
                          <el-input v-model="address.input1" placeholder="请输入内容" class="ziliao_shouhuokuang"></el-input>
                        </p>
                        <p class="ziliao_shouhuoren">详细地址:
                          <el-input v-model="address.input2" placeholder="请输入内容" class="ziliao_shouhuokuang"></el-input>
                        </p>
                        <p class="ziliao_shouhuoren">手机号码:
                          <el-input v-model="address.input3" placeholder="请输入内容" class="ziliao_shouhuokuang"></el-input>
                        </p>
                        <input type="button" value="保存收货人地址" class="ziliao_baocundizhi" @click="getaddaddress()" />
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </el-header>
              </el-tab-pane>
              <el-tab-pane class="ziliao_look" label="订单中心" disabled>订单中心</el-tab-pane>
              
              <el-tab-pane class="ziliao_xin" label="我的订单">
                <el-container class="right">
                  <el-header>
                    <span>我的订单</span>
                    <span class="order_title">
                      <img src="../assets/img_9.png" />
                      <span class="order_fei">退费说明</span>
                    </span>
                  </el-header>
                  <el-main height="300px">
                    <div :class="n==1?class1:class2" @click="btn(1)">全部订单 {{quan}}</div>
                    <div :class="n==2?class1:class2" @click="btn(2)">已支付 {{yi}}</div>
                    <div :class="n==3?class1:class2" @click="btn(3)">未完成 {{wei}}</div>
                    <div :class="n==4?class1:class2" @click="btn(4)">待支付 {{qu}}</div>
                    <div :class="n==5?class1:class2" @click="btn(5)">已取消 {{dai}}</div>
                    <div v-if="n==1" class="twomenu">
                      <div class="order_xiang">
                        <span>订单详情</span>
                        <span>总计</span>
                        <span>状态及操作</span>
                      </div>
                      <div class="ziliao_dingdan" v-for="(item,qq) in ziliaodingdan" :key='qq'>
                        <div class="order_dan">
                          <span>{{item.create_time}}</span>
                          <span>{{item.order_no}}</span>
                        </div>
                        <div class="order_jiaocheng">
                          <div class="order_left">
                            <div class="order_kong">
                              <div class="order_shang">
                                <div class="order_math">{{math}}</div>
                                <div class="order_one">【寒】初一数学直播勤学班（全国人教）</div>
                                <div class="order_mouy">￥{{item.order_payment}}</div>
                                <div class="order_chong">重新选课</div>
                              </div>
                              <div class="order_stage">{{stage}}</div>
                              <div class="order_teacher">{{teacher}}</div>
                            </div>
                            <div class="order_fu">
                              <div class="order_fl">福利</div>
                              <div class="order_li">{{fuli}}</div>
                            </div>
                          </div>
                          <div class="order_moddle">￥{{item.order_payment}}</div>
                          <div class="order_right">已取消</div>
                        </div>
                      </div>
                    </div>
                    <div v-if="n==2" class="twomenu">
                      <img src="../assets/monkey_null.png" alt />
                      <div class="order_zan">暂时没有该类型的订单</div>
                    </div>
                    <div v-if="n==3" class="twomenu" style="margin-top:30px;">
                      <img src="../assets/monkey_null.png" alt />
                      <div class="order_zan">暂时没有该类型的订单</div>
                    </div>
                    <div v-if="n==4" class="twomenu">
                      <img src="../assets/monkey_null.png" alt />
                      <div class="order_zan">暂时没有该类型的订单</div>
                    </div>
                    <div v-if="n==5" class="twomenu">
                      <div class="order_xiang">
                        <span>订单详情</span>
                        <span>总计</span>
                        <span>状态及操作</span>
                      </div>
                      <div ziliao_dingdan v-for="(item,qq) in ziliaodingdan" :key="qq">
                        <div class="order_dan">
                          <span>{{item.create_time}}</span>
                          <span>{{item.order_no}}</span>
                        </div>
                        <div class="order_jiaocheng">
                          <div class="order_left">
                            <div class="order_kong">
                              <div class="order_shang">
                                <div class="order_math">{{math}}</div>
                                <div class="order_one">【寒】初一数学直播勤学班（全国人教）</div>
                                <div class="order_mouy">￥{{item.order_payment}}</div>
                                <div class="order_chong">重新选课</div>
                              </div>
                              <div class="order_stage">{{stage}}</div>
                              <div class="order_teacher">{{teacher}}</div>
                            </div>
                            <div class="order_fu">
                              <div class="order_fl">福利</div>
                              <div class="order_li">{{fuli}}</div>
                            </div>
                          </div>
                          <div class="order_moddle">￥{{item.order_payment}}</div>
                          <div class="order_right">已取消</div>
                        </div>
                      </div>

                    </div>
                  </el-main>
                </el-container>
              </el-tab-pane>
              <el-tab-pane class="ziliao_xin" label="资产中心" disabled></el-tab-pane>
              <el-tab-pane class="ziliao_look" label="优惠券">
                <div class="ziliao_content_right">
                  <el-container>
                    <el-header class="ziliao_right_top" style="height: inherit; margin-top:20px">
                      <el-tabs v-model="activeName" @tab-click="handleClick()">
                        <el-tab-pane label="优惠券" name="first">
                          <!-- <el-form ref="youform" :model="youform" label-width="80px">
                            <el-form-item label="优惠券:">
                              <el-select v-model="youform.region" placeholder="可用优惠券（0）">
                                <el-option label="已使用 " value="shanghai"></el-option>
                                <el-option label="已过期" value="shanghai"></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="品类券:">
                              <el-select v-model="youform.type" placeholder="全部类型">
                                <el-option label="全部类型 "></el-option>
                                <el-option label="品类券"></el-option>
                                <el-option label="通用券"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-form>-->
                        </el-tab-pane>
                      </el-tabs>
                    </el-header>
                  </el-container>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-aside>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("年龄不能为空"));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error("请输入数字值"));
          } else {
            if (value < 18) {
              callback(new Error("必须年满18岁"));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.ruleForm.validateField("checkPass");
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        activeIndex: "1",
        activeIndex2: "1",
        class1: "choose CActive",
        class2: "choose",
        n: 1,
        quan: "1",
        yi: "0",
        wei: "0",
        dai: "1",
        qu: "0",
        ziliaodingdan:[],
        dan: "2019-11-20 17:24:33 ",
        math: "数学",
        stage: "三期：2月6日-2月12日每天18:50-21:00 · 共7讲",
        teacher: "授课： 朱韬",
        fuli: "教材福利 x 7",
        ruleForm: {
          pass: "",
          checkPass: "",
          userid: ""
        },
        rules: {
          pass: [{ validator: validatePass, trigger: "blur" }],
          checkPass: [{ validator: validatePass2, trigger: "blur" }],
          age: [{ validator: checkAge, trigger: "blur" }]
        },

        activeName: "first",
        tabPosition: "left",
        addform: {
          name: "",
          ename: "",
          uid: "2",
          sex: "",
          grade: "",
          desc: "",
          birthday: ""
        },
        reuserid: "",
        repwd: "",
        form: {
          date2: "",
          delivery: false,
          type: [],
          resource: ""
        },
        rename: "",
        reuid: "",
        tableData: [],
        address: {
          input: '',
          input1: '',
          input2: '',
          input3: '',
          id2: "",
          index: "0"
        },
        ziliaodingdan: []
      };
    },
    mounted() {
      this.$http.get("/upi/shipping", {
        params: {
          user_id: 1
        }
      }).then(res => {
        this.tableData = res.data;
        this.id2 = res.data[this.address.index].shipping_id;
        console.log(res.data);
      });
      this.wodedingdan()
    },
    methods: {
      wodedingdan() {
        this.$http.get("/upi/orders/1").then(res => {
          console.log(res);
          this.ziliaodingdan = res.data;
        })
      },
      addaddress1() {
        $(".ziliao_dizhi").css("display", "block")
      },
      addaddress2() {
        $(".ziliao_dizhi").css("display", "none")
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      gethoust() {
        let fromdata = new FormData();
        fromdata.append("iname1", this.rename);
        fromdata.append("uid", this.reuid);
        this.$http.put("/upi/info", fromdata).then(res => {
          console.log(res);
        });
      },
      getresource() {
        let fromdata = new FormData();
        fromdata.append("birthday", this.addform.birthday);
        fromdata.append("ename", this.addform.ename);
        fromdata.append("grade", this.addform.grade);
        fromdata.append("id", 1);
        fromdata.append("school", this.addform.desc);
        fromdata.append("sex", this.addform.sex);
        fromdata.append("uid", this.addform.uid);
        fromdata.append("uname", this.addform.name);
        this.$http.post("/upi/userinfo", fromdata).then(res => {
          console.log(res);
        });
      },
      getaddaddress() {
        let fromdata = new FormData();
        fromdata.append("receiver_name", this.address.input);
        fromdata.append("receiver_province", this.address.input1);
        fromdata.append("receiver_address", this.address.input2);
        fromdata.append("user_id", 1);
        fromdata.append("receiver_mobile", this.address.input3);
        this.$http.post("/upi/shipping", fromdata).then(res => {
          console.log(res);
        });
      },
      getdeladdress() {
        let fromdata = new FormData();
        fromdata.append("id2", this.address.id2);
        this.$http.put("/upi/shipping", fromdata).then(res => {
          console.log(res);
        });
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      btn(item) {
        this.n = item;
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let fromdata = new FormData();
            fromdata.append("uid", this.ruleForm.userid);
            fromdata.append("password", this.ruleForm.checkPass);
            this.$http.put("/upi/user", fromdata).then(res => {
              console.log(res);
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log("submit!");
      },
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
  .xiaoshi {
    float: right;
    font-size: 20px;
    cursor: pointer;
  }

  .ziliao_dizhi {
    width: 90%;
    margin: 30px auto;
    display: none;
    /* background-color: #f13232;*/
  }

  .ziliao_xinzeng {
    font-size: 16px;
    color: #666;
  }

  .ziliao_shouhuoren {
    width: 100%;
    margin-top: 20px;
    font-size: 16px;
    color: #666;
    /*background-color: #f5f5f5;*/
  }

  .ziliao_shouhuokuang {
    display: inline;
  }

  .el-input__inner {
    width: 70%;
    margin-top: -20px;
  }

  .ziliao_baocundizhi {
    border: none;
    background-color: #f13232;
    border-radius: 4px;
    width: 16%;
    height: 34px;
    margin-top: 26px;
    color: white;
    outline: none;
  }

  a {
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
    margin-right: 5px;
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
    text-align: center;
    line-height: 36px;
  }

  .el-main {
    background-color: #fbfafa;
    color: #333;
    text-align: center;
  }

  body>.el-container {
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
    border-bottom: 2px solid red;
    color: red;
  }

  .twomenu {
    clear: both;
    width: 955px;
    height: 605px;
    margin-top: 50px;
  }

  .order_xiang {
    height: 40px;
    line-height: 40px;
    padding-left: 250px;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    border: 1px solid rgb(160, 160, 160);
    color: rgb(75, 75, 75);
  }

  .order_dan {
    line-height: 40px;
    background-color: #f5f5f5;
    font-size: 14px;
    color: rgb(75, 75, 75);
    margin-top: 35px;
    border-left: 1px solid #bbb;
    border-right: 1px solid #bbb;
    border-top: 1px solid #bbb;
  }

  .order_dan span {
    margin-left: -400px;
  }

  .order_jiaocheng {
    width: 953px;
    overflow: hidden;

    border: 1px solid #bbb;
  }

  .order_left {
    width: 600px;
    overflow: hidden;
    float: left;
    padding-left: 30px;
    padding-top: 30px;
    border-right: 1px solid #bbb;
  }

  .order_shang {
    font-size: 12px;
  }

  .order_math {
    border: 1px solid red;
    border-radius: 4px;
    float: left;
    margin-left: 5px;
    width: 40px;
    height: 22px;
    line-height: 22px;
    margin-top: 6px;
  }

  .order_lian {
    width: 32px;
    height: 20px;
    border-radius: 4px;
    float: left;
    color: white;
    background-color: red;
    line-height: 20px;
    margin-top: 8px;
  }

  .order_one {
    float: left;
  }

  .order_mouy {
    float: left;
  }

  .order_chong {
    color: red;
  }

  .order_stage {
    width: 300px;
    color: #8a8a8a;
    clear: both;
    margin-left: -3px;
    margin-top: 14px;
    font-size: 14px;
  }

  .order_teacher {
    width: 76px;
    font-size: 14px;
    margin-top: 10px;
  }

  .order_fu {
    height: 29px;
    width: 600px;
    border-top: 1px solid #bbb;
    font-size: 14px;
    margin-top: 8px;
    margin-left: -31px;
    padding-left: 30px;
    padding-top: 10px;
  }

  .order_fl {
    border: 1px solid red;
    border-radius: 4px;
    float: left;
    margin-left: 5px;
    width: 40px;
    height: 22px;
    line-height: 22px;
    margin-top: 6px;
  }

  .order_li {
    float: left;
    margin-left: 10px;
  }

  .order_moddle,
  .order_right {
    width: 160px;
    height: 129px;
    font-size: 14px;
    float: left;
    text-align: center;
    padding-top: 30px;
  }

  .order_moddle {
    border-right: 1px solid #bbb;
  }

  .order_xin {
    width: 100%;
    height: 50px;
    float: left;
    font-size: 20px;
    margin-top: 33px;
  }

  .order_look {
    width: 80%;
    height: 8px;
    float: left;
  }

  .box {
    background-color: #f5f5f5;
  }

  .ziliao_quanbu {
    width: 90%;
    margin: -20px auto;
    background-color: #f5f5f5;
  }

  .el-tabs--left .el-tabs__nav.is-left,
  .el-tabs--left .el-tabs__nav.is-right,
  .el-tabs--right .el-tabs__nav.is-left,
  .el-tabs--right .el-tabs__nav.is-right {
    /* float: none; */
    margin-top: 30px;
  }

  .ziliao_content_left {
    width: 95%;
    font-size: 20px;
    margin: auto;
  }

  .ziliao_look {
    color: rgb(192, 195, 195);
    font-size: 14px;
    margin: 3px 20px 20px 20px;
    width: 100%;
    float: left;
  }

  .ziliao_xin {
    color: #333;
    font-size: 16px;
  }

  .el-tabs__item {
    margin-top: 16px;
  }

  .el-tabs--left .el-tabs__item.is-left {
    text-align: center;
  }

  .el-form {
    width: max-content;
  }

  .el-aside {
    background-color: #fbfafa;
    color: #333;
    text-align: center;
    line-height: 36px;
    border-radius: 4px;
  }

  .ziliao_content_right {
    width: 95%;
    /*background-color: white;*/
    border-radius: 4px;
    margin-left: 20px;
  }

  .ziliao_right_top {
    width: 100%;
    /*background-color: seashell;*/
  }

  .ziliao_jichu {
    width: 100px;
    height: 40px;
    /*background-color: darkcyan;*/
    text-align: center;
    line-height: 40px;
    margin: 20px;
    display: inline-block;
    border-bottom: 2px solid #f13232;
  }

  .el-container {
    margin-top: 20px;
  }

  .el-container.is-vertical {
    margin-top: 0px;
  }

  .el-form {
    margin-top: 20px;
    width: 50%;
  }

  .el-button--primary {
    margin-left: 40px;
  }

  .ziliao_write {
    width: 100%;
    height: 40px;
    /*background-color: darkgoldenrod;*/
  }

  .ziliao_write1 {
    width: 70%;
    height: 30px;
    /*background-color: white;*/
    display: flex;
    font-size: 12px;
    color: #f13232;
  }

  .chuangjian {
    font-size: 12px;
    color: #333;
  }

  .ziliao_tiaozhuan {
    color: #999;
  }

  .ziliao_anniu {
    float: right;
    margin-right: 20px;
    margin-top: -20px;
    border: none;
    background-color: #f13232;
    border-radius: 4px;
    width: 14%;
    height: 34px;
    color: white;
    outline: none;
  }

  .el-tabs__item {
    margin-top: 22px;
  }
</style>