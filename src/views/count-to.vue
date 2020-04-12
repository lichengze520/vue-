<template>
  <div>
    <slot name="left">总金额</slot>
    <countTo :endVal="endVal" :duration="3000"></countTo>
    <slot name="right">元</slot>
    <button @click="updateVal">更新值</button>
  </div>
</template>

<script>
import countTo from "@/components/countTo";
export default {
  components: { countTo },
  data() {
    return {
      endVal: 10
    };
  },
  methods: {
    updateVal() {
      this.endVal += Math.random() * 100;
    }
  }
};
</script>

<style>
</style>