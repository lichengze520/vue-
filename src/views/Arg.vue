<template>
  <div>路由参数{{name}}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "空"
    }
  }
};
</script>

<style>
</style>