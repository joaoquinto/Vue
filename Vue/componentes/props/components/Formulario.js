import ShowEmpresa from "./ShowEmpresa.js";

export default {
  name: "SimboloEmpresa",
  data() {
    return {
      /* Propriedade necessária para manipular o prop
         Cria-se uma referência para poder manipular o dado
      */
      simboloComponente: this.simbolo,
      /* Propriedade que irá receber o valor retornado pelo fetchEmpresa */
      dadosEmpresa: null,
    };
  },
  /* Declarando a prop que irá receber o symbol*/
  props: {
    simbolo: {
      /* Validando a prop */
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
        });
    },
  },
  /* Declarando o componente local */
  components: {
    ShowEmpresa,
  },
  template: `
  <form>
    <label for="simbolos">Digite o simbolo da empresa</label>
    <!-- Informando que o v-model irá receber a prop simbolo -->
    <input type="text" v-model="simboloComponente" id="simbolos"/>
    <button @click.prevent="fetchEmpresa">Enviar</button>
    <!-- Utilizando componente externo com o v-bind que recebe o objeto  -->
    <show-empresa :empresa="dadosEmpresa"></show-empresa>
  </form>  
  `,
};
