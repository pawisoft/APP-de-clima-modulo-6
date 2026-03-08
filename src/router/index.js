import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detalle from "../views/Detalle.vue";
import WeatherService from "../Services/WeatherService";
const servicioClima = new WeatherService("9e72502893bebfbdbaf613b79059d691");

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/lugar/:nombre", name: "Detalle", component: Detalle }
];

export default createRouter({
  history: createWebHistory(),
  routes
});

