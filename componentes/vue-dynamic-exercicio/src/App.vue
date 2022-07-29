<template>
  <div id="app">
    <!-- O custom event deve ser utilizado no componente -->
    <menu-empresa-vue @view-value="getViewFromMenu" />
    <keep-alive>
      <component :is="`${view}`"></component>
    </keep-alive>
  </div>
</template>

<script>
import FormularioEmpresaVue from "./components/FormularioEmpresa/FormularioEmpresa.vue";

import MenuEmpresaVue from "./components/MenuEmpresa/MenuEmpresa.vue";
import ServicosEmpresaVue from "./components/ServicosEmpresa/ServicosEmpresa.vue";
import SobreEmpresaVue from "./components/SobreEmpresa/SobreEmpresa.vue";

export default {
  data() {
    return {
      view: "",
    };
  },
  methods: {
    /* Metódo usado no custom event
      value: propriedade advinda do componente filho
    */
    getViewFromMenu(value) {
      this.view = value;
      console.log("foi");
    },
  },
  components: {
    MenuEmpresaVue,
    SobreEmpresaVue,
    FormularioEmpresaVue,
    ServicosEmpresaVue,
  },
};
</script>

<style>
</style>
