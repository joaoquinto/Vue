import Formulario from "./components/Formulario.js";
import ShowEmpresa from "./components/ShowEmpresa.js";

Vue.component("SimboloEmpresa", Formulario);

const vm = new Vue({
  el: "#app",
  data:{
    empresa: ""
  },
});
