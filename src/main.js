import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from '@vueuse/motion'

import App from "./App.vue";
import VueTilt from "vue-tilt.js";

const app = createApp(App);

app.use(createPinia());
app.use(MotionPlugin)
app.use(VueTilt);
app.mount("#app");

export { app };
