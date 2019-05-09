<template>
  <div class="total" @mouseover="mouseover" @mouseout="mouseout">
    <div class="left">
        <el-tooltip content="标记已读" placement="left-end">
      <img height="20" width="20" v-show="this.isread === 0" @click="isread_alert()" src="../../../public/images/unread.png" style="padding-right:20px"></el-tooltip>
      <el-tooltip content="标记未读" placement="left-start"><img height="20" width="20" v-show="this.isread === 1" @click="isread_alert()" src="../../../public/images/readed.png" style="padding-right:20px"></el-tooltip>
      <span @click="jumptoContent">{{title}}</span>
    </div>
    <div class="right" v-show="middle_div_show">
      <el-tooltip content="编辑">
        <img
          height="17"
          width="17"
          src="../../../public/images/edit.png"
          style="padding-left:20px;padding-right:20px"
        >
      </el-tooltip>

      <el-tooltip content="分类">
        <img
          height="17"
          width="17"
          src="../../../public/images/classification.png"
          style="padding-left:20px;padding-right:20px"
        >
      </el-tooltip>
      <el-tooltip content="删除">
        <img
          height="17"
          width="17"
          src="../../../public/images/delete.png"
          style="padding-left:20px;padding-right:20px;"
        >
      </el-tooltip>
    </div>
    <div class="right" v-show="!middle_div_show">
      <div style="display: inline-block;">{{this.host}}</div>
      <div style="display: inline-block;margin-left:25px;">{{this.format_date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      middle_div_show: false
    };
  },
  props: ["isread", "title", "host", "date", "url", "bmid"],
  methods: {
    mouseover() {
      this.middle_div_show = true;
    },
    mouseout() {
      this.middle_div_show = false;
    },
    jumptoContent() {
      window.open(this.url); //新建页面跳转
    },
    isread_alert: function(){
        if(this.isread === 0){
            this.isread = 1
        }else{
            this.isread = 0
        }
    }
  },
  computed: {
    format_date: function() {
      return Utils.date.timestamp2date(this.date);
    }
  }
};
</script>

<style lang='scss' scoped>
.total {
  height: 100%;
  width: 70%;
  margin-left: 15%;
  margin-right:15%;
  //   padding-bottom: 5px;
  .left {
    height: 100%;
    width: 35%;
    display: inline-block;
    font-size: 15px;
  }
  .right {
    height: 100%;
    width: 35%;
    text-align: right;
    display: inline-block;
    font-size: 5px;
    vertical-align: top;
    color: gray;
  }
}
</style>


