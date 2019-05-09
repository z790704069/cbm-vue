<template>
  <div class="total">
    <div class="frame" v-for="bm in this.book_marks" :key="bm.bmid">
      <v_book_mark
        :isread="bm.isRead"
        :title="bm.title"
        :host="bm.host"
        :date="bm.createTime"
        :url="bm.url"
        :bmid="bm.bmid"
      ></v_book_mark>
      <p
        style="border-bottom-style:solid;border-width:1px;width:70%;margin-left: 15%;border-color:#E1DEDD;"
      ></p>
    </div>
  </div>
</template>

<script>
import book_mark from "./book-mark";
export default {
  data() {
    return {
      book_marks: []
    };
  },
  components: {
    v_book_mark: book_mark
  },
  created: function() {
    let params = {
      page: 1,
      limit: 10,
      iRead: this.$route.query.iRead
    };
    this.$axiosGet(API.bookmarks, params).then(res => {
      if (res.code === "0") {
        //获取书签成功
        this.book_marks = res.model;
      } else {
        //获取书签失败
        console.log(res.msg);
      }
    });
  },
  watch: {
    $router(to, from) {
        console.log('route')
      let params = {
        page: 1,
        limit: 10,
        iRead: this.$route.query.iRead
      };
      this.$axiosGet(API.bookmarks, params).then(res => {
        if (res.code === "0") {
          //获取书签成功
          this.book_marks = res.model;
        } else {
          //获取书签失败
          console.log(res.msg);
        }
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
  }
}
</style>

