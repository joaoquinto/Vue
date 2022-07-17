<template>
  <div id="app">
    <button @click="ativo = !ativo">clique</button>
    <transition name="fade">
      <h1 v-if="ativo">Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ativo: false,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
