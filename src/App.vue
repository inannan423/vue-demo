<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <router-link to="/"
        ><el-menu-item index="1">Home</el-menu-item></router-link
      >
      <router-link to="/about"
        ><el-menu-item index="2">About</el-menu-item></router-link
      >
    </el-menu>
    <router-view />
  </div>
</template>

<script>
import router from "./router/index.js"; // 😊

export default {
  name: "App",
  router, // 😊
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
