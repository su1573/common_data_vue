<template>
  <div class="login-container">
    <div class="logo-wrap">
      <!-- <img
        :src="require("@/assets/images/" + $config.system.loginLogo)"
        class="logo_a"
        alt=""
      />-->
    </div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <h3 class="title">{{ $config.system.name }}</h3>
      <el-form-item prop="username">
        <i class="iconfont icon-icon_zhanghao login-icon" />
        <el-input
          v-model="loginForm.username"
          name="username"
          type="text"
          auto-complete="on"
          placeholder="请输入账号"
        />
      </el-form-item>
      <el-form-item prop="password">
        <i class="iconfont icon-password login-icon"/>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="密码(不少于5位)"
        />
        <span class="show-pwd" @click="showPwd">
          <i :class="isshowPwd ? 'icon-eye-on' : 'icon-eye-off'" class="iconfont login-icon"/>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >登 录</el-button>
      </el-form-item>
      <div class="tips">
        <span style="margin-right:20px;">账号: admin</span>
        <span>密码: 111111</span>
      </div>
    </el-form>
  </div>
</template>

<script>
//设置cookie
/**
 * 设置cookie
 * name cookie的名称
 * value cookie的值
 * day cookie的过期时间
 */
export function setCookie(name, value, hours) {
  var d = new Date();
  if (hours != 0) {
    d.setTime(d.getTime() + 60 * 60 * 1000 * hours);
  }
  window.document.cookie =
    name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
export function removeCookie() {
  setCookie("jwttoken", "", 0);
  setCookie("token", "", 0);
}

export default {
  name: "Login",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", message: "请输入账号" }],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      },
      loading: false,
      pwdType: "password",
      redirect: undefined,
      isshowPwd: false
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      this.isshowPwd = !this.isshowPwd;
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      removeCookie();
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$api.User.login(
            {
              userName: this.loginForm.username,
              passWord: this.loginForm.password
            },
            result => {
              if (result.data.code !== 0) {
                this.$alert(result.data.msg, { type: "error" });
                this.loading = false;
              } else if (result.status === 200) {
                var jwttoken = result.headers.jwttoken;
                setCookie("jwttoken", jwttoken, 24);
                this.loading = false;
                this.$store
                  .dispatch("Login", this.loginForm.username)
                  .then(() => {
                    this.loading = false;
                    this.$router.push({ path: this.redirect || "/" });
                  })
                  .catch(error => {
                    this.loading = false;
                    this.$alert(error, { type: "error" }).catch(() => {});
                  });
              } else {
                this.loading = false;
                this.$alert(result.data.msg, { type: "error" });
              }
            },
            erro => {
              this.loading = false;
              this.$alert(erro, { type: "error" });
            }
          );
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;

$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$formbg: #044c71;
$dark_gray: #889aa4;
$light_gray: #eee;
$bg: #cfedff;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  background-image: url(../../assets/images/login-bg.jpg);
  .logo-wrap {
    margin: 20px 0 0 20%;
  }
  .login-form {
    background: $formbg;
    border-radius: 15px;
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px;
    margin-top: 13%;
    margin-left: 55%;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container,
  .login-icon {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    font-size: 20px;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 15px;
    top: 0;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
