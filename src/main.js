import { createApp } from "vue";
import { createGtm } from "@gtm-support/vue-gtm";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

//implement google tag manager

app.use(
  createGtm({
    id: "GTM-NKK4SZP",
    enabled: true,
    debug: true,
    vueRouter: router,
    ignoredViews: [],
  })
);

app.mount("#app");
