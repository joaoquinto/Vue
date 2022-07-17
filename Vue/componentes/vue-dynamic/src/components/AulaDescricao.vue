<template>
  <div>
    <h1>Aula Descrição</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      suscipit, natus nostrum provident rerum aliquam veritatis soluta? Saepe
      enim ipsa sunt temporibus consectetur perferendis dolorem cumque quo
      reiciendis, nulla magni.
    </p>
  </div>
</template>

<script>
export default {
  name: "AulaDescricao",
    destroyed() {
    console.log(`O componente AulaDescricao foi destruido`);
  },
};
</script>

<style>
</style>