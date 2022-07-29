<template>
  <div>
    <transition mode="out-in">
      <p v-if="estoque > 0" key="estoque">
        Itens em estoque {{ estoque === 0 ? null : estoque }}
      </p>
      <p v-else key="esgotado">Produtos fora de estoque</p>
    </transition >
    <button @click="estoque++">Adicionar Estoque</button>
    <button @click="estoque = 0">Resetar estoque</button>
  </div>
</template>

<script>
export default {
  name: "componente-vue",
  data() {
    return {
      estoque: 1,
    };
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>