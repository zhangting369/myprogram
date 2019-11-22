<template>
<div class="resiger">
        <div class="tupian">
            <img src="../assets/logo_pro.png" alt="">
        </div>
        <img class="imgs3" src="../assets/img_5.png" alt="">
    <div class="logon">
      <div :class="n==1?class1:class2" @click="btn(1)">验证码登录</div>
      <div :class="n==2?class1:class2" @click="btn(2)">密码登录</div>
      <div v-if="n==1" class="twomenu">
            <div class="why"><input type="email" v-model="emailyan" placeholder="请输入邮箱号" ></div>
            <div class="why"><input type="text" v-model="yanzheng" placeholder="请输入验证码" >
            <div class="yanzheng" @click="getyanzheng()">获取验证码</div>
            </div>
            <template>
            <input type="submit" value="注册" class="denglu1" @click="getlogin()">
            </template>
            <div class="new">新用户登录后自动创建账号</div>        
      </div>
      <div v-if="n==2" class="twomenu">         
          <div class="why1"><input type="text" v-model="userid" placeholder="请输入手机号/通行证/邮件" ></div>
          <div class="why1"><input type="text" v-model="userpassword" placeholder="请输入登录密码" >
          <div class="yanzheng1">忘记密码</div>
          </div>
          <input type="submit" value="注册" class="denglu1" @click="getloginuser()">
      </div>
      <div class="deng">
        登录即代表你已阅读并同意
        </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            class1:'choose CActive',
            class2:'choose',            
            n:1,
            radio1: '上海',
            see:false,
            emailyan:"",
            yanzheng:"",
            userid:"",
            userpassword:""
        }
    },
    methods: {
        getyanzheng(){
            // this.$router.push("/index")
            this.$http.get('/api/sendMail',{
               params:{
                   email:this.emailyan
                   }
            }).then(res=>{
                console.log(res);
            })

        },
        getlogin(){           
            this.$http.get('/api/login',{
               params:{
                   email:this.emailyan,
                   yan:this.yanzheng
                   }
            }).then(res=>{
                console.log(res);
                if(res.data){
                    this.$router.push("/index")
                }else{
                    if(res.config.params.email==""||res.config.params.yan==""){
                        this.$alert(`
                        <div class="login_tan">
                            邮箱或验证码不能为空！！！       
                        </div>                    
                    `,  {
                    dangerouslyUseHTMLString: true
                    });
                    }else{
                         this.$alert(`
                        <div class="login_tan">
                            邮箱或验证码错误！！！       
                        </div>                    
                    `,  {
                    dangerouslyUseHTMLString: true
                    });
                    }
                  
                }
            })
        },
         getloginuser(){           
            this.$http.get('/api/login1',{
               params:{
                   user_id:this.userid,
                   user_password:this.userpassword
                   }
            }).then(res=>{
                console.log(res);
                if(res.data){
                    this.$router.push("/index")
                }else{
                    if(res.config.params.user_id==""||res.config.params.user_password==""){
                        this.$alert(`
                        <div class="login_tan">
                            用户名或密码不能为空！！！       
                        </div>                    
                    `,  {
                    dangerouslyUseHTMLString: true
                    });
                    }else{
                         this.$alert(`
                        <div class="login_tan">
                            用户名或密码错误！！！       
                        </div>                    
                    `,  {
                    dangerouslyUseHTMLString: true
                    });
                    }
                  
                }
            })
        },

        
    //     open() {
        
    //   },
        btn(item){
            this.n=item;
        }
    },
}
</script>

