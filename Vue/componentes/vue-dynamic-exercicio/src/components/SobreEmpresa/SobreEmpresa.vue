<template>
  <div>
    <h1 class="titulo_empresa">IronNeck</h1>
    <p class="sobre_empresa">
      IronNeck é uma empresa que vende e produz
      <strong>Galopes</strong> modificados
    </p>
    <footer>
      Todos os direitos reservados para a <strong>IronNeck</strong>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SobreEmpresa",
};
</script>

<style>
@import url("http://fonts.cdnfonts.com/css/do-futuristic");

.titulo_empresa {
  text-transform: uppercase;
  font-family: "DO Futuristic", sans-serif;
  text-align: center;
}

.sobre_empresa {
  font-family: monospace;
  text-align: center;
  font-size: 1.6rem;
}

footer {
  text-align: center;
}
</style>