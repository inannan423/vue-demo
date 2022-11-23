import Vue from "vue";
import VueRouter from "vue-router";
// 引入两个页面
// highlight-start
import Home from "../views/home.vue"; // 😊
import About from "../views/about.vue"; // 😊
// highlight-end

Vue.use(VueRouter);

const routes = [
  // 规定页面的路径及名称
  // highlight-start
  {
    path: "/", // 路径
    name: "Home", // 名称
    component: Home, // 依赖的组件，必须和上面的 😊 处一致
  },
  {
    path: "/about", // 路径
    name: "About", // 名称
    component: About, // 依赖的组件，必须和上面的 😊 处一致
  },
  // highlight-end
];

const router = new VueRouter({
  routes,
});

export default router;
