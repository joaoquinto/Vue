export default {
  name: "exchange",
  data() {
    return {
      usd: 0,
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
    fetchUsd() {
      fetch("https://api.origamid.dev/exchange/usd")
        .then((response) => response.json())
        .then((body) => (this.usd = body.rates.BRL));
    },
  },
  created() {
    this.fetchUsd();
  },
  template: `<li>{{usd | cifraoBrl}}</li>`,
};
