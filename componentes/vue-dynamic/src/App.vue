<template>
  <div id="app">
    <!-- obs: O vue cria uma nova instância do componente toda vez que ele é modificado use keep-alive para modificar isso -->
    <button @click="componenteAtivo = 'AulaDescricaoVue'">Descrição</button>
    <button @click="componenteAtivo = 'AulaDownloadVue'">Download</button>
    <!-- Não destroi o componente quando ele fica inativo -->
    <keep-alive>
      <!-- Transforma a visualização dos componentes em dinamica -->
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricaoVue from "./components/AulaDescricao.vue";
import AulaDownloadVue from "./components/AulaDownload.vue";

export default {
  data() {
    return {
      componenteAtivo: "AulaDescricaoVue",
    };
  },
  components: {
    AulaDownloadVue,
    AulaDescricaoVue,
  },
};
</script>

<style>
</style>
