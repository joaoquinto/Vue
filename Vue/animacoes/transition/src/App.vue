<template>
  <div id="app">
    <transition-vue />
    <modal-vue />
  </div>
</template>

<script>
import ModalVue from "./components/Modal.vue";
import TransitionVue from "./components/Transition.vue";

export default {
  name: "App",
  components: {
    TransitionVue,
    ModalVue,
  },
};
</script>

<style>
</style>
