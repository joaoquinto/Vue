<template>
  <div class="modal">
    <h1>{{ user }}</h1>
    <!-- passando data do filho para o componente pai por slot -->
    <slot name="userData" :user="user"></slot>
    <!-- Named slot são usados quando se tem mais de um slot -->
    <slot name="header"></slot>
    <!-- Slot serve para poder colocar novos elementos dentro do componente, sem que ele precise estar no componente raiz -->
    <slot name="footer"></slot>
  </div>
</template>


<script>
export default {
  name: "ModalPricipal",
  data() {
    return {
      user: {
        nome: "Andre",
        idade: 30,
      },
    };
  },
};
</script>

<style>
</style>