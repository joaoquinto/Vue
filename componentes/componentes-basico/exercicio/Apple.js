import Exchange from "./Exchange.js";

export default {
  name: "apple",
  data() {
    return {
      apple: 0,
    };
  },
  filters: {
    cifraoBrl(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    fetchAapl() {
      fetch("https://api.origamid.dev/stock/aapl/quote")
        .then((response) => response.json())
        .then((body) => (this.apple = body.marketCap));
    },
  },
  created() {
    this.fetchAapl();
  },
  components: {
    Exchange,
  },
  template: `<ul>
  <exchange></exchange>
  <li>Valor de mercado da apple: {{apple | cifraoBrl}}</li>
  </ul>`,
};
