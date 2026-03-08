import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WeatherService from "./Services/WeatherService";
import "./assets/SCSS/main.scss";

// Clave de API
const MI_API_KEY = "9e72502893bebfbdbaf613b79059d691";
const servicioClima = new WeatherService(MI_API_KEY);

const app = createApp(App);
app.config.globalProperties.$service = servicioClima;

app.use(router);
app.mount("#app");