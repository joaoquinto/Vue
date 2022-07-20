<template>
  <div id="app">
    <transition-vue />
    <modal-vue />
    <componentes-vue />
  </div>
</template>

<script>
import ComponentesVue from "./components/Componentes.vue";
import ModalVue from "./components/Modal.vue";
import TransitionVue from "./components/Transition.vue";

export default {
  name: "App",
  components: {
    TransitionVue,
    ModalVue,
    ComponentesVue,
  },
};
</script>

<style>
</style>
