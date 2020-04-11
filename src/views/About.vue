<template>
  <div class="about">
    <h1>{{food}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type: String,
      default: "香蕉"
    }
  }
};
</script>