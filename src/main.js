import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/base.scss";
import installIcons from "@/icons/index.js"; //全局引入内容svg的icon

const app = createApp(App);
installIcons(app); //赋值给 svg的icon组件 完成全局注册组件
app
  .use(ElementPlus, { size: "default", zIndex: 3000 })
  .use(store)
  .use(router)
  .mount("#app");
