import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import "./assets/3b3b09c282762cc94f6a.css";
import "./assets/5ce4a2900532c8befab9.css";
import "./assets/d86452c3b396e07707ff.css";
import "./assets/fa8f249ef16eecbdaeb1.css";

Vue.config.productionTip = false;

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
