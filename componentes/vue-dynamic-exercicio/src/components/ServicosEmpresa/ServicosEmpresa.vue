<template>
  <div>
    <h1 class="titulo_servicos">Serviços</h1>
    <ul>
      <li v-for="(servico, index) in servicos" :key="index">
        <p>{{ servico.nome }}</p>
        <img :src="servico.img" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ServicosEmpresa",
  data() {
    return {
      servicos: [
        {
          nome: "Galope de 3 cilindros",
          img: null,
        },
        {
          nome: "Galope com nitro de flama",
          img: null,
        },
        {
          nome: "Galope corrompido",
          img: null,
        },
      ],
    };
  },
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/do-futuristic");

.titulo_servicos {
  text-transform: uppercase;
  font-family: "DO Futuristic", sans-serif;
  text-align: center;
}
</style>