<template>
  <div>
    <p class="inputStyle">
      <input type="text" :value="inputValue" @input="changInputValue" />
      <br />
      {{inputValue}}
    </p>
    {{$store.state.appName}}==={{appName}}
    <h3>userName:{{$store.state.user.userName}}==={{userName}}</h3>
    <h2>appNameVision:{{$store.getters.appNameVision}}</h2>
    <h4>appNameVision:{{appNameVision}}</h4>
    <h1>firstLetter:{{firstLetter}}</h1>
    <button @click="setAppName('张入月')">设置appName</button>
    <button @click="getAppVerition">获取版本型号</button>
    <h2>{{appVersion}}</h2>
    <button @click="updateAppName">更新appName</button>
    <button @click="changeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "store",
  data() {
    return {};
  },
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
    ...mapState(["appName", "appVersion", "inputValue"]),
    ...mapState({
      userName(state) {
        return state.user.userName;
      },
      todoList: state => (state.user.todo ? state.user.todo.todoList : [])
    }),
    ...mapGetters(["appNameVision", "firstLetter"])
  },
  methods: {
    // setAppName(param) {
    //   this.$store.commit("SET_APP_NAME", param);
    // }
    // setAppName(param) {
    //   this.$store.commit({
    //     type: "SET_APP_NAME",
    //     param: param
    //   });
    // }
    ...mapMutations([
      "SET_APP_NAME",
      "SET_APP_VERSION",
      "SET_USER_NAME",
      "UPDATE_INPUT_VALUE"
    ]),
    ...mapActions(["upDateAppName"]),
    setAppName(param) {
      // this.SET_APP_NAME(param);
      this.SET_USER_NAME(param);
    },
    getAppVerition() {
      this.SET_APP_VERSION();
    },

    updateAppName() {
      this.upDateAppName();
      // this.$store.dispatch("upDateAppName");
    },

    changeUserName() {
      // this.SET_USER_NAME("vue-cource");
      this.$store.dispatch("upDateAppName", "123");
    },
    registerModule() {
      this.$store.registerModule(["user", "todo"], {
        state: {
          todoList: ["学习mutations", "学习actions"]
        }
      });
    },
    changInputValue(e) {
      this.UPDATE_INPUT_VALUE();
    }
  }
};
</script>

<style>
.inputStyle {
  border: 1px solid red;
  line-height: 50px;
}
</style>