<template>
  <div>
    <div class="head-left">
      <div class="cbm_title" style="margin-top:20px;margin-left:30px">Mark-Mouse</div>
    </div>
    <div class="head-right">
      <div v-if="bLogin === 'false'" @click="sendMsg" class="cbm-sign-in" style="text-align:right;margin-right:80px;margin-top:25px">Sign in</div>
      <div v-if="bLogin === 'true'" class="cbm-sign-in" style="text-align:right;margin-right:80px;margin-top:25px">{{email}}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendMsg() {
      //通过emit触发事件，并传值
      this.bus.$emit("sign-in", "zhangweiqing");
    }
  },
  computed:{
    bLogin : function(){
      return this.$store.state.cbm_login;
    },
    email : function(){
      return this.$store.state.user.email;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>




