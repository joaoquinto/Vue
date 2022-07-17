<template>
  <div>
    <p>Faça o download dos arquivos</p>
    <button>download</button>
  </div>
</template>

<script>
export default {
  name: "AulaDownload",
  destroyed() {
    console.log(`O componente AulaDownload foi destruido`);
  },
};
</script>

<style>
</style>