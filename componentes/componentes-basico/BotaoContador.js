export default {
  name: "BotaoContador",
  data() {
    return {
      contador: 0,
    };
  },
  template: `<button @click="contador++">Contador:{{contador}}</button>`,
};
