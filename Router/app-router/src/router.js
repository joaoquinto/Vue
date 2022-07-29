import Vue from "vue";
/* Importando o package vue-router */
import Router from "vue-router";
/* Importando componentes para utilizar nas rotas */
import HomeVue from "./views/Home.vue";
import CursosVue from "./views/Cursos.vue";

/* Informando que o package vai ser utilizado */
Vue.use(Router);

/*
 * Exportando instância do vue-router
 * Essa instância irá receber os Propriedades das rotas
 */
export default new Router({
  mode: "history",
  /*
   * Propriedade que vai receber as namedRoutes
   * Recebe um array e cada rota vai ser declarada dentro de um objeto
   */
  routes: [
    {
      /* Caminho da rota */
      path: "/",
      /* Componente que será utilizado quando a rota for selecionado */
      component: HomeVue,
    },
    {
      path: "/cursos/:curso",
      component: CursosVue,
      /* Os params podem ser utilizados como props */
      props: true,
    },
    {
      path: "/cursos/",
      component: CursosVue,
    },
  ],
});
