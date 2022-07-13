const vm = new Vue({
  el: "#app",
  data: {
    /* propriedade que irá receber o fetch de todos os produtos */
    produtos: [],
    produto: false,
    carrinho: [],
    mensagemAlerta: "Item adicionado",
    alertaAtivo: false,
    carrinhoAtivo: false,
  },
  /* metodos que podem ser utilizados para formatações textuais */
  filters: {
    /* parm valor: Referente ao valor que está utilizando o filtro */
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  computed: {
    carrinhoTotal(index) {
      let total = 0;
      if (this.carrinho.length) {
        this.carrinho.forEach((item) => {
          total += item.preco;
        });
      }

      return total;
    },
  },
  methods: {
    /* Faz o fetch da api de produtos */
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((body) => (this.produtos = body));
    },
    /* Faz o fetch do produto expecifico baseado no id */
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((response) => response.json())
        .then((body) => (this.produto = body));
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.produto = false;
    },
    clickForaCarrinho({ target, currentTarget }) {
      if (target === currentTarget) this.carrinhoAtivo = false;
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
      this.alerta(`${nome} adicionado`);
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    checarLocalStorage() {
      if (window.localStorage.carrinho) {
        this.carrinho = JSON.parse(window.localStorage.carrinho);
      }
    },
    compararEstoque() {
      const items = this.carrinho.filter((item) => {
        if (items.id === this.produto.id) {
          return true;
        }
      });
      this.produto.estoque -= items.length
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
    router() {
      const hash = document.location.hash;
      if (hash) {
        this.fetchProduto(hash.replace("#", ""));
      }
    },
  },
  created() {
    /* Faz a requisição de produtos sempre que o Vue é criado */
    this.fetchProdutos();
    this.checarLocalStorage();
    this.router();
  },
  watch: {
    carrinho(valor) {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
    produto() {
      document.title = this.produto.nome || "Techno";
      const hash = this.produto.id || "";
      history.pushState(null, null, `#${hash}`);
      if (this.produto) {
        this.compararEstoque();
      }
    },
  },
});
