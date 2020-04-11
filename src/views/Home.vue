<template>
  <div class="home">
    {{food}}
    <el-button type="primary" @click="handclick('back')">返回上一页</el-button>
    <el-button type="primary" @click="handclick('push')">跳转到parent</el-button>
    <el-button type="primary" @click="handclick('repalce')">替换到parent</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  methods: {
    handclick(type) {
      if (type === "back") {
        this.$router.back();
      } else if (type === "push") {
        this.$router.push({
          name: "Arg",
          params: {
            name: "lison"
          }
        });
      } else if (type === "repalce") {
        this.$router.replace("/parent");
      }
    }
  }
};
</script>
