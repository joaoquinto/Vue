<template>
  <div id="app">
    <modal-principal-vue>
      <!-- usando slot -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        asperiores eos harum nulla illo placeat, laboriosam error voluptates
        animi fuga fugit consequuntur minima ratione cum impedit accusantium
        quam veritatis omnis!
      </p>
      <button>Enviar</button>
      <!-- Utilizando named slot
        Atalho named slot
       -->
      <template #header>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </template>
      <template v-slot:footer>
        <footer>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </footer>
      </template>
      <!-- Utilizando atributo do slot 
      O v-slot pode ser subistituido por #
      -->
      <template v-slot:userData="user">
        <ul>
          <li v-for="(item, index) in user" :key="index" >
            {{item.nome}}
            {{item.idade}}
          </li>
        </ul>
      </template>
    </modal-principal-vue>
  </div>
</template>

<script>
import ModalPrincipalVue from "../../vue-cli/app-vue/src/components/ModalPrincipal.vue";

export default {
  components: {
    ModalPrincipalVue,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
