import { createApp } from "vue";
import Vant from "vant";
import router from "./router/index";
import App from "./App.vue";
import "vant/lib/index.css";
import 'virtual:windi.css'
const app = createApp(App);
app.use(router);
app.use(Vant);
app.mount("#app");
