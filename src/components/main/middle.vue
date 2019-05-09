<template>
  <div class="total">
    <div class="frame">
      <div style="pic">
        <img height="300" width="500" src="../../../public/images/computer.jpg">
      </div>
      <div class="slogan">Save Anything. Read Anywhere.</div>
      <div class="account-button">
        <button class="button">Create an Account</button>
      </div>

      <!-- 登陆框 -->
      <div>
        <el-dialog
          title="Mark-Mouse"
          :visible.sync="loginDialogVisible"
          width="35%"
          :before-close="handleClose"
        >
          <p style="border-top-style:solid;border-width:1px;"></p>
          <div>
            <form>
              <span class="word">邮箱:</span>
              <input class="text" type="text" v-model="email">
              <span class="word">密码:</span>
              <input class="text" type="password" v-model="password">
              <input
                type="button"
                @click="login"
                class="login-register-button"
                style="margin-left:120px;"
                value="登陆"
              >
            </form>
          </div>
          <div style="margin-top:20px">
            <div style="margin-left:130px">
              <div style="display: inline-block">
                <span
                  @click="loginDialogVisible = false;registerDialogVisible =true"
                  style="display: inline-block;text-decoration:underline"
                >没有账号?</span>
              </div>
              <div style="display: inline-block">
                <el-checkbox v-model="remeber" style="display: inline-block;margin-left:150px">记住一周？</el-checkbox>
              </div>
            </div>
          </div>
        </el-dialog>
      </div>

      <!-- 注册框 -->
      <div>
        <el-dialog
          title="Mark-Mouse"
          :visible.sync="registerDialogVisible"
          width="35%"
          :before-close="handleClose"
        >
          <p style="border-top-style:solid;border-width:1px;"></p>
          <div>
            <form>
              <span class="word">邮箱:</span>
              <input class="text" type="text" v-model="email">
              <span class="word">密码:</span>
              <input class="text" type="password" v-model="password">
              <input
                type="button"
                class="login-register-button"
                style="margin-left:120px;"
                value="注册"
              >
            </form>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginDialogVisible: false, //登录框是否显示
      registerDialogVisible: false, //注册框是否显示
      email: "",
      password: "",
      remeber: false,
      warning: ""
    };
  },
  created() {
    this.bus.$on("sign-in", val => {
      this.loginDialogVisible = true;
    });
  },
  methods: {
    handleClose(done) {
      done();
    },
    login() {
      if (!this.email) {
        this.notification("邮箱不能为空", "warning");
      } else if (!this.password) {
        this.notification("密码不能为空", "warning");
      } else {
        let params = {
          email: this.email,
          password: this.password,
          remeber_me: this.remeber
        };
        this.$axiosPost(API.login, params).then(res => {
          if (res.code === "0") {
            //登录成功  跳转页面
            this.$store.commit("SET_UID", res.model.uid);
            this.$store.commit("SET_EMAIL", res.model.email);
            this.$store.commit("SET_LOGIN_STATUS", "");
            this.notification(res.msg, "success");
            this.$router.push({ path: "/u" });
          } else {
            //登录失败
            this.notification(res.msg, "error");
          }
        });
      }
    },
    notification(msg, type) {
      this.$notify({
        title: "Mark-Mouse",
        message: msg,
        type: type
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.total {
  height: 100%;
  width: 100%;
  .frame {
    height: 100%;
    width: 100%;
    text-align: center;
    .pic {
      height: 60%;
    }
    .slogan {
      font-size: 6em;
      height: 20%;
      padding-top: 0.75em;
    }
    account_button {
      height: 20%;
    }
  }
}

.word {
  color: black;
  margin-top: 25px;
  width: 120px;
  display: inline-block;
}
.text {
  background: #f2f2f2;
  border: none;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding-left: 5px;
  width: 300px;
  display: inline-block;
}

.login-register-button {
  background: black;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 5px;
  text-align: center;
  font-size: 15px;
  width: 307px;
}

.button {
  background-color: white;
  border: none;
  color: black;
  padding: 10px 15px;
  border: 1px solid black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2em;
  cursor: pointer;
  border-radius: 1em;
}

.button:hover {
  background-color: black;
  color: white;
}
</style>