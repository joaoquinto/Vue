import ShowEmpresa from "./ShowEmpresa.js";

export default {
  name: "SimboloEmpresa",
  data() {
    return {
      simboloComponente: this.simbolo,
      dadosEmpresa: null,
    };
  },
  props: {
    simbolo: {
      type: String,
      required: true,
    },
  },
  methods: {
    fetchEmpresa() {
      fetch(`https://api.origamid.dev/stock/${this.simboloComponente}/quote`)
        .then((response) => response.json())
        .then((body) => {
          this.dadosEmpresa = body;
          console.log(this.dadosEmpresa);
        });
    },
  },
  component: {
    ShowEmpresa,
  },
  template: `
  <form>
    <label for="simbolos">Digite o simbolo da empresa</label>
    <input type="text" v-model="simboloComponente" id="simbolos"/>
    <button @click.prevent="fetchEmpresa">Enviar</button>
    <show-empresa :empresa="dadosEmpresa"></show-empresa>
  </form>  
  `,
};