<style>
.el-message-box__btns{
    display: none;
}
.login_xiao{
    display: inline-block;
    width: 50px;
    text-align: center;
    padding: 5px 20px;
    border: 1px solid #bbb;
    border-radius: 20px;
    background-color: #fafafa;
    color: #212831;
    border-radius: 44px;
    margin: 5px 6px;
    cursor: pointer;
}
.login_xiao:active{
    background-color: rgba(241, 50, 50, 0.1);
    color: #f13232;
    border: 1px solid #f13232;
}
.tupian{
    width: 190px;
    height: 40px;
    margin-left: 215px;
    margin-top: 10px;
}
.tupian img{
    width: 185px;
    height: 85px;;
}
.imgs3{
   width: 402px;
   height: 611px;
   margin-left: 206px; 
   margin-top: 121px;
}
.deng{
    width: 400px;
    height: 50px;
    background-color: #b5b8bb;
    margin-top: -37px;
    border-radius: 0px 0px 12px 12px;
    text-align: center;
    line-height: 53px;
}
.resiger{
    width: 100%;
    height: 870px;
    background-color: red;
    position: relative;
    float: left;
}

.logon{
    width: 400px;
    height: 425px;
    float: right;
    margin: 123px 160px;
    background-color: white;
    border-radius: 3%;
}
.yanzheng{
    width: 120px;
    height: 42px;
    position: relative;
    float: right;
    font-size: 12px;
    color: #858c96;
    cursor: pointer;
}
.denglu{
    width: 300px;
    height: 42px;
    background-color:#f9f9fc ;
    border: none;
    color: #dddddd;
    border-radius: 44px;
    margin-top: 30px;
    font-size: 18px;
    outline: none;
}
.why{
    width: 300px;
    height: 42px;
    border-radius: 44px;
    text-align: center;
    line-height: 42px;
    margin-top: 30px;
    background-color: #f9f9fc;
}
.why input{
    outline: none;
    border: none;
    width: 100px;
    height: 41px;
    float: left;
    margin-left: 40px;
    background-color: #f9f9fc;
}
.new{
    width: 300px;
    height: 50px;
    font-size: 14px;
    text-align: center;
    line-height: 42px;
    color: #858c96;
}
.yanzheng1{
    width: 92px;
    height: 42px;
    position: relative;
    float: right;
    font-size: 12px;
    color: #858c96;
}
.denglu1{
    width: 300px;
    height: 42px;
    background-color:#f9f9fc ;
    border: none;
    color: #dddddd;
    border-radius: 44px;
    margin-top: 30px;
    outline: none;
    font-size: 18px;
}
.why1{
    width: 300px;
    height: 42px;
    border-radius: 44px;
    text-align: center;
    line-height: 42px;
    margin-top: 30px;
    background-color: #f9f9fc;
}
.why1 input{
    outline: none;
    border: none;
    width: 154px;
    height: 41px;
    float: left;
    margin-left: 40px;
    background-color: #f9f9fc;
}
.choose{
    width: 139px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    /* background-color: greenyellow; */
    border-radius: 5px;
    float: left;
    font-size: 22px;
    margin: 30px;
}
.CActive{
/* background-color: red; */
color:black ;
border:rgb(179, 123, 123);
}
.twomenu{
    clear: both;
    width: 313px;
    height: 270px;
    border-radius: 5px;
    margin: 42px;
}
.xuan{
    width: 430px;
    height: 540px;
    background-color: white;
    position: absolute;
    top: 180px;
    left: 447px;
    text-align: center;
    border-radius: 12px;
    /* display: none; */
}
.nianji{
    width: 120px;
    font-size: 24px;
    margin: 30px auto;
}
.nianji1{
    width: 150px;
    font-size: 24px;
    margin: -22px auto 16px;
    font-size: 18px;
}
.xiao{
    width: 51px;
    height: 40px;
    color: lightslategrey;
    line-height: 38px;
}
.xia{
    width: 345px;
    height: 350px;
    margin: 0px auto;
    overflow-y:scroll;
}
.tijiao{
    width: 200px;
    height: 50px;
    background-color: rgba(234, 71, 99, 1);
    color: white;
    border-radius: 44px;
    margin: 20px auto;
    line-height: 50px;
    text-align: center;
    outline: none;
    border: none;
    margin: 10px auto;
    margin-left: 95px;
}
</style>
