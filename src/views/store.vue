<template>
  <div>
    {{$store.state.appName}}==={{appName}}
    <h3>userName:{{$store.state.user.userName}}==={{userName}}</h3>
    <h2>appNameVision:{{$store.getters.appNameVision}}</h2>
    <h4>appNameVision:{{appNameVision}}</h4>
    <h1>firstLetter:{{firstLetter}}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "store",
  computed: {
    // appName() {
    //   return this.$store.state.appName;
    // },
    // ...mapState({
    //   appName(state) {
    //     return state.appName;
    //   },
    //   userName(state){
    //       return state.user.userName
    //   }
    // })
    ...mapState(["appName"]),
    ...mapState({
      userName(state) {
        return state.user.userName;
      }
    }),
    ...mapGetters(['appNameVision','firstLetter'])
  }
};
</script>

<style>
</style>