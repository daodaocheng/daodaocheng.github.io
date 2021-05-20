<template>
    <div class="container" style="position: relative;">
        <div class="ht-content">
            <div class="ht-login">
                <div class="ht-login-header">
                    <div class="ht-login-header-title">欢迎登录</div>
                </div>
                <div class="ht-login-content">
                    <div id="app_login">
                        <div class="ht_login_input">
                            <img class="img_mine" src="../../assets/imgs/mine.png">
                            <input
                                v-model="formLogin.messageUserName"
                                class="ht_login_input_detail"
                                type="text"
                                placeholder="请输入您的账号"
                            >
                        </div>
                        <div class="ht_login_input input_pswd">
                            <img class="img_mima" src="../../assets/imgs/mima.png">
                            <input
                                v-model="formLogin.messagePassword"
                                class="ht_login_input_detail"
                                type="password"
                                placeholder="请输入您的密码"
                            >
                        </div>
                        <div class="ht_login_content_bottom">
                            <div class="checkbox">
                                <input v-model="formLogin.checked" id="remember" type="checkbox">
                                <label for="remember">记住账号</label>
                            </div>
                            <button @click="forgetPswd" class="ht_login_forget_btn">忘记密码？</button>
                        </div>
                    </div>
                </div>
                <div class="ht-login-footer">
                    <button @click="loginNavigate" class="ht-login-footer-btn">安全登录</button>
                </div>
                <div class="ht-login-bordrt-left"></div>
                <div class="ht-login-bordrt-bottom"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Login",
  setup () {
    const formLogin = ref({
      messageUserName: "",
      messagePassword: "",
      checked: false
    })
    let loginNavigate = () => {
      if (formLogin._value.messageUserName == "") {
        alert("用户名不能为空！");
      } else {
        if (formLogin._value.messagePassword == "") {
          alert("密码不能为空！");
        } else {
          let data = {
            loginEmail: formLogin._value.messageUserName,
            password: formLogin._value.messagePassword
          };
          this.$axios({
            url: this.$api.login,
            method: "post",
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            },
            data: this.$qs.stringify(data)
          }).then(res => {
            console.log(res);
            if (res.data == "success") {
              this.$router.push({
                path: "/administrative"
              });
            } else if (res.data == "toRegister") {
              alert("该账号不存在！");
            } else {
              alert("登录失败！");
            }
          });
          // 储存登录信息
          this.setUserInfo();
        }
      }
    };
    let loginNavigate = () => {
      if (formLogin._value.messageUserName == "") {
        alert("用户名不能为空！");
      } else {
        if (formLogin._value.messagePassword == "") {
          alert("密码不能为空！");
        } else {
          let data = {
            loginEmail: formLogin._value.messageUserName,
            password: formLogin._value.messagePassword
          };
          this.$axios({
            url: this.$api.login,
            method: "post",
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            },
            data: this.$qs.stringify(data)
          }).then(res => {
            console.log(res);
            if (res.data == "success") {
              this.$router.push({
                path: "/administrative"
              });
            } else if (res.data == "toRegister") {
              alert("该账号不存在！");
            } else {
              alert("登录失败！");
            }
          });
          // 储存登录信息
          this.setUserInfo();
        }
      }
    };
    return{
      formLogin
    }
  },
  methods: {
    loginNavigate() {
      if (formLogin._value.messageUserName == "") {
        alert("用户名不能为空！");
      } else {
        if (formLogin._value.messagePassword == "") {
          alert("密码不能为空！");
        } else {
          let data = {
            loginEmail: formLogin._value.messageUserName,
            password: formLogin._value.messagePassword
          };
          this.$axios({
            url: this.$api.login,
            method: "post",
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            },
            data: this.$qs.stringify(data)
          }).then(res => {
            console.log(res);
            if (res.data == "success") {
              this.$router.push({
                path: "/administrative"
              });
            } else if (res.data == "toRegister") {
              alert("该账号不存在！");
            } else {
              alert("登录失败！");
            }
          });
          // 储存登录信息
          this.setUserInfo();
        }
      }
    },
    setUserInfo() {
      if (formLogin._value.checked) {
        var loginId = JSON.stringify(formLogin._value.messageUserName);
        localStorage.setItem('idStr', loginId);
      } else {
        localStorage.setItem('idStr', "");
      }
    },
    // 忘记密码弹窗
    forgetPswd() {
      alert("请联系客服修改密码！");
    }
  },
  created() {
    var username = JSON.parse(localStorage.idStr);
    if (username && username != "") {
      //从localStorage中读取登录账号
      formLogin.value.messageUserName = username;
      formLogin.value.checked = true;
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
.container {
  background: url("../../assets/imgs/login_background.png") no-repeat;
  width: 1520px;
  height: 960px;
  .ht-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // 整个登录框
    .ht-login {
      display: block;
      width: 623px;
      height: 566px;
      position: relative;
      background: url("../../assets/imgs/login_content_background.png")
        no-repeat;
      border-top: url("");
      // 登录框头部标题
      .ht-login-header {
        width: 100%;
        height: 148px;
        display: flex;
        justify-content: center;
        .ht-login-header-title {
          display: block;
          width: auto;
          height: 34px;
          margin-top: 74px;
          text-align: center;
          font-family: SourceHanSansCN-Light;
          letter-spacing: 6px;
          font-size: 30px;
        }
      }
      // 登录框中间表单
      .ht-login-content {
        display: flex;
        justify-content: center;
        width: 100%;
        .ht_login_input {
          display: block;
          display: flex;
          flex-direction: row;
          width: 450px;
          height: 63px;
          background: #1171b482;
          border: 1px solid #6eeffc;
          .img_mine {
            width: 24px;
            height: 25px;
            margin-left: 17px;
            margin-top: 18px;
            margin-right: 20px;
          }
          .img_mima {
            width: 21px;
            height: 27px;
            margin-left: 19px;
            margin-top: 18px;
            margin-right: 18px;
          }
          .ht_login_input_detail {
            width: 390px;
            background: transparent;
            border: none;
            color: #fff;
            caret-color: #6eeffc; /*光标颜色*/
            font-size: 18px;
          }
          .ht_login_input_detail:focus {
            border: none;
            outline: none;
            color: #fff;
          }
          .ht_login_input_detail:link {
            border: none;
            outline: none;
            color: #fff;
          }
          .ht_login_input_detail:visited {
            border: none;
            outline: none;
            color: #fff;
          }
          .ht_login_input_detail:hover {
            border: none;
            outline: none;
          }
          .ht_login_input_detail:active {
            border: none;
            outline: none;
            color: #fff;
          }
          > input::-webkit-input-placeholder {
            /*Webkit browsers*/
            color: #fff;
            font-family: SourceHanSansCN-Light;
          }
          　　 > input:-moz-placeholder {
            /*Mozilla Firefox 4 to 8*/
            color: #fff;
            font-family: SourceHanSansCN-Light;
          }
          　　 > input::moz-placeholder {
            /*Mozilla Firefox 19+*/
            color: #fff;
            font-family: SourceHanSansCN-Light;
          }
          　　 > input:-ms-input-placeholder {
            /*Internet Explorer 10+*/
            color: #fff;
            font-family: SourceHanSansCN-Light;
          }
        }
        .input_pswd {
          margin-top: 19px;
        }
        // 登录框中间表单下方保存密码选项和忘记密码
        .ht_login_content_bottom {
          width: 365px;
          display: flex;
          flex-direction: row;
          position: relative;
          margin-top: 16px;
          .checkbox {
            height: 22px;
            border: 1px sold red;
            > input[type="checkbox"] {
              position: absolute;
              left: 6px;
              top: 0;
              width: 20px;
              height: 20px;
              opacity: 0;
            }
            > input[type="checkbox"] + label {
              left: 32px;
              top: 0;
              position: absolute;
              margin-right: 6px;
              height: 20px;
              line-height: 20px;
            }
            > input[type="checkbox"] + label:before {
              content: "";
              position: absolute;
              display: inline-block;
              vertical-align: middle;
              left: -28px;
              width: 16px;
              height: 16px;
              background: #1171b4;
              border: 1px solid #6eeffc;
            }
            > input[type="checkbox"]:checked + label::before {
              display: block;
              content: "\2714";
              text-align: center;
              font-size: 16px;
              color: white;
              background: #1171b4;
              border: 1px solid #6eeffc;
            }
            > input[type="checkbox"]:checked + label:after {
              background: #1171b4;
            }
          }
          .ht_login_forget_btn {
            border: none;
            background: transparent;
            color: #fff;
            font-size: 16px;
            position: absolute;
            right: 0px;
            display: inline-block;
            margin-right: -85px;
          }
        }
      }
      // 登录框头部底部登录按钮
      .ht-login-footer {
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 0px;
        .ht-login-footer-btn {
          display: block;
          position: absolute;
          width: 450px;
          height: 63px;
          margin-bottom: 132px;
          text-align: center;
          background-color: #46b0e2;
          border: none;
          color: #fff;
          font-family: SourceHanSansCN-Light;
          font-size: 26px;
          line-height: 63px;
        }
      }
      // 登录框边框亮斑
      .ht-login-bordrt-left {
        content: url("../../assets/imgs/border-left.png");
        position: absolute;
        top: 100px;
        left: -52px;
      }
      .ht-login-bordrt-bottom {
        content: url("../../assets/imgs/border-top.png");
        position: absolute;
        bottom: -57px;
        left: 176px;
      }
    }
    .ht-login:before {
      content: url("../../assets/imgs/border-top.png");
      position: absolute;
      top: -54px;
      right: 161px;
    }
    .ht-login:after {
      content: url("../../assets/imgs/border-left.png");
      position: absolute;
      bottom: 99px;
      right: -54px;
    }
  }
}
</style>
