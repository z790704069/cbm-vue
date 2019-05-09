<template>
  <div class="total">
    <div v-if="this.bHome === false" class="frame">
      <div class="top">
        <div class="top_line">
          <img height="16" width="16" src="../../../public/images/home.png">
          <span style="margin-left:0.5em" @click="click_home()">Home</span>
        </div>
        <div class="top_line" @click="click_unread()">
          <img height="16" width="16" src="../../../public/images/unread.png">
          <span style="margin-left:0.5em">Unread</span>
        </div>
        <div class="top_line" @click="click_readed()">
          <img height="16" width="16" src="../../../public/images/readed.png">
          <span style="margin-left:0.5em">Readed</span>
        </div>
        <div class="top_line" @click="clicked_liked()">
          <img height="16" width="16" src="../../../public/images/like.png">
          <span style="margin-left:0.5em">Liked</span>
        </div>
      </div>
      <p style="border-bottom-style:solid;border-width:1px;width:60%;border-color:#E1DEDD;"></p>
      <div class="middle"></div>
      <div class="buttom"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bHome: true
    };
  },
  created: function() {
    if (this.$route.path != "/") {
      this.bHome = false;
    }
  },
  methods: {
    click_home() {
      this.$router.replace({ path: "/u", query: { iRead: -1 } });
    },
    click_unread() {
      this.$router.replace({ path: "/u", query: { iRead: 0 } });
    },
    click_readed() {
      this.$router.replace({ path: "/u", query: { iRead: 1 } });
    },
    click_liked() {}
  }
};
</script>

<style lang="scss" scoped>
.total {
  height: 100%;
  width: 100%;
  .frame {
    height: 100%;
    width: 60%;
    margin-left: 30%;
    .top {
      height: 30%;
      font-size: 1.5em;
      .top_line {
        margin-top: 1.5em;
      }
    }
    .middle {
      height: 50%;
    }
    .buttom {
      height: 20%;
    }
  }
}
</style>