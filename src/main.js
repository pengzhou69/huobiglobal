import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "view-design/dist/styles/iview.css";
import "./assets/3b3b09c282762cc94f6a.css";
import "./assets/5ce4a2900532c8befab9.css";
import "./assets/d86452c3b396e07707ff.css";
import "./assets/fa8f249ef16eecbdaeb1.css";
import './assets/60cbbf79f11d519f1e6d.css';
import "./assets/my_market.abc1c4b0b249af6fa20542bf4970401f.css";
import "./assets/5b10142106f054ed72f0.css";
import "./assets/62aa444441c0a4fb4ac2.css";
import './assets/main.0ca7529e.css';
import "./assets/font/font.css";

Vue.config.productionTip = false;

Vue.use(ViewUI);
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
