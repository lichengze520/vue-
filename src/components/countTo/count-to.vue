<template>
  <div class="flex">
    <span slot="left"></span>
    <countTo :startVal="startVal" ref="number" :endVal="endVal" :duration="3000"></countTo>
    <span slot="right"></span>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  props: {
    /**
     * @description 开始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 结束值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 动画延迟开始时间
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用变速效果
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号
     */
    separator: {
      type: String,
      default: ","
    },
    /**
     * @description 整数和小数分割符号
     */
    decimal: {
      type: String,
      default: "."
    },
    className: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getCount();
    });
  },
  methods: {
    // 获取值
    getCount() {
      console.log(this.$refs.number.innerText);
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
}
</style>