<template>
  <div id="app">
    <!-- 命名视图 -->
    <router-view />
    <router-view name="tel" />
    <router-view name="email" />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="less">
</style>
