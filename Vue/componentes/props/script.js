/* Importando o options do Componente SimboloEmpresa */
import Formulario from "./components/Formulario.js";

/* Declarando Globalmente o componente SimboloEmpresa */
Vue.component("SimboloEmpresa", Formulario);

const vm = new Vue({
  el: "#app",
  data:{
    empresa: ""
  },
});
