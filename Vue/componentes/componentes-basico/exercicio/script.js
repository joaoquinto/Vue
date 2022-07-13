import Apple from "./Apple.js";
import Weather from "./Weather.js";

Vue.component("weather", Weather);

const vm = new Vue({
  el: "#app",
  components: {
    Apple,
  },
});
