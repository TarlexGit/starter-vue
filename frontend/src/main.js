import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import "./src/assets/index.css"; // Tailwind CSS

import "./assets/main.css";

createApp(App).use(router).mount("#app");
