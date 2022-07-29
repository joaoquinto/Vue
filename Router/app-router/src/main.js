import Vue from "vue";
import App from "./App.vue";
/* Importando o arquivo router  */
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  /*
   * É necessário chamar no main para o sistema ter noção de quais são as rotas
   * assim que o app foi renderizado
   */
  router,
  render: (h) => h(App),
}).$mount("#app");
