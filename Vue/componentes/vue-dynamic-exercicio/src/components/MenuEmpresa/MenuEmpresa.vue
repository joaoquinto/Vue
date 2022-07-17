<template>
  <header>
    <nav>
      <ul>
        <li>
          <button @click="mudarView">Sobre</button>
        </li>
        <li>
          <button @click="mudarView">Serviços</button>
        </li>
        <li>
          <button @click="mudarView">Formulário</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MenuEmpresa",
  data() {
    return {
      view: "",
    };
  },
  methods: {
    mudarView(event) {
      const validate = event.currentTarget.innerText.toLowerCase();
      if (validate == "sobre") {
        this.view = "SobreEmpresaVue";
      } else if (validate == "serviços") {
        this.view = "ServicosEmpresaVue";
      } else if (validate == "formulário") {
        this.view = "FormularioEmpresaVue";
      }
      /* Cria o custom event
        parm 1: nome do custom event
        parm 2: value a ser passado para o elemento pai
      */
      this.$emit("view-value", this.view);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

li + li {
  margin-left: 20px;
}

button {
  cursor: pointer;
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  transition: 1s;
}

button:hover {
  background-color: darkturquoise;
  color: #fff;
}
</style>