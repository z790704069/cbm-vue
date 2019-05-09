<template>
  <div id="page-defalut" class="page-default">
    <v-head class="head"></v-head>
    <div class="content">
      <v-left class="content-left"></v-left>
      <!-- <v-middle class="content-middle"></v-middle> -->
      <div class="content-middle">
        <router-view></router-view>
      </div>
      <v-right class="content-right"></v-right>
    </div>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
import head from "@/components/main/head";
import footer from "@/components/main/footer";
import left from "@/components/main/left";
import right from "@/components/main/right";
export default {
  components: {
    "v-head": head,
    "v-footer": footer,
    "v-left": left,
    "v-right": right
  }
};
</script>

<style>
</style>

